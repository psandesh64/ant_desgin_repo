import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { 
    useQuery,
    useMutation,
    useQueryClient 
} 
    from '@tanstack/react-query';
import { fakeAPI } from '../fakeAPI/fakeAPI';

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
}

const columns: TableColumnsType<User> = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
  },
  {
    key:'name',
    title: 'Name',
    dataIndex: 'name'
  },
  {
    key:'email',
    title: 'Email',
    dataIndex: 'email'
  },
  {
    key:'status',
    title: 'Status',
    dataIndex: 'status'
  },
];

const staticData: User[] = [
  {
    id: 0,
    name: 'Jack',
    email: 'Kathmandu',
    status: 'active'
  },
];

const DemoTable: React.FC = () => {
  const {data: queryData, isPending, error} = useQuery({
    queryKey: ['data'],
    queryFn: async () => await fakeAPI.getUsers()
  });
  // const queryClient = useQueryClient();

  return (
  <>
    <Table<User> className='demo__table' columns={columns} dataSource={queryData?.data} />
  </>
)};

export default DemoTable;