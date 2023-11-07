import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditEmployeeMutation, useGetEmployeeByIdQuery } from '../../app/services/employees';
import Layout from '../../components/layout';
import { Row } from 'antd';
import EmployeeForm from '../../components/employee-form';
import { Employee } from '@prisma/client';
import { Paths } from '../../paths/paths';
import { isErrorWithMessage } from '../../utils/is-error-with-message';

const EditEmployee = () => {
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  const { data, isLoading } = useGetEmployeeByIdQuery(params.id || '');
  const [editEmployee] = useEditEmployeeMutation();

  if (isLoading) {
    return <span>Загрузка...</span>;
  }

  const handleEditUser = async (employee: Employee) => {
    try {
      const editedEmployee = {
        ...data,
        ...employee,
      };

      await editEmployee(editedEmployee).unwrap();
      navigate(`${Paths.status}/updated`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Неизвестная ошибка');
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <EmployeeForm
          title="Редактировать сотрудника"
          btnText="Редактировать"
          error={error}
          employee={data}
          onFinish={handleEditUser}
        />
      </Row>
    </Layout>
  );
};
export default EditEmployee;
