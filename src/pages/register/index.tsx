import { Card, Form, Row, Space, Typography } from 'antd';
import Layout from '../../components/layout';
import Input from '../../components/ui/input';
import PasswordInput from '../../components/ui/password-input';
import Button from '../../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths/paths';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { useState } from 'react';
import { useRegisterMutation } from '../../app/services/auth';
import { User } from '@prisma/client';
import { isErrorWithMessage } from '../../utils/is-error-with-message';
import ErrorMessage from '../../components/error-message';

type RegisterData = Omit<User, 'id'> & { confirmPassword: string };

const Register: React.FC = () => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const [registerUser] = useRegisterMutation();

  const register = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap();
      navigate('/');
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
        <Card title="Зарегистрируйтесь" style={{ width: '30rem' }}>
          <Form onFinish={register}>
            <Input name="name" placeholder="Имя" />
            <Input type="email" name="email" placeholder="E-mail" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput name="confirmPassword" placeholder="Повторите пароль" />
            <Button type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегистрированны? <Link to={Paths.login}>Войти</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
export default Register;
