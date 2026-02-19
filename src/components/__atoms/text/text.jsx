export function Text(props) {
  return (
    <>
      <p className={props.class} style={props.style}>
        {props.text}
      </p>
    </>
  );
}
