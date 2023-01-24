import React, {useState} from 'react';
export function Counter({down}) {
  const [count, setCount] = useState(0);
  const upHandler = ()=>setCount(count+1);
  const downHandler = ()=>setCount(count-1);
  return <p>
    {count} <input type="button" value="+" onClick={upHandler} />
    {down ? <input type="button" value="-" onClick={downHandler} /> : null}
  </p>;
}
