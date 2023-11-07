import { PlusCircleOutlined } from '@ant-design/icons';
import Layout from '../../components/layout';
import Button from '../../components/ui/button';
import { Table } from 'antd';
import { useGetAllEmployeesQuery } from '../../app/services/employees';
import type { ColumnsType } from 'antd/es/table';
import { Employee } from '@prisma/client';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../paths/paths';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { useEffect } from 'react';

const columns: ColumnsType<Employee> = [
  {
    title: 'Имя',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
];

const Employees: React.FC = () => {
  const { data, isLoading } = useGetAllEmployeesQuery();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate('login');
    }
  }, [navigate, user]);

  const onAddUser = () => {
    navigate(Paths.employeeAdd);
  };

  return (
    <Layout>
      <Button type="primary" onClick={onAddUser} icon={<PlusCircleOutlined />}>
        Добавить сотрудника
      </Button>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.employee}/${record.id}`),
          };
        }}
      />
    </Layout>
  );
};
export default Employees;
