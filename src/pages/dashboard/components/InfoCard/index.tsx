import { Card } from 'antd';
import type { CardProps } from 'antd/es/card';
import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

type totalType = () => React.ReactNode;

const renderTotal = (total?: number | totalType | React.ReactNode) => {
  if (!total && total !== 0) {
    return null;
  }
  let totalDom;
  switch (typeof total) {
    case 'undefined':
      totalDom = null;
      break;
    case 'function':
      totalDom = <div className={styles.total}>{total()}</div>;
      break;
    default:
      totalDom = <div className={styles.total}>{total}</div>;
  }
  return totalDom;
};

export type InfoCardProps = {
  title: React.ReactNode;
  action?: React.ReactNode;
  total?: React.ReactNode | number | (() => React.ReactNode | number);
  contentHeight?: number;
  avatar?: React.ReactNode;
  style?: React.CSSProperties;
} & CardProps;

class InfoCard extends React.Component<InfoCardProps> {
  renderContent = () => {
    const { contentHeight, title, avatar, action, total, children, loading } = this.props;
    if (loading) {
      return false;
    }
    return (
      <div className={styles.infoCard}>
        <div
          className={classNames(styles.infoTop, {
            [styles.infoTopMargin]: !children,
          })}
        >
          <div className={styles.avatar}>{avatar}</div>
          <div className={styles.metaWrap}>
            <div className={styles.meta}>
              <span className={styles.title}>{title}</span>
              <span className={styles.action}>{action}</span>
            </div>
            {renderTotal(total)}
          </div>
        </div>
        {children && (
          <div className={styles.content} style={{ height: contentHeight || 'auto' }}>
            <div className={contentHeight && styles.contentFixed}>{children}</div>
          </div>
        )}
      </div>
    );
  };

  render() {
    const {
      loading = false,
      contentHeight,
      title,
      avatar,
      action,
      total,
      children,
      ...rest
    } = this.props;
    return (
      <Card
        loading={loading}
        bodyStyle={{ padding: '20px 24px 8px 24px', height: '182px' }}
        {...rest}
      >
        {this.renderContent()}
      </Card>
    );
  }
}

export default InfoCard;
