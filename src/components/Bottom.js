import '../App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/actions';

const Bottom = () => {
  const dispatch = useDispatch();

  return (
    <div className="sub-container">
      <h1>Bottom</h1>
      <button onClick={() => dispatch(actions.increase())}>증가</button>
      <button onClick={() => dispatch(actions.decrease())}>감소</button>
    </div>
  );
};

export default Bottom;
