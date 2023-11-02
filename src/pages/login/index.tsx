import { useState } from 'react';
import { Card, Form, Row, Space, Typography } from 'antd';
import Layout from '../../components/layout';
import Input from '../../components/ui/input';
import PasswordInput from '../../components/ui/password-input';
import Button from '../../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths/paths';
import { UserData, useLoginMutation } from '../../app/services/auth';
import { isErrorWithMessage } from '../../utils/is-error-with-message';
import ErrorMessage from '../../components/error-message';

const Login: React.FC = () => {
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const onLogin = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

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
        <Card title="Войдите" style={{ width: '30rem' }}>
          <Form onFinish={onLogin}>
            <Input type="email" name="email" placeholder="E-mail" />
            <PasswordInput name="password" placeholder="Пароль" />
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегистрироваться</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
export default Login;
