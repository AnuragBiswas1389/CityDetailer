import style from "./Info.module.css";
import weatherStyle from './Weather.module.css'
import tempStyle from './Temperature.module.css'
import popuStyle from './Population.module.css'
import NavBar from "./NavBar";
<<<<<<< Updated upstream

function Info(props) {
=======
import { useState, useContext } from "react";
import TextInput from "../Components/TextInput";
import Modal from "./Modal";
import { appContext } from "./AppContext";

function Info(props) {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [icon, setIcon] = useState("");
  const [display, setDisplay] = useState(true);

  const { setData, data } = useContext(appContext);

  let view;

  if (display) {
    view = <Modal body="Loading data, please wait..."></Modal>;
  } else {
    view = (
      <>
        <div className={style["cityData"] + " " + weatherStyle["card"]}>
          <p className={style.heading}>Wheather</p>
          <div className={style.weather}>
            <p className={style.data}>{weather}</p>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              className={style.image}
              alt="weather"
            ></img>
          </div>
        </div>
        <div className={style.cityData + " " + tempStyle["card"]}>
          <p className={style.heading}>Temperature</p>
          <p className={style.data}>{temp}°F</p>
        </div>
      </>
    );
  }

  let exist=false;

  function inputChange(e) {
    setInput(e.target.value);
  }

  function handelSearch() {
    setDisplay(true);
    let loc = input.charAt(0).toUpperCase() + input.slice(1);
    setName(loc);
    console.log(loc);

    data.forEach((element) => {
      if (element.name === loc) {
        console.log(" fetching data using context api...");
        setTemp(element.temp);
        setName(element.name);
        setWeather(element.weather);
        setIcon(element.icon);
        setDisplay(false);
        exist=true;
        return;
      }
    });

    // if (localStorage.getItem(loc)) {
    //   console.log("loaded from memory!");
    //   let rdata = JSON.parse(localStorage.getItem(loc));
    //   console.log(rdata);
    //   setTemp(rdata.temp);
    //   setName(rdata.name);
    //   setWeather(rdata.weather);
    //   setIcon(rdata.icon);
    //   setDisplay(false);
    // }

    if (input === "") {
      alert("Enter a city name");
      return;
    }
    if(exist===false){
      console.log("fetching data from api...")
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=61e1f3fdc07ad32d4b6256c2b1600346`
      )
        .then((response) => {
          if (response.statusText === "Not Found") {
            alert("city not found!");
            setName("");
          }
          return response.json();
        })
        .then((rdata) => {
          setDisplay(false);
          console.log(
            rdata.main.temp + " " + rdata.name + " " + rdata.weather[0].main
          );

          setTemp(rdata.main.temp);
          setName(rdata.name);
          setWeather(rdata.weather[0].main);
          setIcon(rdata.weather[0].icon);
          // var data = {
          //   temp: `${rdata.main.temp}`,
          //   weather: `${rdata.weather[0].main}`,
          //   icon: `${rdata.weather[0].icon}`,
          //   name: `${rdata.name}`,
          // };
          setData(function (prev) {
            console.log("settig data...");
            return [
              {
                name: rdata.name,
                temp: rdata.main.temp,
                weather: rdata.weather[0].main,
                icon: rdata.weather[0].icon,
              },
              ...prev,
            ];
          });
          //localStorage.setItem(rdata.name, JSON.stringify(data));
          console.log(data);
        });
    }
    exist=false;
  }

>>>>>>> Stashed changes
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
