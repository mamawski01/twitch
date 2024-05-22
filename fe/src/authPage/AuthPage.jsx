import { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';

import './authPage.css';

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
    <div className=" auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle}></Login>
      ) : (
        <Register switchAuthHandler={handleAuthPageToggle}></Register>
      )}
    </div>
  );
}
