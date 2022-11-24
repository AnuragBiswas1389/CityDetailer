import style from "./Home.module.css";
import TextInput from "../Components/TextInput";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestions] = useState(false);
  const [data, setData] = useState("");

  const navigate = useNavigate();

  function inputChange(e) {
    setInput(e.target.value);
    setSuggestions(true);
    props.data.forEach(function (ele) {
      if (ele.name.toLowerCase().startsWith(input)) {
        console.log(ele.name + " " + input);
      } else {
        console.log("error");
      }
    });
  }

  function handelSearch(e) {
    var city = null;
    var temp, weather, population, name;

    if (input !== "") {
      fetchData(input);
      console.log(temp + weather + population);
      props.onCityChange(name, weather, temp, population);

      navigate("/info");
      if (city === null) {
        alert("please enter valid city name");
      }
    } else if (input === "") {
      alert("please enter city name");
    }
  }

  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=agartala&appid=61e1f3fdc07ad32d4b6256c2b1600346";

  function fetchData(city) {
    var cityName;
    if (city !== "") {
      alert("Please enter a city name");
      return;
    }
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=61e1f3fdc07ad32d4b6256c2b1600346`;
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData.weather[0].main);
      });
  }

  return (
    <>
      <div className={style.infoContainer}>
        <p className={style.heading}>
          Enter City Name<br></br> to get all information
        </p>
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
        <div className={style.dropDown}>
          {suggestion &&
            props.data.map(function (ele) {
              if (ele.name.toLowerCase().startsWith(input.toLowerCase())) {
                return (
                  <div className={style.dropElement} key={ele.name}>
                    {ele.name}
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
