import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Home from '../components/home/Home';

const HomePage = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용3' },
      { id: 3, title: '제목3', content: '내용4' },
    ];

    setBoards([...data]);
  }, []);

  return (
    <div>
      <Header />
      <Home boards={boards} setBoards={setBoards} />
      <Footer />
    </div>
  );
};

export default HomePage;
