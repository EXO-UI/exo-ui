import * as React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  className?: string
}

export const ExampleComponent = ({ text, className }: Props) => {
  return <div className={className}>Hello world {text}</div>
}

export const ExampleComponentStyled = styled(ExampleComponent)`
  background-color: CornflowerBlue;
  margin: 2em;
  padding: 0.5em;
  border: 2px solid #000;
  font-size: 2em;
  text-align: center;
`
