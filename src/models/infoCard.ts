import type { Effect, Reducer, Subscription } from 'umi';
import request from "@/utils/request";
import type {CardData} from "@/pages/dashboard/data";


export interface infoCardModelType {
  namespace: 'infoCard';
  state: {
    cardData: CardData
  };
  effects: {
    query: Effect;
  };
  reducers: {
    setInfoCardData: Reducer<CardData>;
  };
  subscriptions: { setup: Subscription };
}

const getInfoCardData = () => {
  return request.get('/api/dashboard/info_card')
}

const infoCardModel: infoCardModelType = {
  namespace: 'infoCard',

  state: {
    cardData: {
      currentBook: null,
      runTime: null,
      status: 0,
    },
  },

  effects: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    *query({payload, callback}, { call, put }) {
      const response = yield call(getInfoCardData)
      yield put({
        type: 'setInfoCardData',
        payload: response.data
      })
    },
  },
  reducers: {
    setInfoCardData(state, action) {
      return {
        ...state,
        cardData: action.payload,
      };
    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/dashboard') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default infoCardModel;
