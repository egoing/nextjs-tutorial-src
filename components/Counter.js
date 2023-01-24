export function Counter(props) {
  return <p>
    0 <input type="button" value="+" />
    {props.down ? <input type="button" value="-" /> : null}
  </p>;
}
