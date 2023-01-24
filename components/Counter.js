import React, {useState} from 'react';
export function Counter({down}) {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const upHandler = ()=>setCount(oldCount=>oldCount+step);
  const downHandler = ()=>setCount(oldCount=>oldCount-step);
  return <p>
    {count} 
    <input type="number" value={step} onChange={evt=>{
      setStep(Number(evt.target.value));
    }} />
    <input type="button" value="+" onClick={upHandler} />
    {down ? <input type="button" value="-" onClick={downHandler} /> : null}
  </p>;
}
