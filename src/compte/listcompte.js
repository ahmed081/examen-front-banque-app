import { Table, Radio, Divider } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Client',
    dataIndex: 'client',
    render: (text,object, index) => <Link to={`/clients/${object.code}`}>{text}</Link>,
  },
  {
    title: 'Solde',
    dataIndex: 'solde',
  },
  {
    title: 'Etat',
    dataIndex: 'etat',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (text,object, index) => <div> <Link to={`/comptes/${object.id}`}>afficher</Link></div>,
  },
];
const data = [
    {
        key: '1',
        id: '1',
        client: 'ahmed',
        solde:20000,
        etat: 'ACTIVE',
        type: "EPARGNE",
    },
    {
      key: '2',
      id: '2',
      
      client: 'oamar',
      solde:658990.5,
      etat: 'ACTIVE',
      type: "EPARGNE",
  },
  {
    key: '3',
    id: '3',
    client: 'khalid',
    solde:35000,
    etat: 'ACTIVE',
    type: "EPARGNE",
},
  
]; // rowSelection object indicates the need for row selection



const ListCompte = () => {
  return (
    <div>
      
      <Table
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default ListCompte;
