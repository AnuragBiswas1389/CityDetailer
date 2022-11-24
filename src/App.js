import "./App.css";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Temperature from "./Pages/Temperature";
import Population from "./Pages/Population";
import Weather from "./Pages/Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const data = [
  {
    name: "Agartala",
    temp: "30",
    weather: "cloudy",
    population: "95lakh",
  },
  {
    name: "Udaipur",
    temp: "33",
    weather: "sunny",
    population: "90lakh",
  },
  {
    name: "Dharmanagar",
    temp: "26",
    weather: "Raining",
    population: "66lakh",
  },
  {
    name: "Shilchor",
    temp: "20",
    weather: "Fog",
    population: "60lakh",
  },
];

function App(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTem] = useState("");
  const [population, setPopulation] = useState("");

  function setCurrCity(city, weather, temp, population) {
    setCity(city);
    setWeather(weather);
    setTem(temp);
    setPopulation(population);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/Home"
            element={<Home data={data} onCityChange={setCurrCity}></Home>}
          ></Route>
          <Route
            path="/"
            element={
              <Info
                city={city}
                temperature={temp}
                weather={weather}
                population={population}
              />
            }
          ></Route>
          <Route
            path="/weather"
            element={<Weather city={city} weather={weather} />}
          ></Route>
          <Route
            path="/temperature"
            element={<Temperature city={city} temperature={temp} />}
          ></Route>
          <Route
            path="/population"
            element={<Population city={city} population={population} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
