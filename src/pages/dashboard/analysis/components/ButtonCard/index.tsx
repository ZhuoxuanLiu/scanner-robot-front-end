import ICard from './Card';
import CardButton from './Button';
import CardModal from './Modal';
import {Row, Col, Tooltip, Space} from 'antd';
import {
  InfoCircleOutlined,
  PoweroffOutlined,
  StopOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { CheckCircleTwoTone } from '@ant-design/icons';


const ButtonPanel = () => {
  return (
    <Row gutter={[8, 4]}>
      <Col className="gutter-row" span={12}>
        <div style={{width: "100%"}}><CardButton icon={<PoweroffOutlined />} description={"启动"}/></div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={{width: "100%"}}><CardModal icon={<StopOutlined />} description={"停止"}/></div>
      </Col>
      <Col className="gutter-row" span={24}>
        <div style={{width: "100%"}}><CardModal icon={<ClockCircleOutlined />} description={"定时"}/></div>
      </Col>
    </Row>
  )
}

const ButtonCard = ({ loading, status }: { loading: boolean, status: boolean | undefined }) => {
  return (
    <ICard
      bordered={false}
      title="控制中心"
      action={
        <Tooltip title="控制设备启停">
          <InfoCircleOutlined />
        </Tooltip>
      }
      loading={loading}
      total={ButtonPanel}
      footer={
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <Space>
            <span>
              当前运行状态:
            </span>
            {status ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <StopOutlined twoToneColor="#f5222d" />}
          </Space>
        </div>
      }
      contentHeight={46}
    />
  )
}

export default ButtonCard
