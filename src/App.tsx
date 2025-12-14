import React from 'react';
import ContainerLines from './components/ContainerLines';
import Skills from './pages/Skills';
import pdf from './assets/Resume-MarcosAntonioCerqueira.pdf'

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
          <a className="btn-download" download={pdf} href={pdf}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#6DE881" viewBox="0 0 256 256"><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path></svg>
            Currículo PDF
          </a>
          <Home/>
          <Formation />
          <Projects />
          <Experiencies />
          <Skills/>
          <Contact />
       </LineContext>  
      </div>
    </ModalContext>
  )
}

export default App
