import { createContext, useState } from "react";

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState({})
    const [isFahrenheitMode, setIsFahrenheitMode] = useState(false);


    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData,isFahrenheitMode,setIsFahrenheitMode }}>
            {children}
        </WeatherContext.Provider>
    )
}