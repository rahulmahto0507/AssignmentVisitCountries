import {
  VisitedCountriesList,
  CountryImage,
  NameContainer,
  CountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountries = props => {
  const {VisitedCountryListDetails, onClickRemoveButton} = props
  const {name, imageUrl, id} = VisitedCountryListDetails

  const onClickRemove = () => {
    onClickRemoveButton(id)
  }

  return (
    <VisitedCountriesList>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <NameContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </NameContainer>
    </VisitedCountriesList>
  )
}
export default VisitedCountries
