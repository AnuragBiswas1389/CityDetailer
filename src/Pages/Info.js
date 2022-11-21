import style from "./Info.module.css";
import weatherStyle from './Weather.module.css'
import tempStyle from './Temperature.module.css'
import popuStyle from './Population.module.css'
import NavBar from "./NavBar";

function Info(props) {
  return (
    <>
      <NavBar></NavBar>
      <div className={style.container}>
        <div className={style.cityContainer}>
          <p>{props.city}</p>
        </div>
        <div className={style.cityInfo}>
          <div className={style["cityData"] + " " + weatherStyle["card"]}>
            <p className={style.heading}>Wheather</p>
            <p className={style.data}>{props.weather}</p>
          </div>
          <div className={style.cityData + " " + popuStyle["card"]}>
            <p className={style.heading}>Population</p>
            <p className={style.data}>{props.population}</p>
          </div>
          <div className={style.cityData + " " + tempStyle["card"]}>
            <p className={style.heading}>Temperature</p>
            <p className={style.data}>{props.temperature}°C</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
