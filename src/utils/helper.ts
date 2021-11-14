export const isNumber = (value: any) => /^\d+$/.test(value)

export const covertToFahrenheit = (celsius: number) => {
  return (celsius * 9) / 5 + 32
}

export const covertToCelsius = (fahrenheit: number) => {
  return (fahrenheit - 32) / 1.8
}

export const day: { [type: number]: string } = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

export const getDay = (unix: number) => {
  const dayNumber: number = new Date(unix * 1000).getDay()
  return day[dayNumber]
}

export const getCelsiusFromKelvin=(kelvinTemp:number)=>parseInt(parseFloat((kelvinTemp-273.5).toString()).toFixed(1));
