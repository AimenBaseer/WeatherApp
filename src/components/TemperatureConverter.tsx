import React, { useState } from 'react'
import {
  ForcastContainer,
  Text,
  FieldsContainer,
  Input,
} from '../styled-components'
import { covertToFahrenheit, covertToCelsius, isNumber } from '../utils/helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons'

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  const handleGetFahrenheit = (
    e: React.FocusEvent<HTMLInputElement, Element>,
  ) => {
    const value = e.target.value
    if (!isNumber(value)) return
    const fahrenheit = covertToFahrenheit(parseInt(value))
    setFahrenheit(fahrenheit.toString())
  }

  const handleGetCelsius = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value
    if (!isNumber(value)) return
    const celsius = covertToCelsius(parseInt(value))
    setCelsius(celsius.toString())
  }

  const handleChangeCelsius = (
    e: React.FocusEvent<HTMLInputElement, Element>,
  ) => setCelsius(e.target.value)

  const handleChangeFahrenheit = (
    e: React.FocusEvent<HTMLInputElement, Element>,
  ) => setFahrenheit(e.target.value)

  return (
    <ForcastContainer flex={1}>
      <Text>Temperature Converter</Text>
      <FieldsContainer>
        <Input
          onBlur={handleGetFahrenheit}
          onChange={handleChangeCelsius}
          value={celsius}
          placeholder={'Celcius'}
        />

        <FontAwesomeIcon
          size="3x"
          style={{ flex: 1, margin: '0rem 1rem 0rem 1rem' }}
          icon={faArrowsAltH}
        />

        <Input
          onBlur={handleGetCelsius}
          onChange={handleChangeFahrenheit} 
          value={fahrenheit}
          placeholder={'Fahreheit'}
        />
      </FieldsContainer>
    </ForcastContainer>
  )
}

export default TemperatureConverter
