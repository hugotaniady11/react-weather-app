import React from "react";
import styled from "styled-components";
import temp from "../assets/icons/temp.svg";
import humidity from "../assets/icons/humidity.svg";
import wind from "../assets/icons/wind.svg";
import pressure from "../assets/icons/pressure.svg";

export const WeatherInfoIcons = {
    sunset: temp,
    sunrise: temp,
    humidity: humidity,
    wind: wind,
    pressure: pressure,
};

const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-align: center;
  width: 95%;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.5);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem;
  padding-left: 10%;
  padding-right: 10%;
  border-radius: 8px;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 15px;
  color: #fff;
  font-size: 12px;
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            
            <WeatherInfoContainer>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;
