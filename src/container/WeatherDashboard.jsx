import React, { useState } from 'react'
import "../stylesheets/styles.css"
import bg from '../assets/cloudbg.svg'
import SearchInput from '../components/SearchInput'
import { WeatherProvider } from '../context/WeatherContext'
import WeatherDetails from '../components/WeatherDetails'
import notfound from "../assets/not-found.svg"

export default function WeatherDashboard() {
    const [searchError, setSearchError] = useState(false)
    return (
        <WeatherProvider>
            <div className='dash-container relative overflow-hidden px-12 py-32 flex flex-col items-center gap-4'>
                <img src={bg} className="absolute -bottom-30 -left-20 min-w-[110%] opacity-40" alt="" />

                <h1 className="text-4xl font-sans font-bold text-[#2A5D8A]">WeatherInfo</h1>
                <SearchInput setSearchError={setSearchError} />
                {searchError ? (<>
                    <h1 className="text-2xl text-gray-400">Please enter correct location!</h1>
                    <img src={notfound} alt="" width="30%" />
                </>
                ) :
                    <WeatherDetails />
                }
            </div>
        </WeatherProvider>
    )
}
