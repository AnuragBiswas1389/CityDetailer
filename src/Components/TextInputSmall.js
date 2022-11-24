import TextInput from "./TextInput";
import style from './TextInput.module.css'
function TextInputSmall(porps){

    return(
        <div className={style.container}>
            <TextInput></TextInput>
        </div>
    )
}

export default TextInputSmall;