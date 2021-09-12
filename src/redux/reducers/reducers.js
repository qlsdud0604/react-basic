import { combineReducers } from 'redux';

// 상태변수 (여러개의 컴포넌트에서 공유하는 변수)
const initState = {
  value: 1,
};

// reducer (액션의 결과를 걸러내는 역할)
const counter = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        // return 되는 순간 ui가 변경
        ...state,
        value: state.value + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ counter }); // combineReducers는 여러개의 reducer를 결합해주는 메서드이다.

export default rootReducer;
