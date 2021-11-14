import React, { useEffect, useState } from 'react'
import { ITodayWeatherForcast, IWeatherData } from '../interface'
import {
  ForcastContainer,
  TodayForcastContainer,
  TodayForcastData,
  Text,
  SmallText,
  Button,
  Image,
} from '../styled-components'
import logo from '../assets/weatherIcon.png'
import { getWeatherData } from '../services/WeatherAPIs'

const TodayWeatherForcast = (props: ITodayWeatherForcast) => {
  const { location, handleSetCoords, handleSelectedLocation } = props
  const [showMore, setShowMore] = useState<boolean>()
  const [state, setstate] = useState<IWeatherData>({
    name: '',
    temperature: 0,
    highTemp: 0,
    lowTemp: 0,
    humidity: 0,
    pressure: 0,
    windSpeed: 0,
    description: '',
    country: '',
    sunrize: '',
    sunset: '',
    lat: 0,
    lon: 0,
  })

  const fetchWeatherData = async (location: string) => {
    const weatherData = await getWeatherData(location)
    const { lat, lon, name, country } = weatherData
    handleSetCoords(lat, lon)
    handleSelectedLocation(`${name},${country}`)
    setstate(weatherData)
  }

  useEffect(() => {
    if (!location) return
    fetchWeatherData(location)
  }, [location])

  const handleShowMore = () => setShowMore(true)

  const handleShowLess = () => setShowMore(false)

  const {
    name,
    temperature,
    highTemp,
    lowTemp,
    humidity,
    pressure,
    windSpeed,
    description,
    country,
    sunrize,
    sunset,
  } = state
  return (
    <>
      <ForcastContainer flex={2}>
        {location ? (
          <>
            <Text>
              Today's forcast for {name},{country}
            </Text>

            <TodayForcastContainer>
              <TodayForcastData>
                <SmallText>Temp: {temperature}&#176;</SmallText>
                <SmallText>Description: {description}</SmallText>
                <SmallText>Highest Temp: {highTemp}&#176;</SmallText>
                <SmallText>Lowest Temp: {lowTemp}&#176;</SmallText>
                {showMore && (
                  <>
                    <SmallText>Humidity: {humidity}</SmallText>
                    <SmallText>Pressure: {pressure}</SmallText>
                    <SmallText>Wind Speed: {windSpeed}</SmallText>
                    <SmallText>sunrize: {sunrize}</SmallText>
                    <SmallText>sunset: {sunset}</SmallText>
                  </>
                )}

                {showMore ? (
                  <Button onClick={handleShowLess}>Show Less</Button>
                ) : (
                  <Button onClick={handleShowMore}>Show More</Button>
                )}
              </TodayForcastData>

              <Image src={logo} />
            </TodayForcastContainer>
          </>
        ) : (
          <Text>Search for location and get weather details</Text>
        )}
      </ForcastContainer>
    </>
  )
}

export default TodayWeatherForcast
