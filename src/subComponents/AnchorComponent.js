import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Anchor, Link } from '../components/AllSvgs'

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
`
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  
  .chain {
    transform: rotate(-45deg);
  }
`

function AnchorComponent(props) { 
  
  const ref = useRef(null)

  
  
  useEffect(() => {
    
    function handleScroll() {
      let scrollPosition = window.scrollY
      let windowSize = window.innerHeight
      let bodyHeight = document.body.offsetHeight
      
      let diff = Math.ceil(bodyHeight - (scrollPosition + windowSize))
      let diffP = (diff * 100) / (bodyHeight - windowSize)
      
      ref.current.style.transform = `translateY(${-diffP}%)`
      

      
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <Container>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return <Link key={id} width={25} height={25} fill='currentColor' className='chain' />
        })}
        <Anchor width={70} height={70} fill='currentColor'/>
      </Slider>
    </Container>
  )
}

export default AnchorComponent