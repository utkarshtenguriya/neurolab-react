
import './App.css';
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherComponent';
import styled from "styled-components";
import Axios from "axios";
import React, { useState} from 'react';
const API_KEY ="8b06ab428253a0944d361713ebf94804";
const Container  = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding : 20px 10px;
border-radius: 4px;
width: 500px;
background: white;
font-family: Montserrat;
`
const AppLabel  = styled.span`
color:black;
font-size: 18px;
font-weight: bold;
font-family: Montserrat;
`
export const WeatherIcons = {
  "01d": "/neurolab-react/icons/sunny.svg",
  "01n": "/neurolab-react/icons/night.svg",
  "02d": "/neurolab-react/icons/day.svg",
  "02n": "/neurolab-react/icons/cloudy-night.svg",
  "03d": "/neurolab-react/icons/cloudy.svg",
  "03n": "/neurolab-react/icons/cloudy.svg",
  "04d": "/neurolab-react/icons/perfect-day.svg",
  "04n": "/neurolab-react/icons/cloudy-night.svg",
  "09d": "/neurolab-react/icons/rain.svg",
  "09n": "/neurolab-react/icons/rain-night.svg",
  "10d": "/neurolab-react/icons/rain.svg",
  "10n": "/neurolab-react/icons/rain-night.svg",
  "11d": "/neurolab-react/icons/storm.svg",
  "11n": "/neurolab-react/icons/storm.svg",
};


function App() {
  const [city,updateCity] = useState();
  const [weather,updateWeather] = useState();
  const FetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  };
  
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {weather?<WeatherComponent weather ={weather}></WeatherComponent>:<CityComponent updateCity = {updateCity} FetchWeather = {FetchWeather}></CityComponent>}
     
    </Container>
  );
}

export default App;
