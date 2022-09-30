import React from 'react'
import styled, { keyframes } from 'styled-components'
import {ThemeProvider} from 'styled-components'
import { darkTheme } from './Themes'
import  LogoComponent from '../subComponents/LogoComponent'
import  PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import spaceman from '../assets/images/spaceman.png'
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import img7 from '../assets/images/7.png'
import img8 from '../assets/images/8.png'
import img9 from '../assets/images/9.png'
import img10 from '../assets/images/10.png'
import img11 from '../assets/images/11.png'
import img12 from '../assets/images/12.png'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'

const overLayImgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
]

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const OverLay = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`
const float = keyframes`
  0%, 100% { transform: translateY(-30px) rotate(-10deg)}
  50% { transform: translateY(30px) translateX(15px) rotate(20deg)}
`

const Speceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 7s ease infinite;
  & img {
    width: 100%;
  }
`
const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 5;
  line-height: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(5px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubutntu Mono', monospace;
  @media screen and (max-width: 500px){
    height: auto;
  }
`
function AboutPage() {
  
  document.addEventListener('mousemove', moveWithTheMouse)
  function moveWithTheMouse(e) {
    document.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed')
      const x = (window.innerWidth - e.pageX * speed) / 100
      const y = (window.innerWidth - e.pageY * speed) / 100
      layer.style.transform =
        `translateX(${x}px) translateY(${y}px)`
    })
  }
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        initial={{
          y: 2000,
          x: -2000,
          transition: { type: 'spring', duration: 1, delay: 1 }
        }}
        animate={{
          y: 0,
          x: 0,
          transition: { type: 'spring', duration: 1, delay: 1 }
        }}
      >
        
        <LogoComponent  themecolor='dark'/>
        <SocialIcons themecolor='dark'/>
        <PowerButton />
        <OverLay>
          {overLayImgs.map((img, index) => (
            <Img
              src={img}
              alt='overlay'
              key={index}
              className='layer'
              data-speed={index % 2 === 0 ? '5' : '-5'}
            />
          ))}
        </OverLay>
        <Speceman>
          <img src={spaceman} alt='spaceman'/>
        </Speceman>
        
        <Main>
          Hi My Name is Ziad Amer I'm a front-end developer From Egypt.
          I love to create simple and beautiful websites with great user experience. 
          I'm interested in the whole frontend stack Like trying new things and building great projects.
          You can talk with me Using Social Links in the Bottom left :)
        </Main>
        <BigTitle text='ABOUT' top='10%' left='10%'/>
      </Box>
    </ThemeProvider>
  )
}
export default AboutPage
