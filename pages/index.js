import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { Counter } from '../components/Counter'
import { CounterDummy } from '../components/CounterDummy'
export default function Home() {
  const [count, setCount] = useState(10);
  useEffect(()=>{
    fetch('/api/count')
      .then(res=>res.json())
      .then(result=>{
        setCount(result.value);
      })
  },[])
  return (
    <>
      <h1>Counter</h1>
      {count} <CounterDummy value={count} onChangeValue={(newCount)=>{
        setCount(newCount);
      }}></CounterDummy>
    </>
  )
}
