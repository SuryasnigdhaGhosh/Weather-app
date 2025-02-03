import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import "../stylesheets/styles.css"
import moment from 'moment';
import ExtraDetails from './ExtraDetails';
import noData from "../assets/search.svg"
import { convertToFahrenheit, formatDate, formatDateTime } from '../utils';

export default function WeatherDetails() {
    const { weatherData, setWeatherData, setIsFahrenheitMode, isFahrenheitMode } = useContext(WeatherContext)


    const toggleFahrenheit = () => {
        setIsFahrenheitMode(!isFahrenheitMode);
    };

 

    return (
        JSON.stringify(weatherData) === "{}" ?
            <>
            <h1 className="text-2xl text-gray-400">Search a location!</h1>
            <img src={noData} alt="" width="30%" />
            </>
            :
            <div className="mt-8 w-[70%] z-10 flex flex-col gap-4">
                <div className="flex gap-4 justify-between">
                    <h1 className="text-2xl font-bold text-[#2A5D8A]">Today in {weatherData?.city?.name}</h1>
                    <div className="toggle-container">
                        <input
                            type="checkbox"
                            className="checkbox"
                            id="fahrenheit-checkbox"
                            onChange={toggleFahrenheit}
                        />
                        <label htmlFor="fahrenheit-checkbox" className="label">
                            <RiFahrenheitFill />
                            <RiCelsiusFill />
                            <div className="ball" />
                        </label>
                    </div>
                </div>

                <div className="today-weather-box flex items-center justify-between bg-[#6a83995b] rounded-2xl ">
                    <div className="flex items-center gap-2">
                        <img src={`${"https://openweathermap.org/img/wn/" + weatherData.list?.[0]?.weather?.[0]?.icon
                            }@4x.png`} alt="" />

                        <div>
                            <h1 className="text-6xl font-bold text-[#2A5D8A]">{Math.round(isFahrenheitMode ? convertToFahrenheit(weatherData.list?.[0]?.main?.temp) : weatherData.list?.[0]?.main?.temp)}{isFahrenheitMode ? "\u00b0F" : "\u00b0C"} </h1>
                            <p className="text-2xl font-bold text-white">{weatherData.list?.[0]?.weather?.[0]?.main}  </p>
                            <span className="text-l text-white">{formatDate(new Date())}</span>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="px-14">
                        <p className="text-2xl text-white">Feels Like : {Math.round(isFahrenheitMode ? convertToFahrenheit(weatherData.list?.[0]?.main?.feels_like) : weatherData.list?.[0]?.main?.feels_like)}{isFahrenheitMode ? "\u00b0F" : "\u00b0C"}</p>
                        <p className="text-2xl text-white">Min temp : {isFahrenheitMode ? convertToFahrenheit(weatherData.list?.[0]?.main?.temp_min) : weatherData.list?.[0]?.main?.temp_min}{isFahrenheitMode ? "\u00b0F" : "\u00b0C"}</p>
                        <p className="text-2xl text-white">Max temp : {isFahrenheitMode ? convertToFahrenheit(weatherData.list?.[0]?.main?.temp_max) : weatherData.list?.[0]?.main?.temp_max}{isFahrenheitMode ? "\u00b0F" : "\u00b0C"}</p>
                        <p className="text-2xl text-white">Humidity : {Math.round(weatherData.list?.[0]?.main?.humidity)}%</p>
                        <p className="text-2xl text-white">Wind Speed : {Math.round(weatherData.list?.[0]?.wind?.speed * 3.6)}km/h</p>
                    </div>
                </div>
                <ExtraDetails  />
            </div>
    )
}
