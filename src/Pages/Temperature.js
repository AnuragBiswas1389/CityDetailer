import style from "./Info.module.css";
import populationStyle from "./Population.module.css";
import NavBar from "./NavBar";

function Temperature(props) {
  return (
    <>
      <NavBar></NavBar>
      <div className={style.container}>
        <div className={style.cityContainer}>
          <p>{props.city}</p>
        </div>
        <div className={style.cityInfo}>
          <div className={populationStyle["card"] + " " + style["cityData"]}>
            <p className={style.heading}>Temperature</p>
            <p className={style.data}>{props.temperature}°C</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Temperature;
