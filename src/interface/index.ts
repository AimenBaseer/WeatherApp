export interface ITodayWeatherForcast {
  location: string
  handleSetCoords: (lat: number, lon: number) => void
  handleSelectedLocation: (value: string)=>void
}

export interface IWeeklyWeatherForcastProps {
  location: string
  coords: ICoords
  selectedLocation: string;
}

export interface Weather {
  description: string
  icon: string
  id: number
  main: string
}

export interface IWeatherAPIData {
  coord: {
    lon: number
    lat: number
  }
  weather: Weather[]
  base: string
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  clouds: {
    all: number
  }
  cod: number

  dt: number
  id: number

  name: string
  sys: {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
  }
  timezone: number
  visibility: number
  wind: {
    speed: number
    deg: number
  }
}

export interface FeelsLike {
  day: number
  night: number
  eve: number
  morn: number
}

export interface ITemperature {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

export interface IDailyWeatherData {
  clouds: number
  dew_point: number
  dt: number
  feels_like: FeelsLike
  humidity: number
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  pressure: number
  sunrise: number
  sunset: number
  temp: ITemperature
  uvi: number
  weather: Weather[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export interface IWeatherData {
  name: string
  temperature: number
  highTemp: number
  lowTemp: number
  description: string
  humidity: number
  pressure: number
  windSpeed: number
  country: string
  sunrize: string
  sunset: string
  lat: number
  lon: number
}

export interface ICoords {
  lat: number
  lon: number
}

export interface IWeeklyForcastState {
  day: string
  temperature: number
  highTemp: number
  lowTemp: number
  description: string
}

export interface IWeatherCard {
  day: string
  temperature: number
  description: string
  lowTemp: number
  highTemp: number
}

export interface ISearchBarProps {
  handleSetSearchText: (e: React.FocusEvent<HTMLInputElement>) => void
}

