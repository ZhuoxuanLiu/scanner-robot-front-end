import ProCard, { StatisticCard } from '@ant-design/pro-card';
import { Col } from 'antd';
import FinishedList from '@/pages/dashboard/components/DetailList/FinishedList';
import LoadingList from '@/pages/dashboard/components/DetailList/LoadingList';
const { Statistic } = StatisticCard;
import styles from './index.less';

const finishNumber = 8;
const loadingNumber = 1;

export default () => {
  return (
    <div className={styles.detailBanner}>
      <ProCard
        tabs={{
          onChange: (key) => {
            console.log('key', key);
          },
        }}
      >
        <ProCard.TabPane
          style={{ width: '100%' }}
          key={'1'}
          tab={
            <Statistic
              layout="vertical"
              title={'已完成'}
              value={finishNumber}
              status={'success'}
              style={{ width: 120, borderRight: '1px solid #f0f0f0' }}
            />
          }
        >
          <Col span={24}>
            <FinishedList />
          </Col>
        </ProCard.TabPane>

        <ProCard.TabPane
          style={{ width: '100%' }}
          key={'2'}
          tab={
            <Statistic
              layout="vertical"
              title={'进行中'}
              value={loadingNumber}
              status={'processing'}
              style={{ width: 120 }}
            />
          }
        >
          <Col span={24}>
            <LoadingList />
          </Col>
        </ProCard.TabPane>
      </ProCard>
    </div>
  );
};
