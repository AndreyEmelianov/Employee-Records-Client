import { Form, Input as AntInput } from 'antd';

type InputProps = {
  name: string;
  placeholder: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({ name, placeholder, type = 'text' }) => {
  return (
    <Form.Item
      name={name}
      shouldUpdate={true}
      rules={[
        {
          required: true,
          message: 'Обязательное поле',
        },
      ]}>
      <AntInput placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};
export default Input;
