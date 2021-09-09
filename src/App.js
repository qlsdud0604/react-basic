import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [string, setString] = useState('합계');

  const getAddResult = () => {
    let sum = 0;

    list.forEach((i) => (sum += i));
    console.log(sum);

    return sum;
  };

  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setString('안녕');
        }}
      >
        문자 변경
      </button>

      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값 추가
      </button>
      <div>
        {list.map((item) => (
          <h1>{item}</h1>
        ))}
      </div>
      <div>
        {string} : {addResult}
      </div>
    </div>
  );
}

export default App;
