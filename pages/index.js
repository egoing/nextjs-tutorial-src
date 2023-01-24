import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { Counter } from '../components/Counter'
import { CounterDummy } from '../components/CounterDummy'
export default function Home() {
  const [count, setCount] = useState(10);
  return (
    <>
      <h1>Counter</h1>
      <Counter></Counter>
      {count} <CounterDummy value={count} onChangeValue={(newCount)=>{
        setCount(newCount);
      }}></CounterDummy>
    </>
  )
}
