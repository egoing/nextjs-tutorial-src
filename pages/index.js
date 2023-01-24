import styles from '@/styles/Home.module.css'
function Counter(){
  return <p>
    0 <input type="button" value="+"/>
  </p>
}
export default function Home() {
  return (
    <>
      <h1>Counter</h1>
      <Counter></Counter>
      <Counter></Counter>
    </>
  )
}
