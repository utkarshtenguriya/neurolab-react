import styled from "styled-components";
const WeatherLogo = styled.img`
width:140px;
height:140px;
margin: 40px auto;`
const ChooseCityLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin: 10px auto;
`
const SearchBox = styled.form`
display:flex;
flex-direction:row;
border: 1.8px solid black;
border-radius:2px;
color:black;
font-size:18px;

margin: 10px auto;
& input {
  padding:10px;
  font-size:14px;
  border:none;
  outline:none;
  font-weight:bold;
}
& button {
  padding:10px;
  font-size:14px;
  border:none;
  outline:none;
  font-weight:bold;
  background-color:black;
  color: white;
  cursor: pointer;
}
`;
 const CityComponent = (props) => {
  const {updateCity,FetchWeather} = props;
  return (
    <>
    <WeatherLogo src = "/icons/perfect-day.svg"/>
    <ChooseCityLabel>Find weather of your City</ChooseCityLabel>
    <SearchBox onSubmit = {FetchWeather}>
      <input placeholder="City" onChange={(e)=>updateCity(e.target.value)}/>
      <button type ="submit">Search</button>
    </SearchBox>
    </>
  )

  
}
export default CityComponent;