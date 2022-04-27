import React, { useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import LinkModal from '@/pages/dashboard/components/DetailList/Modal';
import ImageViewer from '@/pages/dashboard/components/ImageViewer';

type DataSourceType = {
  id: React.Key;
  title?: string;
  memo?: string;
  created_at?: string;
  current?: number;
};

const defaultData: DataSourceType[] = [
  {
    id: '1',
    title: '未命名pdf',
    memo: '无',
    created_at: '2020-05-26T09:42:56Z',
  },
];

export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<DataSourceType[]>(() => defaultData);

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '文件名',
      dataIndex: 'title',
      width: 240,
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'date',
      readonly: true,
      width: 240,
    },
    {
      title: '已扫描页数',
      dataIndex: 'current',
      readonly: true,
      width: 180,
    },
    {
      title: '备注',
      dataIndex: 'memo',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 120,
      fixed: 'right',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <LinkModal key={'preview'} description={'预览'} title={'预览PDF'}>
          <ImageViewer />
        </LinkModal>,
      ],
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        columns={columns}
        rowKey="id"
        scroll={{ x: 'max-content' }}
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={false}
        editable={{
          type: 'multiple',
          editableKeys,
          actionRender: (row, config, dom) => [dom.save, dom.cancel],
          onValuesChange: (record, recordList) => {
            setDataSource(recordList);
          },
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(true);
              }, 1000);
            });
          },
          onChange: setEditableRowKeys,
        }}
      />
    </>
  );
};
