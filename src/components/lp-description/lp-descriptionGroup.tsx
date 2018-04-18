import * as React from 'react';
import { Col } from 'antd';

export interface Props {
  column?: number;
  groupcol?: number;
}

const empty = () => null;

class LpDescriptionGroup extends React.Component<Props> {
  render() {
    const { column, groupcol, children } = this.props;

    return groupcol ? (
      <Col span={24 / groupcol}>
        {React.Children.map(children, child => {
          return child
            // tslint:disable-next-line:no-any
            ? React.cloneElement(child as React.ReactElement<any>, {
              column,
              groupcol
            })
            : empty;
        })}
      </Col>
    ) : (
      React.Children.map(children, child => {
        return child
            // tslint:disable-next-line:no-any
            ? React.cloneElement(child as React.ReactElement<any>, {
              column,
              groupcol
            })
            : empty;
      })
    );
  }
}

export default LpDescriptionGroup;
