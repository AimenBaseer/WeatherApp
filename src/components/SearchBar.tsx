import React, { useState } from 'react'
import { Search, SearchButton, SearchBarContainer } from '../styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ISearchBarProps } from '../interface'

const SearchBar = (props: ISearchBarProps) => {
  const { handleSetSearchText } = props
  const [searchText, setSearchText] = useState('')

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value)

  return (
    <SearchBarContainer>
      <Search
        placeholder={'<Zip Code,Country Abbrev> OR <Location>'}
        value={searchText}
        onChange={handleChangeSearch}
        onBlur={handleSetSearchText}
      ></Search>
      <SearchButton>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </SearchButton>
    </SearchBarContainer>
  )
}

export default SearchBar
