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
      <h2>Documentation</h2>
      {article}
    </>
  )
}