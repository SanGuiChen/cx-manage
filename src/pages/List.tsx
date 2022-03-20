import React from 'react'
import { Table, Button } from 'antd'

const columns = [
  {
    title: '文章标题',
    dataIndex: 'title',
    width:'60%'
  },
  {
    title: '发布时间',
    dataIndex: 'time',
    width:'20%'
  },
  {
    title: '操作',
    dataIndex: 'action',
  },
];

// 标题与副标题组件
const TitleComp = () => {
  return (
    <>
      <div><a href="!#">标题</a></div>
      <p style={{color: '#999'}}>副标题</p>
    </>
 )
}

const ActionBtn = () => {
  return (
    <>
      <Button type='primary' style={{marginRight: '10px'}}>编辑</Button>
      <Button type='primary' danger>删除</Button>
    </>
  )

}

interface IData {
  key: number,
  title: React.ReactNode,
  time: string,
  action: React.ReactNode
}

const data: IData[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    title: <TitleComp></TitleComp>,
    time: '12',
    action: <ActionBtn />,
  });
}

export default function List() {
  return (
    <Table showHeader={false} columns={columns} dataSource={data}>

    </Table>
  )
}
