import style from './Tag.module.css'

function Tag(props){
    return (
        <div className={style.container}>
            <p className={style.text}>{props.children}</p>
        </div>
    )
}

export default Tag;