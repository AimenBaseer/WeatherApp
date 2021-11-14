import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Title from '../components/Title'
import WeatherForcast from '../components/WeatherForcast'
import { DashboardContainer } from '../styled-components'

const Dashboard = () => {
  const [searchText, setSearchText] = useState<string>('')

  const handleSetSearchText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value)


  return (
    <DashboardContainer>
      <Title />
      <SearchBar handleSetSearchText={handleSetSearchText} />
      <WeatherForcast location={searchText} />
    </DashboardContainer>
  )
}

export default Dashboard
