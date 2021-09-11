import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Home from '../components/home/Home';

const HomePage = () => {
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용3' },
      { id: 3, title: '제목3', content: '내용4' },
    ];

    setBoards([...data]);
    setUser({ id: 1, userName: '홍길동' });
  }, []);

  return <Home boards={boards} setBoards={setBoards} user={user} />;
};

export default HomePage;
