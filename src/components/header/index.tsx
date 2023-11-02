import { Layout, Space, Typography } from 'antd';
import { LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../ui/button';
import { Paths } from '../../paths/paths';

import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/auth/authSlice';

const Header: React.FC = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem('employeeToken');
    navigate('/login');
  };

  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <Button type="ghost">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </Button>
        </Link>
      </Space>
      {user ? (
        <Button type="ghost" icon={<LogoutOutlined />} onClick={onLogout}>
          Выйти
        </Button>
      ) : (
        <Space>
          <Link to={Paths.register}>
            <Button type="ghost" icon={<UserOutlined />}>
              Зарегистрироваться
            </Button>
          </Link>
          <Link to={Paths.login}>
            <Button type="default" icon={<LoginOutlined />}>
              Войти
            </Button>
          </Link>
        </Space>
      )}
    </Layout.Header>
  );
};
export default Header;
