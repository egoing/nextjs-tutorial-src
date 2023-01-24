import React, {useState} from 'react';
export function Counter({down}) {
  const [count, setCount] = useState(0);
  const upHandler = ()=>setCount(oldCount=>oldCount+1);
  const downHandler = ()=>setCount(oldCount=>oldCount-1);
  return <p>
    {count} <input type="button" value="+" onClick={upHandler} />
    {down ? <input type="button" value="-" onClick={downHandler} /> : null}
  </p>;
}
