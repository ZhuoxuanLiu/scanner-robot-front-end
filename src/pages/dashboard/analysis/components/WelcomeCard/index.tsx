import {Card, Col, Row, Statistic, Tooltip} from 'antd';
import {InfoCircleOutlined} from "@ant-design/icons";
import DetailBanner from "../DetailBanner";
import styles from './index.less';

const WelcomeCard = ({loading}: { loading: boolean; }) => (
  <Card loading={loading} bordered={false} bodyStyle={{ padding: 40 }}>
    <div className={styles.welcomeCard}>
      <Row gutter={[12,24]}>
        <Col xl={14} lg={12} md={12} sm={24} xs={24}>
          <div className={styles.title}>欢迎，username</div>
        </Col>
        <Col xl={10} lg={12} md={12} sm={24} xs={24}>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="总运行时间" value={"22min"} />
            </Col>
            <Col span={12}>
              <Statistic title="总扫描本数" value={"22"} />
            </Col>
            <Col span={24} style={{ marginTop: "20px" }}>
              <Statistic title={
                <div>
                  未命名书本数
                  <span style={{marginLeft: "20px"}}>
                    <Tooltip title="已扫描但未命名">
                      <InfoCircleOutlined />
                    </Tooltip>
                  </span>
                </div>
              } value={"3"}/>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <DetailBanner/>
        </Col>
      </Row>
    </div>
  </Card>
);

export default WelcomeCard;
