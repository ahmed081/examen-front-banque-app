import { Table, Radio, Divider } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Code',
    dataIndex: 'code',
    render: (text,object, index) => <Link to={`/clients/${object.code}`}>{text}</Link>,
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
const data = [
    {
        key: '1',
        code:1,
        fullName: 'ahmed',
        email: "ahmed@gmail.com",
      },
  {
    key: '1',
    code:1,
    fullName: 'omar',
    email: "omar@gmail.com",
  },
  {
    key: '1',
    code:1,
    fullName: 'khalid',
    email: "khalid@gmail.com",
  },
]; // rowSelection object indicates the need for row selection



const ListClient = () => {
  return (
    <div>
      
      <Table
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default ListClient;
