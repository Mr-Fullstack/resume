import React from 'react';
import ContainerLines from './components/ContainerLines';
import LineContext from './contexts/LineContext';
import ModalContext from './contexts/ModalContext';
import Contact from './pages/Contact';
import Experiencies from './pages/Experiencies';
import Formation from './pages/Formation';
import Home from './pages/Home';
import Projects from './pages/Projects';


function App() 
{
  return ( 
    <ModalContext>
      <div className="app-theme-light">
       <LineContext>
          <Home/>
          <Experiencies />
          <Projects />
          <Formation />
          <Contact />
       </LineContext>  
      </div>
    </ModalContext>
  )
}

export default App
