import Link from 'next/link';
export default function About(){
  return (
  <>
    <h1><Link href="/">Counter</Link></h1>
    <ul>
      <li><Link href="/about">about</Link></li>
      <li><Link href="/docs/1">Getting Started</Link></li>
      <li><Link href="/docs/2">Basic Features</Link></li>
    </ul>
    <h2>About</h2>
    This app is ...
  </>
)
}