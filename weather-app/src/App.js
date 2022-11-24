import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
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
margin-top:50px;
background: white;
font-family: Montserrat;

`
const AppLabel  = styled.span`
color:black;
font-size: 18px;
font-weight: bold;
font-family: Montserrat;
`
const CityComponent  = styled.div`
display: flex;
flex-direction: column;


`
const WeatherComponent  = styled.div`
display: flex;
flex-direction: column;


`

function App() {
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      <CityComponent>City</CityComponent>
      <WeatherComponent>Weather</WeatherComponent>
    </Container>
  );
}

export default App;
