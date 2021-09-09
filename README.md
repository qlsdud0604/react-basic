# 리액트의 기초
---
## :mag_right: 리액트의 특징
**✔️ 리액트란?**   
ㆍ 리액트는 **데이터 변경을 감지**해서 **UI가 자동으로 업데이트** 되도록 하는 프레임워크이다. → **Observer 패턴**이라고 함   
ㆍ 데이터 변경 감지를 위한 **엔진**이 필요하다. → **node.js 서버**를 사용   

**✔️ npm과 npx**   
ㆍ npm은 **의존성 관리 도구**로, 자바로 비유하자면 maven, gradle과 같은 역할이다.   
ㆍ npm : **프로젝트 갯수만큼 로컬에 다운로드** 한다.   
ㆍ npx : 다운받은 **라이브러리를 재사용**하며, 해당 라이브러리가 없을 시 다운로드한다.   

**✔️ 리액트의 특징**   
ㆍ JavaScript 문법안에 HTML 문법 사용이 가능하다. → **JSX 문법**이라고 함   
ㆍ 리액트에서 페이지 전환이란 **Body의 내용을 변경**하는 것이다. → **Single Page Application**이라고 함   
ㆍ 리액트에서는 단 하나의 태그만 리턴한다.   
ㆍ **리액트 엔진의 기본 전략**은 부모 태그가 다시 렌더링 되면, **자식 태그도 다시 렌더링을 해야 하는지 확인하는 연산 과정**을 거친다.   
</br>

---
## :mag_right: 깊은 복사 함수
**✔️ 깊은 복사 함수의 사용 이유**   
ㆍ 자식 태그도 다시 렌더링을 해야 하는지 확인하는 **연산의 최적화를 위해** 사용한다. → 깊은 복사는 **레퍼런스만 비교**하기 때문에 효율적   

**✔️ spread 연산자**
```javascript
const a = [1, 2, 3];
const b = [...a];   // a의 값을 b 변수에 복사
b.push(4);   // b의 값 변경
const c = [0, ...a, 4];

console.log(`a의 값은 ${a}`);   // 1, 2, 3 출력
console.log(`b의 값은 ${b}`);   // 1, 2, 3, 4 출력
console.log(`c의 값은 ${c}`);   // 0, 1, 2, 3, 4 출력
```

**✔️ concat 연산자**
```javascript
const a2 = [1, 2, 3];
const b2 = a2.concat(4);

console.log(`a2의 값은 ${a2}`);   // 1, 2, 3 출력
console.log(`b2의 값은 ${b2}`);   // 1, 2, 3, 4 출력
```

**✔️ filter 연산자**
```javascript
const a3 = [1, 2, 3];
const b3 = a3.filter((n) => { return n != 1; });   // boolean 타입을 리턴, true인 값만 걸러냄

console.log(`a3의 값은 ${a3}`);   // 1, 2, 3 출력
console.log(`b3의 값은 ${b3}`);   // 2, 3 출력
```

**✔️ slice 연산자**
```javascript
const a4 = [1, 2, 3];
const b4 = a4.slice(0, 2);
const c4 = [...a4.slice(0, 2)];
        
console.log(`a4의 값은 ${a4}`);   // 1, 2, 3 출력
console.log(`b4의 값은 ${b4}`);   // 1, 2 출력
console.log(`c4의 값은 ${c4}`);   // 1, 2 출력
```

**✔️ map 연산자**
```javascript
const a5 = [1, 2, 3];
a5.forEach((n) => { console.log(n); });   // 해당 객체의 원소를 하나씩 순회, 리턴 못함
const b5 = a5.map((n) => n + 10);   // 해당 객체의 원소를 하나씩 순회, 리턴 가능, 가공 가능

console.log(`a5의 값은 ${a5}`);   // 1, 2, 3 출력
console.log(`b5의 값은 ${b5}`);   // 11, 12, 13 출력
```
```javascript
const users = [   // 기존의 데이터
  { id: 1, name: "홍길동", phone: "2222" },
  { id: 2, name: "임꺽정", phone: "3333" },
  { id: 3, name: "이순신", phone: "4444" }
];

const updateUserDto = {   // 변경하고자 하는 데이터
  id: 2, name: "강감찬"
};

const newUser = users.map(user => user.id === updateUserDto.id ? { ...user, ...updateUserDto } : user);   // map 연산자를 이용해서 기존 데이터 수정
```
</br>

---
## :mag_right: useState
**✔️ userState의 사용 이유**   
```javascript
function App() {
  let number = 1;

  const add = () => {
    number++;
    console.log(number);
  };

  return (
    <div>
      <h1> 숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
    </div>
  );
}

export default App;
```
ㆍ 리액트는 일반적인 변수의 변경에는 렌더링이 되지 않는다. 따라서, 화면상에서는 number의 값이 1로 계속 유지된다.   

```javascript
function App() {
  const [number, setNumber] = useState(1);

  const add = () => {
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <div>
      <h1> 숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
    </div>
  );
}

export default App;
```
ㆍ 리액트 내의 hooks 라이브러리를 이용해 상태값을 선언함으로써 위 문제를 해결한다.   
ㆍ useState 키워드를 이용해 number를 상태값으로 만든다.   
ㆍ setNumber를 이용해서 상태값을 변경할 때마다 화면상에서 number의 값은 1씩 증가한다.   

**✔️ 렌더링의 조건**   
```javascript
function App() {
  console.log('App 실행됨');

  const [users, setUsers] = useState([
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '이순신' },
    { id: 4, name: '장보고' },
  ]);

  const download = () => {
    let sample = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '임꺽정' },
      { id: 3, name: '이순신' },
      { id: 4, name: '장보고' },
    ];

    setUsers(sample);
  };

  return (
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
```
ㆍ users의 상태값과 sample의 데이터가 동일해도 레퍼런스가 다르기 때문에 다운로드 버튼을 눌렀을 때 다시 렌더링 된다.

```javascript
function App() {
  console.log('App 실행됨');
  
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
```
ㆍ sample의 값이 push에 의해서 변경되어도 sample의 레퍼런스와 users의 레퍼런스가 동일하기 때문에 렌더링이 되지 않는다.   
ㆍ 결국 리액트는 상태값의 변경과 함께 레퍼런스도 변경이 되어야 렌더링이 된다.   
