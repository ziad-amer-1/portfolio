import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const NotFoundEl = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  font-family: monospace;
`
function NotFound() {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate("/portfolio")
    }, 1500)
  }, [])
  
  return (
    <NotFoundEl>
      Not Found :(
    </NotFoundEl>
  )
}

export default NotFound