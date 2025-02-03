import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { convertToFahrenheit, formatDateTime } from '../utils'

export default function ExtraDetails() {

    const { weatherData, isFahrenheitMode } = useContext(WeatherContext)

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-[#2A5D8A]">More On {weatherData?.city?.name}, {weatherData?.city?.country}</h1>
            <div className="flex bg-[#6a839942] rounded-2xl">
                {weatherData.list?.slice(1).map((item, index) => (
                    <div key={index} className={`p-4 w-full flex flex-col text-center items-center  ${index !== 0 ? "border-l border-gray-400" : ""}`}>
                        <img src={`${"https://openweathermap.org/img/wn/" + item.weather?.[0]?.icon
                            }@2x.png`} alt="" width="60%" />
                        <h1 className="text-2xl text-white">{Math.round(isFahrenheitMode ? convertToFahrenheit(item.main?.temp) : item.main?.temp)}{isFahrenheitMode ? "\u00b0F" : "\u00b0C"} </h1>
                        <p className="text-xl text-white">{item?.weather?.[0]?.main}  </p>

                        <p className="text-l text-white">{formatDateTime(item?.dt_txt)}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
