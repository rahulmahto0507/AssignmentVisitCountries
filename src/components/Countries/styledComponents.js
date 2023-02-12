import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 80px;

  background-color: #161624;
`
export const CountriesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #f8fafc;
`
export const CountriesContainer = styled.ul`
  overflow-y: scroll;
  height: 50vh;
`
export const NoCountryView = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #f1f5f9;
`
export const CountriesVisited = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #f8fafc;
`
export const NoCountryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
export const VisitedCountryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
