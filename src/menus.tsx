import * as React from 'react';

const menuData: MenuData[] = [
  {
    name: '基本组件',
    icon: 'form',
    path: 'components',
    children: [
      {
        name: '员工卡片',
        path: 'user-card',
        component: dynamicLoad(() => import('./pages/user-cards'))
      },
      {
        name: '搜索表单',
        path: 'search-form',
        component: dynamicLoad(() => import('./pages/search-form'))
      },
      {
        name: '模态框',
        path: 'modal',
        component: dynamicLoad(() => import('./pages/modal'))
      },
      {
        name: '库卡片',
        path: 'lab-card',
        component: dynamicLoad(() => import('./pages/lab-cards'))
      }
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
      return C ? <C {...this.props} /> : null;
    }
  }

  return DynamicLoad;
}

export default formatter(menuData);
