import styled from 'styled-components'

interface IForcastContainer {
  flex: number
}

export const Header = styled.div`
  background-color: #468284;
  height: 5rem;
  width: 100%;
`

export const HeaderText = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  padding: 1rem;
`

export const Container = styled.div`
  margin: 1rem;
  justify-content: space-evenly;
  height: 76vh;
  display: flex;
  flex-direction: row;
`

export const OuterContainer = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
`

export const ForcastContainer = styled.div<IForcastContainer>`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? props.flex : 1)};
  border: 1px solid lightgrey;
`

export const TodayForcastContainer = styled.div`
  margin: 2rem;
  margin-top: 0rem;
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

export const Image = styled.img`
  margin: 1rem;
  height: 14rem;
  width: 13rem;
`

export const Text = styled.p`
  font-size: 1.5rem;
  margin: 0.3rem;
  text-align: center;
`

export const SmallText = styled.p`
  font-size: 1.2rem;
  margin: 0.3rem;
  text-align: center;
`
export const FieldsContainer = styled.div`
  display: flex;
  margin: 1rem 2rem 0rem 2rem;
`

export const Input = styled.input`
  flex: 2;
  height: 2rem;
  background-color: #f1f1f1;
`

export const Button = styled.button`
  margin-left: 30%;
  flex: 1;
  height: 1.5rem;
  color: blue;
`

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 1rem;
  width: 8rem;
  margin: 1rem;
  border-radius: 0.5rem;
  height: 12rem;
  text-align: center;
  background-color: lightgrey;
`

export const Temperature = styled.p`
  margin: 0.8rem;
  font-size: 4rem;
  color: dimGrey;
  line-height: 1;
  text-align: center;
  display: block;
`

export const Day = styled.p`
  margin: 0.8rem;
  font-weight: 900;
  font-size: 1.3rem;
`

export const WeatherDesc = styled.p`
  margin: 0.8rem;
  font-weight: 600;
  font-size: 1rem;
`

export const HighLowTemp = styled.p`
  font-size: 1.5rem;
  margin: 0.8rem;
  color: lighten(#313e48, 20%);
  text-align: center;
  display: block;
  font-weight: 100;
`

export const Search = styled.input`
  padding: 0.5rem;
  flex: 6;
  font-size: 1rem;
  height: 2rem;
  border: 1px solid grey;
  float: left;
  background: #f1f1f1;
`

export const SearchButton = styled.button`
  float: left;
  width: 20%;
  padding: 1rem;
  height: 3.1rem;
  background: #2196f3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
`

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const WeatherCardsContainer = styled.div`
  display: flex;
  overflow-y: scroll;
  margintop: 1rem;
`
export const SearchBarContainer = styled.div`
  width: 30rem;
  height: 4rem;
  display: flex;
  margin: 1rem;
  margin-left: 35%;
`

export const TodayForcastData = styled.div`
  margin-left: 1rem;
  align-items: left;
`
