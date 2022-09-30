import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: 
    radial-gradient(
      circle at var(--x) var(--y),
      transparent 10%, rgb(0 0 0 / 0.98) 25%  
    );
  z-index: 4;
  
`
function Lamp() {
  
  const rootElement = document.documentElement
  rootElement.addEventListener('mousemove', (e) => {
    rootElement.style.setProperty('--x', e.clientX + 'px')
    rootElement.style.setProperty('--y', e.clientY + 'px')
  })
  
  return (
      <Box> 
      </Box>
  )
}

export default Lamp