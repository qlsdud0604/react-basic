import React from 'react';

const WritePage = () => {
  const handleWrite = () => {
    let post = { id: 6, title: '안녕하세요6' };
  };

  return (
    <div>
      <h1>글쓰기</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목을 입력하세요." />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
