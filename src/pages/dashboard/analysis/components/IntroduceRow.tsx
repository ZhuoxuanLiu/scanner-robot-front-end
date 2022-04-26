import { InfoCircleOutlined } from '@ant-design/icons';
import { Progress } from '@ant-design/charts';
import { Col, Row, Tooltip } from 'antd';
import type {CardData} from "@/pages/dashboard/analysis/data";
import numeral from 'numeral';
import ButtonCard from "./ButtonCard";
import InfoCard from './InfoCard';


const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};


const IntroduceRow = ({ loading, data }: { loading: boolean; data: CardData | undefined }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ButtonCard loading={loading} status={data?.status}/>
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
        total={<div>{data?.currentBook}本</div>}
        contentHeight={46}
      >
      </InfoCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <InfoCard
        bordered={false}
        loading={loading}
        title="支付笔数"
        action={
          <Tooltip title="指标说明">
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(6560).format('0,0')}
        contentHeight={46}
      >
      </InfoCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <InfoCard
        loading={loading}
        bordered={false}
        title="运营活动效果"
        action={
          <Tooltip title="指标说明">
            <InfoCircleOutlined />
          </Tooltip>
        }
        total="78%"
        contentHeight={46}
      >
        <Progress
          height={46}
          percent={0.78}
          color="#13C2C2"
          forceFit
          size={8}
          marker={[
            {
              value: 0.8,
              style: {
                stroke: '#13C2C2',
              },
            },
          ]}
        />
      </InfoCard>
    </Col>
  </Row>
);

export default IntroduceRow;
