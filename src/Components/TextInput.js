import style from "./TextInput.module.css";

function TextInput(props) {
  return (
    <div className={style.container}>
      <input
        type="text"
        className={style.input}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        onKeyDown={props.onKeyDown}
        //onFocus={props.onFocus}
      ></input>
    </div>
  );
}

export default TextInput;
