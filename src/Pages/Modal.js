import style from "./Modal.module.css";

function Modal(props) {
  
  function closeModal(){
    props.OnCloseModal();
  }
  
    return (
    <div className={style.modal}>
      <div className={style.container}>
        <div className={style.cancel}>
        </div>
        <div className={style.content}>
          <div className={style.heading}>
            <p>{props.title}</p>
          </div>
          <div className={style.body}>
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
