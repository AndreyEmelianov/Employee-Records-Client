import { useCurrentQuery } from '../../app/services/auth';

const Auth = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <span>Идёт загрузка...</span>;
  }
  return children;
};
export default Auth;
