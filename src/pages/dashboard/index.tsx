import type { FC } from 'react';
import { Suspense } from 'react';

import { GridContent } from '@ant-design/pro-layout';
import IntroduceRow from './components/IntroduceRow';

import WelcomeCard from './components/WelcomeCard';
import { useRequest } from 'umi';

import { fakeChartData } from './service';
import PageLoading from './components/PageLoading';

import type { AnalysisData } from './data.d';

type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};

const Analysis: FC<AnalysisProps> = () => {
  const { loading, data } = useRequest(fakeChartData);

  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} data={data?.cardData} />
        </Suspense>

        <Suspense fallback={null}>
          <WelcomeCard loading={loading} />
        </Suspense>
      </>
    </GridContent>
  );
};

export default Analysis;
