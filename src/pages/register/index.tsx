import { Card, Form, Row, Space, Typography } from 'antd';
import Layout from '../../components/layout';
import Input from '../../components/ui/input';
import PasswordInput from '../../components/ui/password-input';
import Button from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths/paths';

const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегистрируйтесь" style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
export default Register;
