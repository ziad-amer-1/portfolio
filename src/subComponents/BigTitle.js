import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.tright};
  color: ${props => `rgba(${props.theme.textRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`

function BigTitle(props) {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      { props.text }
    </Text>
  )
}

export default BigTitle