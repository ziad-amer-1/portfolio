import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {ThemeProvider} from 'styled-components'
import { lightTheme } from './Themes'
import { Develope } from './AllSvgs'
import  LogoComponent from '../subComponents/LogoComponent'
import  PowerButton from '../subComponents/PowerButton'
import  SocialIcons from '../subComponents/SocialIcons'
import Lamp from '../subComponents/Lamp'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'


const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  height: auto;
  width: 75vw;
  z-index: 3;
  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  &:hover {
    border: 2px solid ${props => props.theme.body};
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    & > * > * {
      fill: currentColor;
    }
    & > *:nth-child(n + 1){
      color: ${props => props.theme.body};
    }
    
  }
  @media screen and (min-width: 700px){
    width: 65vw;
  }
`
const Title = styled.h2`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  font-size: calc(1rem + 2vw);
  flex-direction: row;
  margin-bottom: 15px;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 10px
  }
`
const Description = styled.div`
  width: 100%;
  max-width: 100%;
  color: ${props => props.theme.text};
  font-size: calc(0.6rem + 1vw);
  padding: 0.5rem;
  
  &:last-child > * {
    width: 500px;
    max-width: 100%;
  }
  
  &:last-child > *:not(:last-child) {
    margin-bottom: 5px;
  }
`
const LightsButtonToggler = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 100vw;
  outline: none;
  border: 2px solid  ${props => props.theme.text};
  cursor: pointer;
  background-color: transparent;
  font-size: 1rem;
  font-family: inherit;
  font-weight: bold;
  transition: 200ms ease;
  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`
function MySkills() {
  
  const [ifLargeScreen, setIfLargeScreen] = useState(true)
  const [lightsOn, setLightsOn] = useState(false)
  
  useEffect(() => {
    if (window.innerWidth <= 1300) {
      setIfLargeScreen(false)
    }
  }, [])
  
  
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        initial={{
          y: -2000,
          transition: { type: 'spring', duration: 1, delay: 1 }
        }}
        animate={{
          y: 0,
          transition: { type: 'spring', duration: 1, delay: 1 }
        }}
      >
        
        <LogoComponent  themecolor='light'/>
        <SocialIcons themecolor='light'/>
        <PowerButton />
        {ifLargeScreen && lightsOn && <Lamp theme='light'/>}
        
        {ifLargeScreen && <LightsButtonToggler onClick={() => setLightsOn(prev => !prev)}>{ lightsOn ? 'Lights On' : 'Lights Off' }</LightsButtonToggler>}
        
        <Main> 
          <Title>
            <Develope width={40} height={40} /> <span>Frontend Developer</span>
          </Title>
          <Description>
            I have a passion for what I do and I love new ideas and the challenges I go through in design and trying to overcome this problem and find a solution. This is really fun of learning programming and learning in general.
          </Description>
          <Description>
            <span style={{ display: 'inline-block', marginBottom: '10px' }}>Skills:</span> <br />
            &#91;HTML, CSS, Javascript, Bootstrap
            Sass, Pugjs, Reactjs, React-Router,
            Redux|Redux-Toolkit,
            Styled-Component, Beginner =&gt; Nextjs,
            npm, Git|Github &#93; ❤
          </Description>
        </Main>
        
        <BigTitle text='SKILLS' top='80%' left='30%'/>
        
      </Box>
    </ThemeProvider>
  )
}

export default MySkills