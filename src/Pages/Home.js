import style from "./Home.module.css";
import TextInput from "../Components/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestions] = useState(false);

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
    var temp, weather, population;
    if (input !== "") {
      props.data.forEach(function (ele) {
        if (ele.name.toLowerCase() === input.toLowerCase()) {
          city = ele.name;
          temp = ele.temp;
          weather = ele.weather;
          population = ele.population;

          console.log( temp +weather +population)
          props.onCityChange(ele.name, weather, temp,population);

          navigate("/info");
        }
      });
      if (city === null) {
        alert("please enter valid city name");
      }
    } else if (input === "") {
      alert("please enter city name");
    }
  }
  function setSearchItem(data) {
    setInput(data);
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
