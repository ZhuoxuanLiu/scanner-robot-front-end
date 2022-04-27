import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import type { CardData } from '@/pages/dashboard/data';
import CountDown from '@/pages/dashboard/components/CountDown';
import ButtonCard from './ButtonCard';
import InfoCard from './InfoCard';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const IntroduceRow = ({ loading, data }: { loading: boolean; data: CardData | undefined }) => {
  console.log(data?.status, 'row');
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ButtonCard loading={loading} status={data?.status} />
      </Col>

      <Col {...topColResponsiveProps}>
        <InfoCard
          bordered={false}
          loading={loading}
          title="已扫描书本数"
          action={
            <Tooltip title="扫描完成书本数">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={<div style={{ marginTop: 25 }}>{data?.currentBook}本</div>}
          contentHeight={46}
        />
      </Col>
      <Col {...topColResponsiveProps}>
        <InfoCard
          bordered={false}
          loading={loading}
          title="已运行时间"
          action={
            <Tooltip title="本次开机运行时间">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={<div style={{ marginTop: 25 }}>{data?.runTime}分钟</div>}
          contentHeight={46}
        />
      </Col>
      <Col {...topColResponsiveProps}>
        <InfoCard
          loading={loading}
          bordered={false}
          title="已设置关闭时间"
          action={
            <Tooltip title="倒计时关闭时间">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={<CountDown valueStyle={{ fontSize: '35px' }} />}
          contentHeight={46}
        />
      </Col>
    </Row>
  );
};

export default IntroduceRow;
