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
  infoCard: any,
  loading: boolean,
  dispatch: any,
};

const Analysis: FC<AnalysisProps> = ({ infoCard, loading, dispatch }) => {

  const { connector } = useModel('webSocket', model => ({ connector: model.handleClickChangeSocketUrl }));

  const { cardData } = infoCard

  const { count, setInfoCard } = useModel('refresh',
    model => ({ count: model.infoCard, setInfoCard: model.setInfoCard }));

  useEffect(() => {
    dispatch({type: 'infoCard/query',});
    setInfoCard(() => 0)
  }, [count])

  useEffect(() => {
    console.log(count)
  }, [count])

  useEffect(connector,[])
  useEffect(() => {
    console.log("effect!!!!")
  },[])

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

export default connect(({ infoCard }: { infoCard: { cardData: CardData} }) => ({ infoCard }),)(Analysis);
