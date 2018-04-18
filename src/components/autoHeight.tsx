import * as React from 'react';

function computeHeight(node: Element) {
  const totalHeight = parseInt(getComputedStyle(node).height!, 10);
  const padding =
    parseInt(getComputedStyle(node).paddingTop!, 10) +
    parseInt(getComputedStyle(node).paddingBottom!, 10);
  return totalHeight - padding;
}

function getAutoHeight(n: Element) {
  if (!n) {
    return 0;
  }

  let node = n;

  let height = computeHeight(node);

  while (!height) {
    node = node.parentNode as Element;
    if (node) {
      height = computeHeight(node);
    } else {
      break;
    }
  }

  return height;
}

export interface Props {
  height: number;
}

// tslint:disable-next-line:no-any
const autoHeight = (WrappedComponent: React.ComponentClass<any>) => {
  // tslint:disable-next-line:no-any
  return class extends React.Component<any> {
    root: Element|null;
    state = {
      computedHeight: 0,
    };

    componentDidMount() {
      const { height } = this.props;
      if (!height) {
        const h = getAutoHeight(this.root!);
        this.setState({ computedHeight: h });
      }
    }

    handleRoot = (node: Element|null) => {
      this.root = node;
    };

    render() {
      const { height } = this.props;
      const { computedHeight } = this.state;
      const h = height || computedHeight;
      return (
        <div ref={this.handleRoot}>{h > 0 && <WrappedComponent {...this.props} height={h} />}</div>
      );
    }
  };
};

export default autoHeight;