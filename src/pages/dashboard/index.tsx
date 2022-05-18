import type { FC } from 'react';
import {Suspense, useEffect} from 'react';

import { GridContent } from '@ant-design/pro-layout';
import IntroduceRow from './components/IntroduceRow';

import WelcomeCard from './components/WelcomeCard';
import { connect } from 'umi';

import PageLoading from './components/PageLoading';

import type { CardData } from './data.d';
import {useModel} from "@@/plugin-model/useModel";

type AnalysisProps = {
  dashboard: any,
  loading: boolean,
  dispatch: any,
};

const Analysis: FC<AnalysisProps> = ({ dashboard, loading, dispatch }) => {

  const { connector } = useModel('webSocket', model => ({ connector: model.handleClickChangeSocketUrl }));

  const { cardData } = dashboard

  useEffect(connector,[])

  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} data={cardData}/>
        </Suspense>

        <Suspense fallback={null}>
          <WelcomeCard loading={loading} />
        </Suspense>
      </>
    </GridContent>
  );
};

export default connect(({ dashboard }: { dashboard: { cardData: CardData} }) => ({ dashboard }),)(Analysis);
