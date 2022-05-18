import type { Effect, Reducer, Subscription } from 'umi';
import request from "@/utils/request";
import type {CardData} from "@/pages/dashboard/data";


export interface dashboardModelType {
  namespace: 'dashboard';
  state: {
    cardData: CardData
  };
  effects: {
    query: Effect;
  };
  reducers: {
    setDashboardData: Reducer<CardData>;
  };
  subscriptions: { setup: Subscription };
}

const getDashboardData = () => {
  // console.log(request.get('/api/info_card'))
  return request.get('/api/info_card')
}

const dashboardModel: dashboardModelType = {
  namespace: 'dashboard',

  state: {
    cardData: {
      currentBook: null,
      runTime: null,
      status: false,
    },
  },

  effects: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    *query({payload, callback}, { call, put }) {
      const response = yield call(getDashboardData)
      yield put({
        type: 'setDashboardData',
        payload: response.cardData
      })
    },
  },
  reducers: {
    setDashboardData(state, action) {
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

export default dashboardModel;
