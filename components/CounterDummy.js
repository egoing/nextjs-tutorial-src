import React, {useState} from 'react';
export function CounterDummy({value, onChangeValue}) {
  const [step, setStep] = useState(1);
  const upHandler = ()=>{
    onChangeValue(value+step);
  };
  return <>
    <input type="number" value={step} onChange={evt=>{
      setStep(Number(evt.target.value));
    }} />
    <input type="button" value="+" onClick={upHandler} />
  </>;
}
