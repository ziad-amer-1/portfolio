// home button icon

import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


const Power = styled(motion.div)`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FCF6F4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
  
  &:hover {
    background-color: rgb(0 255 0 / 0.4);
    box-shadow: 0 0 8px 6px rgb(0 255 0 / 0.2);
  }
  
  & > *:first-child {
    color: inherit
  }
`
function PowerButton() {
  return (
    <Power
      initial={{
        opacity: 0,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
      animate={{
        opacity: 1,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
    >
      <NavLink to='/portfolio'>
        <PowerBtn width={30} height={30} fill='currentColor' />
      </NavLink>
    </Power>
  )
}

export default PowerButton