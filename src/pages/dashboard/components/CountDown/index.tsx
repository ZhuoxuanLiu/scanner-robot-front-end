import { Statistic, Row, Col } from 'antd';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
  console.log('finished!');
}

// const onChange = (value: countdownValueType | undefined): void => {
//     console.log(value, 'changed!');
// }

export default (props: any) => {
  const { valueStyle } = props;
  return (
    <Row gutter={16}>
      <Col span={24} style={{ marginTop: 20 }}>
        <Countdown
          value={deadline}
          format="H 时 m 分"
          onFinish={onFinish}
          valueStyle={valueStyle}
        />
      </Col>
    </Row>
  );
};
