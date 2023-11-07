import { Employee } from '@prisma/client';
import { Card, Form, Space } from 'antd';
import Input from '../ui/input';
import ErrorMessage from '../error-message';
import Button from '../ui/button';

type EmployeeFormProps<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
};

const EmployeeForm: React.FC<EmployeeFormProps<Employee>> = ({
  onFinish,
  btnText,
  title,
  error,
  employee,
}) => {
  return (
    <Card title={title} style={{ width: '30rem' }}>
      <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
        <Input type="text" name="firstName" placeholder="Имя" />
        <Input type="text" name="lastName" placeholder="Фамилия" />
        <Input type="number" name="age" placeholder="Возраст" />
        <Input type="text" name="address" placeholder="Адрес" />
        <Space>
          <ErrorMessage message={error} />
          <Button htmlType="submit">{btnText}</Button>
        </Space>
      </Form>
    </Card>
  );
};
export default EmployeeForm;
