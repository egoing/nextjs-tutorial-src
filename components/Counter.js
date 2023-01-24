export function Counter({down}) {
  return <p>
    0 <input type="button" value="+" />
    {down ? <input type="button" value="-" /> : null}
  </p>;
}
