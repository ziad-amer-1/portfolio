import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Logo = styled(motion.h1)`
  display: inline-block;
  color: ${(props) => props.themecolor === 'dark' ? props.theme.text : props.themecolor === 'light' ? props.theme.text : ''};
  font-family: 'Pacifico', cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`

function LogoComponent(props) {
  return (
    <Logo
      themecolor={props.themecolor}
      initial={{
        x: -200,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
      animate={{
        x: 0,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
    >
      Ziad amer
    </Logo>
  )
}

export default LogoComponent