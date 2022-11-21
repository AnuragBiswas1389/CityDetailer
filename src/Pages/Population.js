import style from './Info.module.css'
import populationStyle from "./Population.module.css";
import NavBar from './NavBar';

function Population (props){
      return (
        <>
        <NavBar></NavBar>
          <div className={style.container}>
            <div className={style.cityContainer}>
              <p>{props.city}</p>
            </div>
            <div className={style.cityInfo}>
              <div
                className={populationStyle["card"] + " " + style["cityData"]}
              >
                <p className={style.heading}>The polulation is</p>
                <p className={style.data}>{props.population}</p>
              </div>
            </div>
          </div>
        </>
      );
    

}

export default Population;