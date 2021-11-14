import axios from 'axios'
import { IDailyWeatherData, IWeatherAPIData } from '../interface'
import { isNumber, getDay, getCelsiusFromKelvin } from '../utils/helper'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = process.env.REACT_APP_API_URL

export const getWeatherData = async (location: string) => {
  const zipCode = location.split(',')
  const queryParams = isNumber(zipCode[0]) ? `zip=${location}` : `q=${location}`
  const response = await axios.get(
    `${API_URL}/weather?${queryParams}&APPID=${API_KEY}`,
  )
  if (response.data.cod === 400) {
    throw new Error(response.data.message)
  }
  const data: IWeatherAPIData = response.data
  const { main, wind, name, sys, weather, coord } = data
  const weatherData = {
    name: name,
    temperature: getCelsiusFromKelvin(main.temp),
    highTemp: getCelsiusFromKelvin(main.temp_max),
    lowTemp: getCelsiusFromKelvin(main.temp_min),
    humidity: main.humidity,
    pressure: main.pressure,
    windSpeed: wind.speed,
    country: sys.country,
    sunrize: new Date(sys.sunrise * 1000).toLocaleTimeString(),
    sunset: new Date(sys.sunset * 1000).toLocaleTimeString(),
    description: weather[0].description,
    lat: coord.lat,
    lon: coord.lon,
  }
  return weatherData
}

export const getWeeklyForcast = async (lat: number, lon: number) => {
  const response = await axios.get(
    `${API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&&APPID=${API_KEY}`,
  )

  const weatherData: IDailyWeatherData[] = response.data.daily
  const weeklyData = weatherData.map((data) => {
    const {temp, weather,dt}=data;
    return {
      day: getDay(dt),
      temperature: getCelsiusFromKelvin(temp.day),
      highTemp: getCelsiusFromKelvin(temp.max),
      lowTemp: getCelsiusFromKelvin( temp.min),
      description: weather[0].description,
    }
  })
  weeklyData.shift();
  return weeklyData;
}
