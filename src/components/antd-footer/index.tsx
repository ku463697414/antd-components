import * as React from 'react';
import * as classNames from 'classnames';

export interface FooterLink {
  title: string;
  href: string;
  target: '_blank' | '_self';
}

export interface Props {
  links?: FooterLink[];
  copyright?: JSX.Element;
  className?: string;
}

const styles = require('./index.scss');

class AntdFooter extends React.Component<Props> {
  render() {
    const { links, copyright, className } = this.props;
    const clsString = classNames(styles['Antd-footer'], className);
    return (
      <div className={clsString}>
        {links && (
          <div className={styles['links']}>
            {links.map((v, i) => (
              <a key={i} target={v.target} href={v.href}>
                {v.title}
              </a>
            ))}
          </div>
        )}
        {copyright && <div className={styles['copyright']}>{copyright}</div>}
      </div>
    );
  }
}

export default AntdFooter;
