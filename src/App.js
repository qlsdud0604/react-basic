import { useState } from 'react';
import './App.css';

function App() {
  /* 일반적인 변수의 사용 */
  // let number = 1;

  // const add = () => {
  //   number++;
  //   console.log(number);
  // };

  /* useState의 사용 */
  // const [number, setNumber] = useState(1);

  // const add = () => {
  //   setNumber(number + 1);
  //   console.log(number);
  // };

  /* 상태값이 동일해도 레퍼런스가 다르다면 다시 렌더링 됨 */
  // console.log('App 실행됨');

  // const [users, setUsers] = useState([
  //   { id: 1, name: '홍길동' },
  //   { id: 2, name: '임꺽정' },
  //   { id: 3, name: '이순신' },
  //   { id: 4, name: '장보고' },
  // ]);

  // const download = () => {
  //   let sample = [
  //     { id: 1, name: '홍길동' },
  //     { id: 2, name: '임꺽정' },
  //     { id: 3, name: '이순신' },
  //     { id: 4, name: '장보고' },
  //   ];

  //   setUsers(sample);
  // };

  /* 상태값이 변경되어도 레퍼런스가 동일하다면 다시 렌더링 되지 않음 */
  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '이순신' },
    { id: 4, name: '장보고' },
  ];

  const [users, setUsers] = useState(sample);

  const download = () => {
    sample.push({ id: 5, name: '강감찬' });

    setUsers(sample);
  };

  return (
    // <div>
    //   <h1> 숫자 : {number}</h1>
    //   <button onClick={add}>더하기</button>
    // </div>
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((user) => (
        <h1>
          {user.id}, {user.name}
        </h1>
      ))}
    </div>
  );
}

export default App;

// 1. React는 리턴 시 하나의 Dom(태그)만 리턴할 수 있음
// 2. 변수선언은 let 혹은 const로만 해야함 (var의 경우 변수의 scope가 일반적인 언어와는 다름)
// 3. if 사용불가 -> 3항 연산자로 대체
// 4. '&&' 연산자를 통한 조건부 렌더링 가능
// 5. 'undefined'는 변수는 존재하나 값이 정의되지 않은 상태
// 6. css 디자인 방법
//      - 태그 내부에서 디자인을 적용
//      - 외부 파일을 통해 디자인을 적용 (추천)
//      - 라이브러리를 사용해서 디자인을 적용 (추천)
