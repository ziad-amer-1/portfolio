import React from 'react'
import styled from 'styled-components'
import movieAppPic from '../assets/images/movie-app.png'
import calculatorPic from '../assets/images/calculator.png'
import quizAppPic from '../assets/images/quiz-app.png'
import astronautPic from '../assets/images/astronaut.png'
import todoAppPic from '../assets/images/todo-app.png'
import weatherAppPic from '../assets/images/weather-app.png'

const imgsArr = [
  movieAppPic,
  weatherAppPic,
  quizAppPic,
  astronautPic,
  todoAppPic,
  calculatorPic,
]

const Box = styled.div`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  box-shadow: 0 0 1rem 0 rgb(0 0 0 / 0.2);
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
    & > * > :last-child {
    color: ${props => props.theme.body};
    }
  }
`
const Image = styled.div`
  background-image: ${props => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center;
`
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.text};
  
`
function BlogComponent(props) {
  
  const {name, data, link, id} = props.blog
  
  return (
    <Box>
      <a href={link} target='_blank' style={{ textDecoration: 'none' }} rel="noreferrer">
        <Image img={imgsArr[id]} />
        <Title>{ name }</Title>
      </a>
    </Box>
  )
}

export default BlogComponent