import * as React from 'react';
import { Card, Row } from 'antd';

export interface Props {
  /** 标题 */
  title?: string;
  /** 列数 */
  col?: number;
  /** 分组 */
  groupcol?: number;
}

const empty = () => null;

class LpDescriptionList extends React.Component<Props> {
  render() {
    const { col = 3, title, groupcol, children } = this.props;
    const column = col > 3 ? 3 : col;
    return (
      <div>
        <Card title={title}>
          <Row>
            {React.Children.map(children, child => {
              return child
              // tslint:disable-next-line:no-any
              ? React.cloneElement(child as React.ReactElement<any>, {
                column,
                groupcol
              })
              : empty;
            })}
          </Row>
        </Card>
        <br />
      </div>
    );
  }
}

export default LpDescriptionList;

/**
 * 分组
 * @param arr
 * @param size
 */
// function group<T>(arr: T[], size: number) {
//   var groups = [], i;
//   for (i = 0; i < arr.length; i += size) {
//       groups.push(arr.slice(i, i + size));
//   }
//   return groups;
// }
