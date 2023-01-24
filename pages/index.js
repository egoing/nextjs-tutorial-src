import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Counter } from '../components/Counter'
import { CounterDummy } from '../components/CounterDummy'
export async function getServerSideProps() {
  if(process.env.HOST_URL===undefined) {
    throw new Error('HOST_URL is not defined. .env.local is not loaded.');
  }
  const resp = await fetch(process.env.HOST_URL+'api/count');
  const result = await resp.json();
  return {
    props:{
      count:result.value
    }
  }
}
export default function Home(props) {
  const [count, setCount] = useState(props.count);
  return (
    <>
      <h1><Link href="/">Counter</Link></h1>
      <ul>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/docs/1">Getting Started</Link></li>
        <li><Link href="/docs/2">Basic Features</Link></li>
      </ul>
      {count} <CounterDummy value={count} onChangeValue={async (newCount)=>{
        const response = await fetch('/api/count', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({value:newCount})
        });
        const result = await response.json();
        setCount(result.value);
      }}></CounterDummy>
    </>
  )
}
