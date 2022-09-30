import { Route, Routes, useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/Themes';
import GlobalStyle from './GlobalStyles'
import React from 'react';
// Components
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import WorkPage from './components/WorkPage'
import MySkillsPage from './components/MySkillsPage'
import { AnimatePresence } from 'framer-motion';
import NotFound from './components/NotFound';

// Components


function App() {
  
  const loaction = useLocation()
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={loaction} key={loaction.pathname}>
            <Route path="/portfolio" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App;
