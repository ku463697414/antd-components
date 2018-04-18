import * as React from 'react';
import { Card, Spin } from 'antd';
import * as classNames from 'classnames';
import { CardProps } from 'antd/es/card';

export interface Props extends CardProps {
  contentHeight?: number | string;
  title: string;
  avatar?: JSX.Element;
  action: JSX.Element;
  total: string;
  footer?: JSX.Element;
}

const styles = require('./index.scss');

class LpChartCard extends React.Component<Props> {
  state = {
    loading: false
  };

  render() {
    const { 
      loading,
    } = this.state;
    const {
      contentHeight, 
      title, 
      avatar, 
      action, 
      total, 
      footer,
      children,
      ...rest 
    } = this.props;
    const content = (
      <div className={styles.chartCard}>
        <div
          className={classNames(styles.chartTop, { [styles.chartTopMargin]: (!children && !footer) })}
        >
          <div className={styles.avatar}>
            {
              avatar
            }
          </div>
          <div className={styles.metaWrap}>
            <div className={styles.meta}>
              <span className={styles.title}>{title}</span>
              <span className={styles.action}>{action}</span>
            </div>
            {(total !== undefined) && (<div className={styles.total} dangerouslySetInnerHTML={{ __html: total }} />)}
          </div>
        </div>
        {
          children && (
            <div className={styles.content} style={{ height: contentHeight || 'auto' }}>
              <div className={contentHeight && styles.contentFixed}>
                {children}
              </div>
            </div>
          )
        }
        {
          footer && (
            <div className={classNames(styles.footer, { [styles.footerMargin]: !children })}>
              {footer}
            </div>
          )
        }
      </div>
    );

    return (
      <Card
        bodyStyle={{ padding: '20px 24px 8px 24px' }}
        {...rest}
      >
        {<Spin spinning={loading}>{content}</Spin>}
      </Card>
    );
  }
}

export default LpChartCard;