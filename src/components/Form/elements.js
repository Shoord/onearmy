import styled, { css } from 'styled-components'
import theme from 'src/themes/styled.theme'

const inputStyles = css`
  border: 1px solid ${theme.colors.grey};
  font-size: 1.1em;
  background: white;
  width: 100%;
  margin-bottom: 16px;
  padding: 10px;
`

export const Input = styled.input`
  ${inputStyles};
  height: 45px;
  box-sizing: border-box;
`

export const TextAreaStyled = styled.textarea`
  ${inputStyles};
  height: 150px;
  font-family: inherit;
`

export const SelectStyled = styled.select`
  ${inputStyles}
`
