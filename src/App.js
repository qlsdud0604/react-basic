import './App.css';

let a = 10; // 변수
const b = 20; // 상수

function App() {
  return (
    <div>
      <div style={myStyle}>
        안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
      <hr />
    </div>
  );
}

export default App;

const myStyle = {
  color: 'red',
};

// 1. React는 리턴 시 하나의 Dom(태그)만 리턴할 수 있음
// 2. 변수선언은 let 혹은 const로만 해야함 (var의 경우 변수의 scope가 일반적인 언어와는 다름)
// 3. if 사용불가 -> 3항 연산자로 대체
// 4. '&&' 연산자를 통한 조건부 렌더링 가능
// 5. 'undefined'는 변수는 존재하나 값이 정의되지 않은 상태
// 6. css 디자인 방법
//      - 태그 내부에서 디자인을 적용
//      - 외부 파일을 통해 디자인을 적용 (추천)
//      - 라이브러리를 사용해서 디자인을 적용 (추천)
