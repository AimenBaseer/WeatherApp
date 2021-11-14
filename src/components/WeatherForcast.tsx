import React, { useState } from 'react'
import TodayWeatherForcast from '../components/TodayWeatherForcast'
import WeeklyWeatherForcast from '../components/WeeklyWeatherForcast'
import { Container, OuterContainer } from '../styled-components'
import TemperatureConverter from './TemperatureConverter'
import { ICoords } from '../interface'
import WeatherMap from '../components/WeatherMap'

interface IWeatherForcast {
  location: string
}

const WeatherForcast = (props: IWeatherForcast) => {
  const { location } = props
  const [coords, setCoords] = useState<ICoords>({ lat: 0, lon: 0 })
  const [selectedLocationName, setSelectedLocationName] = useState("");


  const handleSetCoords = (lat: number, lon: number) => {
    setCoords({
      lat,
      lon,
    })
  }

  const handleSelectedLocation=(value: string)=>{
    setSelectedLocationName(value)
  }

  return (
    <Container>
      <OuterContainer>
        <TodayWeatherForcast
          location={location}
          handleSetCoords={handleSetCoords}
          handleSelectedLocation={handleSelectedLocation}
        />
        <WeeklyWeatherForcast location={location} coords={coords} selectedLocation={selectedLocationName} />
      </OuterContainer>

      <OuterContainer>
        <WeatherMap />
        <TemperatureConverter />
      </OuterContainer>
    </Container>
  )
}

export default WeatherForcast
