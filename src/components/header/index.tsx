import { Layout, Space, Typography } from 'antd';
import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Button from '../ui/button';
import { Paths } from '../../paths/paths';

import styles from './index.module.css';

const Header: React.FC = () => {
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
    </Layout.Header>
  );
};
export default Header;
