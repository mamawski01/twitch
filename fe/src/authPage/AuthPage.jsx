import { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';

export function AuthPage() {
  const [isLogin, isLoginSet] = useState(true);

  function handleAuthPageToggle() {
    try {
      isLoginSet((pre) => !pre);
      return;
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="">{isLogin ? <Login></Login> : <Register></Register>}</div>
  );
}
