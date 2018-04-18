import * as React from 'react';

const menuData: MenuData[] = [
  {
    name: 'dashboard',
    icon: 'dashboard', 
    path: 'dashboard',
    children: [
      { name: '分析页', path: 'analysis' },
      { name: '监控页', path: 'monitor' },
      { name: '工作台', path: 'workplace' },
    ]
  },
  {
    name: 'chart',
    icon: 'dashboard',
    path: 'chart',
    children: [
      { 
        name: '基础图标', 
        path: 'basic-charts', 
        component: dynamicLoad(() => import('./pages/chart')) 
      }
    ]
  },
  {
    name: '表单页',
    icon: 'form', 
    path: 'form',
    children: [
      { 
        name: '基础表单', 
        path: 'basic-form', 
        component: dynamicLoad(() => import('./pages/form/basic-form')) 
      },
      { 
        name: '描述表单', 
        path: 'description-form', 
        component: dynamicLoad(() => import('./pages/form/description-form')) 
      },
      { name: '分步表单', path: 'step-form' },
      { name: '高级表单', path: 'advanced-form' }
    ]
  }
];

function formatter(data: MenuData[], parentPath: string = '') {
  /** 路径前缀 */
  const prefix = '';
  const list: MenuData[] = [];
  data.forEach(v => {
    if (v.children) {
      list.push({
        ...v,
        path: `${prefix}/${parentPath}${v.path}`,
        children: formatter(v.children, `${parentPath}${v.path}/`)
      });
    } else {
      list.push({
        ...v,
        path: `${prefix}/${parentPath}${v.path}`
      });
    }
  });
  return list;
}

interface State {
  component: null | React.ComponentClass;
}

// tslint:disable-next-line:no-any
function dynamicLoad(importComponent: any) {
  class DynamicLoad extends React.Component {
    state: State = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component
      });
    }

    render() {
      const C = this.state.component;
      return C
        ? <C {...this.props} />
        : null;
    }
  }

  return DynamicLoad;
}

export default formatter(menuData);