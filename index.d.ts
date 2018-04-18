declare module '*.scss' {
  const content: any;
  export default content;
}
declare module 'g2';
declare module 'rc-drawer-menu';
declare module 'bizcharts';
declare module '@antv/data-set';
declare module 'react-fittext';

interface MenuData {
  name: string;
  icon?: string;
  path?: string;
  children?: MenuData[];
  component?: any;
}

interface User {
  name?: string;
  avatar?: string;
}