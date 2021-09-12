import '../App.css';
import React from 'react';
import { useSelector } from 'react-redux';

const Top = () => {
  const value = useSelector((store) => store.counter.value); // 구조분할 할당

  return (
    <div className="sub-container">
      <h1>Top</h1>
      번호 : {value}
    </div>
  );
};

export default Top;
