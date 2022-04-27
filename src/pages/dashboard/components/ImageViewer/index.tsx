import { Col, Image, Row } from 'antd';

type ImageInfo = {
  id: string;
  src: string;
};

const ImageViewer = () => {
  const imageMap: ImageInfo[] = [
    {
      id: '1',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
    {
      id: '2',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
    {
      id: '3',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
    {
      id: '4',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
  ];

  return (
    <Row gutter={[4, 4]}>
      <Col className="gutter-row" span={24}>
        <Image.PreviewGroup>
          {imageMap.map((item) => {
            return <Image width={100} src={item.src} key={item.id} />;
          })}
        </Image.PreviewGroup>
      </Col>
    </Row>
  );
};

export default ImageViewer;
