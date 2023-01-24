import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Docs() {
  const router = useRouter();
  if (router.query.id === undefined) {
    return <>Loading...</>
  }
  const id = Number(router.query.id);
  let article = '';
  if (id === 1) {
    article = 'Doc 1';
  } else if (id === 2) {
    article = 'Doc 2';
  }
  return (
    <>
      <h1><Link href="/">Counter</Link></h1>
      <ul>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/docs/1">Getting Started</Link></li>
        <li><Link href="/docs/2">Basic Features</Link></li>
      </ul>
      <h2>Documentation</h2>
      {article}
    </>
  )
}