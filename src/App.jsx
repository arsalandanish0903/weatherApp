import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import WeatherDisplay from './components/WeatherDisplay'
import ErrorData from './components/ErrorData'

function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)
  const apiKey = '0ed7d27563ab216b5609f7e5e0f848b7'
  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      const data = await response.json()
      console.log(data);
      if(data.cod === 200){
        setWeatherData(data)
        setError(null)
      }else{
        setError(data.message)
        setWeatherData(null)
      }
    } catch (error) {
      setError('Failed to fetch weather data');
      setWeatherData(null)
    }
  }
  

  return (
    <>
    <div className='h-screen bg-[#00246B] flex items-center justify-center'>
    <div className='bg-[#408EC6]  h-auto w-5/12 flex flex-col items-center rounded-md p-6'>
    <h2 className='my-6 text-2xl font-bold'>Weather App</h2>
    <Search onsearch={fetchWeather} />
      {error && <ErrorData message={error}/>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
    </div>
    </>
  )
}

export default App