import { use } from 'react';
import { AuthContext } from '../contexts/AuthContexts/AuthContext';

const UseAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default UseAuth;
