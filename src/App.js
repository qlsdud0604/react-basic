import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    let downloadData = 5;
    setData(downloadData);
  };

  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);

  return (
    <div>
      <button onClick={() => setSearch(2)}>검색하기</button>

      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
