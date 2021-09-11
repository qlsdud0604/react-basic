import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <button onClick={() => props.history.goBack()}>뒤로가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
