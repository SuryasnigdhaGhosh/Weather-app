import React, { useContext, useEffect, useState } from 'react'
import {
    TbSearch,
} from "react-icons/tb";
import "../stylesheets/styles.css"
import { WeatherContext } from '../context/WeatherContext';
import { useInterval } from '../utils';


export default function SearchInput({ setSearchError }) {

    const API_KEY = import.meta.env.VITE_APP_ID;

    const [searchedString, setSearchString] = useState()

    const {  setWeatherData } = useContext(WeatherContext)

    const storedLocation = localStorage.getItem('lsl');


    const submitHandler = (e) => {
        e.preventDefault();
        getWeather(searchedString);
    };

    useEffect(() => {
        if (storedLocation  && !searchedString) {
            getWeather(storedLocation)
            setSearchString(storedLocation)
        }
    }, []);


    useInterval(() => {
        getWeather(searchedString)
    }, 30000 );

    const getWeather = async (location) => {
        try {
            const url = "https://api.openweathermap.org/data/2.5/forecast?"
            const weatherResponse = await fetch(
                `${url}q=${location}&appid=${API_KEY}&units=metric&exclude=minutely,hourly&cnt=7`
            );
            const weatherData = await weatherResponse.json();
            if (weatherData.cod === "200") {
                setSearchError(false)
                setWeatherData(weatherData)
                localStorage.setItem('lsl', location)

            } else if (weatherData.cod === "404") {
                setWeatherData({})
                setSearchError(true)
            } else {
                console.log("Error fetching data")
            }

        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    return (
        <form className="search-bar w-[50%] h-12 flex gap-2 justify-center" noValidate
            onSubmit={submitHandler}
        >
            <input
                placeholder="Search for your city"
                onChange={(e) => setSearchString(e.target.value)}
                value={searchedString ?? ""}
                required
                className="input_search"
            />

            <button className="s-icon">
                <TbSearch
                    color='gray'
                    size={24}
                    style={{ cursor: "pointer" }}
                    onClick={submitHandler}
                />
            </button>
        </form>
    )
}
