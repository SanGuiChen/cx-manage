import React from 'react';
import { Spin } from 'antd';
import './index.less';

export default function Loading() {
  return (
    <div className="loading">
      <Spin tip="加载中"></Spin>
    </div>
  );
}
