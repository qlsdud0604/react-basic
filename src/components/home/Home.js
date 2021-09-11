import React from 'react';
import styled from 'styled-components';

const Home = (props) => {
  /* 구조분할 할당 */
  const { boards, setBoards, user } = props;

  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>
      {boards.map((item) => (
        <h2>
          제목 : {item.title}, 내용 : {item.content}
        </h2>
      ))}
    </div>
  );
};

export default Home;

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.userName === '홍길동' ? 'blue' : 'red')};
`;

/* StyledDeleteButton의 스타일을 상속 받음 */
const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
`;
