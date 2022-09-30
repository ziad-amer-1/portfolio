import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import profilePicutre from '../assets/images/profile-img.png'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 55vw;
  width: 65vw;
  display: flex;
  flex-direction: row;
  // to create 2 color border
  background: 
    linear-gradient(
      to right,
      ${props => props.theme.body} 50%,
      ${props => props.theme.text} 50%) bottom,
    linear-gradient(
      to right,
      ${props => props.theme.body} 50%,
      ${props => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
  z-index: 1;
  @media screen and (max-width: 600px){
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    & > :first-child {
      align-self: flex-start;
    }
    & > :last-child {
      align-self: flex-end;
    }
  }
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex; 
  &:first-child {
    padding-block: 1rem;
  }
`
const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
`

const Text = styled.div`
  color: ${({ theme }) => theme.body};
  font-size: calc(1rem + 1.5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  gap: 5px;
  & > :last-child {
    width: max-content;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 400;
  }
`

function Intro(props) {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi..</h1>
          <h3>I'm Ziad Amer</h3>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Img src={profilePicutre} alt='Profile Pic' />
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default Intro