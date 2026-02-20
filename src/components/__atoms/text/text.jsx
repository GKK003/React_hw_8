export function Text(props) {
  return (
    <>
      <p
        className={props.class}
        onMouseEnter={props.onMouse}
        style={props.style}
      >
        {props.text}
      </p>
    </>
  );
}
