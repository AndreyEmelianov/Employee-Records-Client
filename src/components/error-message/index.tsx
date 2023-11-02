import { Alert } from 'antd';

type ErrorMessageProps = {
  message?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return <Alert message={message} type='error'/>;
};
export default ErrorMessage;
