import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import img from '../assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import SocailIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import { Blogs } from '../data/BlogData'
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/AnchorComponent'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'


const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`
const Center = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
`
const Grid = styled.div`
  display: grid;
  grid-gap: calc(1rem + 2vw);
   grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  @media (max-width: 800px) {
   grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  }
`
function WorkPage() {
  
  const [numbers, setNumbers] = useState(0)
  
  useEffect(() => {
    
    let num = (window.innerHeight - 70) / 30
    setNumbers(parseInt(num)) 
    
  }, [])
  
  return (
    <MainContainer
      initial={{
        x: -2000,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
      animate={{
        x: 0,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocailIcons themecolor='light'/> 
        <AnchorComponent numbers={ numbers } />
        <Center>
          <Grid>
            {
              Blogs.map(blog => (
                <BlogComponent key={blog.id} blog={blog} />
              ))}
            
          </Grid>
        </Center>  
        <BigTitle text='BLOG' top='5rem' left='5rem'/>
      </Container>
    </MainContainer>
  )
}

export default WorkPage