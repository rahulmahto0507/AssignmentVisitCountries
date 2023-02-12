import {
  ListContainer,
  CountriesName,
  VisitButton,
  VisitedText,
} from './styledComponents'

const CountriesItem = props => {
  const {countriesItemDetails, onClickVisitButton} = props
  const {name, id, isVisited} = countriesItemDetails
  const text = isVisited ? 'Visited' : 'Visit'

  const onClickButton = () => {
    onClickVisitButton(id)
  }

  return (
    <ListContainer>
      <CountriesName>{name}</CountriesName>
      {isVisited ? (
        <VisitedText>{text}</VisitedText>
      ) : (
        <VisitButton type="button" onClick={onClickButton}>
          {text}
        </VisitButton>
      )}
    </ListContainer>
  )
}
export default CountriesItem
