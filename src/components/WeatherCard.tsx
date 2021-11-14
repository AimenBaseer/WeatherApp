import React from 'react'
import {
    Card,
    Temperature,
    Day,
    HighLowTemp,
    WeatherDesc,
  } from '../styled-components'
import {IWeatherCard} from '../interface'

const WeatherCard=(props: IWeatherCard)=> {
    const {day, temperature, description, lowTemp, highTemp}= props;
    return (
        <Card>
            <Day>{day}</Day>
            <Temperature>{temperature}&#176;</Temperature>
            <WeatherDesc>{description}</WeatherDesc>
            <HighLowTemp>
              {lowTemp}&#176;/{highTemp}&#176;
            </HighLowTemp>
          </Card>
    )
}

export default WeatherCard
