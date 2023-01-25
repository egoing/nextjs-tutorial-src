import React, {useState} from 'react';
import { useGetCountQuery } from '../redux/countApi';
import { useSetCountMutation } from '@/redux/countApi';
export function CounterRTKQuery({down}) {
  const {data, isLoading} = useGetCountQuery();
  const [setCount, {isLoading:isSetCountLoading}] = useSetCountMutation();
  const [step, setStep] = useState(1);
  const upHandler = ()=>{
    setCount(data.value+step);
  };
  if(isLoading || isSetCountLoading){
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
