import React from 'react';
import {Button, Space, Table, Tag} from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';


const valueEnum = {
  0: 'open',
  1: 'closed',
  2: 'processing',
};

export type Status = {
  color: string;
  text: string;
};

const statusMap = {
  0: {
    color: 'blue',
    text: '进行中',
  },
  1: {
    color: 'green',
    text: '已完成',
  },
  2: {
    color: 'volcano',
    text: '警告',
  },
  3: {
    color: 'red',
    text: '失败',
  },
  4: {
    color: '',
    text: '未完成',
  },
};

export type TableListItem = {
  key: number;
  name: string;
  pages: number;
  state: string;
  status: Status;
  finishedAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    pages: Math.floor(Math.random() * 20),
    state: valueEnum[Math.floor(Math.random() * 10) % 3],
    status: statusMap[Math.floor(Math.random() * 10) % 5],
    finishedAt: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '书名',
    width: 160,
    dataIndex: 'name',
    fixed: 'left',
    // render: (_) => _,
  },

  {
    title: '完成时间',
    width: 140,
    key: 'since',
    dataIndex: 'finishedAt',
    valueType: 'date',
    sorter: (a, b) => a.finishedAt - b.finishedAt,
    // renderFormItem: () => {
    //   return <RangePicker />;
    // },
  },

  {
    title: '总页数',
    width: 120,
    dataIndex: 'pages',
    align: 'right',
    search: false,
    sorter: (a, b) => a.pages - b.pages,
  },


  {
    disable: true,
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },

  {
    title: '状态',
    width: 120,
    dataIndex: 'status',
    filters: true,
    onFilter: true,
    valueType: 'select',
    render: ((_, record) => {
      console.log(_, record)
      return (<Tag color={record.status.color}>{record.status.text}</Tag>)
    }),
  },

  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
    search: false,
  },
  {
    title: '操作',
    width: 80,
    key: 'option',
    valueType: 'option',
    fixed: 'right',
    render: () => [<a key="link">链路</a>],
  },
];

export default () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      rowSelection={{
        // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
        // 注释该行则默认不显示下拉选项
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
        defaultSelectedRowKeys: [1],
      }}
      tableAlertRender={({ selectedRowKeys, selectedRows, onCleanSelected }) => (
        <Space size={24}>
          <span>
            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
              取消选择
            </a>
          </span>
          <span>{`调用量: ${selectedRows.reduce(
            (pre, item) => pre + item.pages,
            0,
          )} 次`}</span>
        </Space>
      )}
      tableAlertOptionRender={() => {
        return (
          <Space size={16}>
            <a>批量下载</a>
          </Space>
        );
      }}
      dataSource={tableListDataSource}
      scroll={{ x: 1300 }}
      options={false}
      search={false}
      rowKey="key"
      headerTitle="批量操作"
      toolBarRender={() => [<Button key="show">查看日志</Button>]}
    />
  );
};
