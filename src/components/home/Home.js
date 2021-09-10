import React from 'react';

const Home = (props) => {
  /* 구조분할 할당 */
  const { boards, setBoards } = props;

  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <button onClick={() => setBoards([])}>전체 삭제</button>
      {boards.map((item) => (
        <h2>
          제목 : {item.title}, 내용 : {item.content}
        </h2>
      ))}
    </div>
  );
};

export default Home;
