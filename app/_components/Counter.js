'use client';
import { useState } from 'react';

function Counter({ users }) {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((s) => s + 1);
  const decrease = () => setCounter((s) => s - 1);
  return (
    <div>
      <p>There are {users.length} users in the database</p>
      <button onClick={decrease}>-</button>
      <span>{counter}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
