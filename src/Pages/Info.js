import style from "./Info.module.css";
import weatherStyle from "./Weather.module.css";
import tempStyle from "./Temperature.module.css";
import popuStyle from "./Population.module.css";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import TextInput from "../Components/TextInput";
import Modal from "./Modal";

function Info(props) {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [icon, setIcon] = useState("");
  const [display, setDisplay] = useState(true);

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

  function inputChange(e) {
    setInput(e.target.value);
  }

  function handelSearch() {
    setDisplay(true);
    console.log("loaded from memory!");
    let loc = input.charAt(0).toUpperCase() + input.slice(1);;
    console.log(loc)
    if (localStorage.getItem(loc)) {
      let rdata = JSON.parse(localStorage.getItem(loc));
      console.log(rdata);
      setTemp(rdata.temp);
      setName(rdata.name);
      setWeather(rdata.weather);
      setIcon(rdata.icon);
      setDisplay(false);
    }

    if (input === "") {
      alert("Enter a city name");
      return;
    }
    if (localStorage.getItem(input) === null) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=61e1f3fdc07ad32d4b6256c2b1600346`
      )
        .then((response) => response.json())
        .then((rdata) => {
          setDisplay(false);
          console.log(
            rdata.main.temp + " " + rdata.name + " " + rdata.weather[0].main
          );
          setTemp(rdata.main.temp);
          setName(rdata.name);
          setWeather(rdata.weather[0].main);
          setIcon(rdata.weather[0].icon);
          var data = {
            temp: `${rdata.main.temp}`,
            weather: `${rdata.weather[0].main}`,
            icon: `${rdata.weather[0].icon}`,
            name:`${rdata.name}`
          };

          localStorage.setItem(rdata.name, JSON.stringify(data));
        });
    }
  }

  return (
    <>
      {/* <Modal body="Loading data, please wait..."></Modal> */}

      <div className={style.inputContainer}>
        <TextInput
          onChange={inputChange}
          palceholder={input}
          value={input}
        ></TextInput>
        <button className={style.button} onClick={handelSearch}>
          Get details
        </button>
      </div>
      <div className={style.container}>
        <div className={style.cityContainer}>
          <p>{name}</p>
        </div>
        <div className={style.cityInfo}>
          {name === "" ? (
            <div className={style.message}>Enter to get details</div>
          ) : (
            view
          )}
        </div>
      </div>
    </>
  );
}

export default Info;
