import React, { useEffect, useState } from 'react'
import { getWeeklyForcast } from '../services/WeatherAPIs'
import { IWeeklyWeatherForcastProps } from '../interface'
import {
  ForcastContainer,
  WeatherCardsContainer,
  Text,
} from '../styled-components'
import { IWeeklyForcastState } from '../interface'
import WeatherCard from './WeatherCard'

const WeeklyWeatherForcast = (props: IWeeklyWeatherForcastProps) => {
  const { location, coords, selectedLocation } = props
  const [forcasts, setForcasts] = useState<IWeeklyForcastState[]>([])

  const fetchWeeklyForcasts = async (lat: number, lon: number) => {
    const response = await getWeeklyForcast(lat, lon)
    if (!lat || !lon) return
    setForcasts(response)
  }

  useEffect(() => {
    const { lat, lon } = coords
    fetchWeeklyForcasts(lat, lon)
  }, [coords])

  return (
    <ForcastContainer flex={3}>
      {coords.lat ? (
        <>
          <Text>Weekly Forcasts for {selectedLocation}</Text>
          <WeatherCardsContainer>
            {forcasts.map(
              ({ day, temperature, description, lowTemp, highTemp }) => {
                return (
                  <WeatherCard
                    day={day}
                    temperature={temperature}
                    description={description}
                    highTemp={highTemp}
                    lowTemp={lowTemp}
                  />
                )
              },
            )}
          </WeatherCardsContainer>
        </>
      ) : (
        <Text>Search for location and get weather details</Text>
      )}
    </ForcastContainer>
  )
}

export default WeeklyWeatherForcast
