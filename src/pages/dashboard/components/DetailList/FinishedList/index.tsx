import { Space, Table, Tag } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

export type Status = {
  color: string;
  text: string;
  code: number;
};

const statusMap = {
  0: {
    color: 'red',
    text: '缺页',
    code: 0,
  },
  1: {
    color: 'green',
    text: '完整',
    code: 1,
  },
};

const filterItem = [
  {
    text: '缺页',
    value: 0,
  },
  {
    text: '完整',
    value: 1,
  },
];

export type TableListItem = {
  key: string;
  name: string;
  pages: number;
  status: Status;
  finishedAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 8; i += 1) {
  tableListDataSource.push({
    key: i.toString(),
    name: 'AppName',
    pages: Math.floor(Math.random() * 20),
    status: statusMap[Math.floor(Math.random() * 10) % 2],
    finishedAt: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
  });
}

const downloadRequest = (key: string) => {
  const downloadLink = '';
  console.log(key);
  window.open(downloadLink);
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '书名',
    width: 160,
    dataIndex: 'name',
    // fixed: 'left',
    // render: (_) => _,
  },

  {
    title: '完成时间',
    width: 140,
    key: 'since',
    dataIndex: 'finishedAt',
    valueType: 'date',
    sorter: (a, b) => a.finishedAt - b.finishedAt,
  },

  {
    title: '总页数',
    width: 80,
    dataIndex: 'pages',
    align: 'right',
    search: false,
    sorter: (a, b) => a.pages - b.pages,
  },

  {
    title: '状态',
    width: 120,
    dataIndex: 'status',
    filters: filterItem,
    onFilter: (value, record) => {
      return record.status.code === value;
    },
    render: (_, record) => {
      // console.log(_, record)
      return <Tag color={record.status.color}>{record.status.text}</Tag>;
    },
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
    width: 120,
    key: 'option',
    valueType: 'option',
    fixed: 'right',
    render: (_, record) => {
      // 在这个
      // console.log(record.key)
      return (
        <span>
          <a key="link" onClick={() => downloadRequest(record.key)}>
            下载
          </a>
        </span>
      );
    },
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
        defaultSelectedRowKeys: [],
      }}
      tableAlertRender={({ selectedRowKeys, selectedRows, onCleanSelected }) => (
        <Space size={24}>
          <span>
            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
              取消选择
            </a>
          </span>
          <span>{`调用量: ${selectedRows.reduce((pre, item) => pre + item.pages, 0)} 次`}</span>
        </Space>
      )}
      tableAlertOptionRender={() => {
        return (
          <Space size={16}>
            <a>批量下载</a>
          </Space>
        );
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dataSource={tableListDataSource}
      scroll={{ x: 'max-content' }}
      options={false}
      search={false}
      rowKey="key"
    />
  );
};
