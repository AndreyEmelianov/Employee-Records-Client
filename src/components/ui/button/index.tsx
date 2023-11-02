import { ReactNode } from 'react';
import { Form, Button as AntButton } from 'antd';

type ButtonProps = {
  children: ReactNode;
  htmlType?: 'button' | 'reset' | 'submit' | undefined;
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed' | 'ghost' | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: 'default' | 'circle' | 'round' | undefined;
  icon?: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  htmlType = 'button',
  type,
  danger,
  loading,
  shape = 'default',
  icon,
  onClick,
}) => {
  return (
    <Form.Item>
      <AntButton
        onClick={onClick}
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}>
        {children}
      </AntButton>
    </Form.Item>
  );
};
export default Button;
