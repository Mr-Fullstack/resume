import React from 'react';
import ContainerLines from './components/ContainerLines';
import Skills from './pages/Skills';


const LineContext = React.lazy(()=> import('./contexts/LineContext'));
const ModalContext = React.lazy(()=> import('./contexts/ModalContext'));
const Contact = React.lazy(()=> import('./pages/Contact'));
const Experiencies = React.lazy(()=> import('./pages/Experiencies'));
const Formation = React.lazy(()=> import('./pages/Formation'));
const Home = React.lazy(()=> import('./pages/Home'));
const Projects = React.lazy(()=> import('./pages/Projects'));


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
          <Skills/>
          <Contact />
       </LineContext>  
      </div>
    </ModalContext>
  )
}

export default App
