import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  
  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`
const Container = styled.div`
  padding: 2rem;
`
const Contact = styled.div`
  color: ${({ theme }) => theme.text};
  position: fixed;
  right: calc(1rem + 2vw);
  top: 2rem;
  z-index: 1;
  & > * {
    color: inherit;
    text-decoration: none;
  }
`
const Work = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  position: absolute;
  right: calc(1rem + 2vw);
  top: 50%;
  transform: rotate(90deg)  translate(-50%, -50%);
  z-index: 1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
const About = styled(NavLink)`
  color: ${({ theme, click }) => click ? theme.body : theme.text};
  text-decoration: none;
  position: absolute;
  z-index: 5;
  position: relative;
`
const Skills = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  z-index: 1;
`
const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`
const Center = styled(motion.div)`
  position: absolute;
  top: ${({ click }) => click ? '85%' : '50%'};
  left: ${({ click }) => click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  & > :first-child {
    animation: ${rotate} 1.5s infinite linear;
  }
  
  & > :last-child {
    display: ${({ click }) => click ? 'none' : 'inline-block'};
    padding: 1rem;
  }
`
const DarkSide = styled.div`
  position: absolute;
  background-color: #000;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${({ click }) => click ? '50%' : '0%'};
  height: ${({ click }) => click ? '100%' : '0%'};
  z-index: 0;
  transition: height 0.5s ease, width 1s ease 0.5s;
`
function Main() {
  
  const [click, setClick] = useState(false)
  
  
  return (
    <MainContainer theme={ click ? 'dark' : 'light' }>
      <DarkSide click={click ?  'true': ''} />
      <Container>
        <PowerButton />
        <LogoComponent themecolor={ click ? 'dark' : 'light' }  />
        <SocialIcons themecolor={ click ? 'dark' : 'light' } />  
        
        <Center
          click={click ? 'true' : ''}
          initial={{
            opacity: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
          animate={{
            opacity: 1,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
        >
          <YinYang
            onClick={() => setClick(!click)}
            width={click ? 100 : 175}
            height={click ? 100 : 175}
            fill='currentColor'
          />
          <span>Click Here</span>
        </Center>
        
        <Contact>
          <a
            href='mailto:ziadamer102030@gmail.com'
            target='_blank'
            rel="noreferrer"
          >
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
            >
              Say Hi...
            </motion.h2>
          </a>
        </Contact>       
        <Work to='/blog'>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
          >
            Work
          </motion.h2>
        </Work>            
        <BottomBar>
          
          <About to='/about' click={click ? 'true' : ''}> 
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
            >
              About
            </motion.h2>
          </About>
        
          <Skills to='/skills'>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
            >
              my Skills
            </motion.h2>
          </Skills>
          
        </BottomBar>
        
      </Container>
      { click && <Intro click={click ? 'true' : ''} /> }
    </MainContainer>
  )
}

export default Main