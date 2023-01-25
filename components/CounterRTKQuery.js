import React, {useState} from 'react';
import { useGetCountQuery } from '../redux/countApi';

export function CounterRTKQuery({down}) {
  const {data, isLoading} = useGetCountQuery();
  
  const [step, setStep] = useState(1);
  const upHandler = ()=>{
    
  };
  if(isLoading){
    return <>Loading...</>
  }
  return <>
    {data.value}
    <input type="number" value={step} onChange={evt=>{
      setStep(Number(evt.target.value));
    }} />
    <input type="button" value="+" onClick={upHandler} />
  </>
}
