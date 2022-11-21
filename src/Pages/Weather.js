import style from "./Info.module.css";
import weatherStyle from './Weather.module.css'
import NavBar from "./NavBar";

function Weather(props) {
  return (
    <>
      <NavBar></NavBar>
      <div className={style.container}>
        <div className={style.cityContainer}>
          <p>{props.city}</p>
        </div>
        <div className={style.cityInfo}>
          <div className={weatherStyle["card"] + " " + style["cityData"]}>
            <p className={style.heading}>Weather</p>
            <p className={style.data}>{props.weather}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
