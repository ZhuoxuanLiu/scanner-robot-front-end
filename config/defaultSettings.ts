import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  colorWeak: false,
  title: '扫描机器人',
  pwa: false,
  logo: '/robot_arm.svg',
  iconfontUrl: '',
};

export default Settings;
