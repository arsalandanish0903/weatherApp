import React from 'react'

const WeatherDisplay = ({data}) => {
  const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15
  }
  return (
    <>
      <div className='w-full max-w-md p-10 bg-[#00246B] shadow-lg rounded-lg my-5'>
            <h2 className='text-xl font-bold text-gray-800 mb-2'>City: {data.name}</h2>
            <p className='text-xl font-bold text-gray-800 mb-2'>Temp: {Math.floor(convertKelvinToCelsius(data.main.temp))} °C</p>
            <p className='text-xl font-bold text-gray-800 mb-2'>Humidity: {data.main.humidity}%</p>
            <p className='text-xl font-bold text-gray-800 mb-2'>Weather: {data.weather[0].description}</p>
        </div>
    
    </>
  )
}

export default WeatherDisplay
