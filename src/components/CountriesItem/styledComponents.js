import styled from 'styled-components'

export const CountriesName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #f1f5f9;
`

export const ListContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #334155;
  background-color: #1f1f2f;
`

export const VisitButton = styled.button`
  background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  border: none;
  color: ${props => (props.color ? '#334155' : '#ffffff')};
  width: 60px;
  height: 30px;
  margin-right: 20px;
`
export const VisitedText = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  margin-right: 20px;
`
