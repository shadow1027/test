/**
 * title: 管理员日志
 */
import React from 'react';
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {PERMISSION_LOG as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function LoginLog({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(LoginLog, namespace)
export default connect(store => store[namespace])(WrappedComponent);
