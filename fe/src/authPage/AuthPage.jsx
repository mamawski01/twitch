import { useState } from "react";

export function AuthPage() {
  const [isLogin, isLoginSet] = useState(true);


function handleAuthPageToggle(){
  try{
isLoginSet( (pre) => !pre)
 return ;
  } catch (error) {
    console.log(error.message);
}
}

  return (
    <div        className="">

      {isLogin && <div>































        
        <h1>Login</h1>
        <button onClick={handleAuthPageToggle}>Switch to Register</button></div>}
    </div>
  )
}

