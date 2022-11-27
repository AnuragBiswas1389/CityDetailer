import "./App.css";
import Info from "./Pages/Info";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { appContext } from "./Pages/AppContext";

const appData = [
  {
    name: "Agartala",
    temp: "30",
    weather: "cloudy",
    icon: "",
  },
];

function App(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTem] = useState("");
  const [icon, setIcon] = useState("");
  const [data, setData] = useState(appData);


  return (
    <>
<<<<<<< Updated upstream
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home data={data} onCityChange={setCurrCity}></Home>}
          ></Route>
          <Route
            path="/info"
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
=======
      <appContext.Provider value={{setData,data}}>
        <Info city={city} temperature={temp} weather={weather} icon={icon} data={data}/>
      </appContext.Provider>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
