import { useState, useMemo, useRef } from 'react';
import './App.css';

function App() {
  const myRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          myRef.current.style.backgroundColor = 'red';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>
    </div>
  );
}

export default App;
