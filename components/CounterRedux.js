import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {up} from '../redux/countSlice';
export function CounterRedux({down}) {
  const [step, setStep] = useState(1);
  const value = useSelector(state=>state.count.value);
  const dispatch = useDispatch();
  const upHandler = ()=>dispatch(up(step))
  return <>
    {value} 
    <input type="number" value={step} onChange={evt=>{
      setStep(Number(evt.target.value));
    }} />
    <input type="button" value="+" onClick={upHandler} />
  </>
}
