import React from 'react'

import { useModal } from '../contexts/ModalContext';
import { Project, projects } from '../data/projects';
import { makeBold } from '../helpers';

import projectImage from '../assets/project.png';
import SeparatorTitle from '../components/SeparatorTitle';
import Section from '../components/Section';
interface ProjectProps{
    project:Project;
}

export default function Projects() 
{

 const {openModal, closeModal} = useModal(); 
   
 const GenerateProjectModal = ({project}:ProjectProps) =>{
    return( 
        <div className="modal-content">
          {
            <div className="modal-body">
                <h2 className="modal-title">{project.name}</h2>
                <a href={project.url} target={'_blank'}>Ver online</a>  
                 <div className="row">
                    <div className="col-full col:md-8">
                    { project.description.map((desc) => {
                        const pHTML = document.createElement("p");
                        pHTML.innerHTML = makeBold(desc, project.stack); 
                        return <p key={project.name + Math.random()} dangerouslySetInnerHTML={{ __html:makeBold(desc, project.stack)}}></p>;
                    })}
                    </div>
                    <div className="col-full col:md-4">
                        <p className='technology'> 
                             <strong>Tecnologias:</strong> <br/> {project.stack.map(tecnology=>(
                            <span key={tecnology} className="tag">{tecnology}</span>
                         ))} 
                        </p>
                    </div>
                 </div>
            </div>
          }  
        </div>
    )
 }
 
 const toggleModal = (e:React.MouseEvent<HTMLAnchorElement>,project:Project)=>{
    e.preventDefault();
    openModal(<GenerateProjectModal project={project}/>)
 }

 const ProjectCard = ({project}:ProjectProps)=>{

   return(
        <div className="col-full col:md-6">
            <div className="project-card">
                <h3>{project.name}</h3>
                <a href={project.url}target="_blank" rel="noopener noreferrer">Ver online</a> 
                <p> {project.description[0]}</p>
                <a href="#" onClick={e=>toggleModal(e,project)}>Ler mais</a>
                <p className='technology'>
                    {project.stack.map(tecnology=>(
                        <span key={tecnology} className="tag">{tecnology}</span>
                    ))} 
                </p>
            </div>
        </div>
    )
 }



  return (
    <Section className="project">
        <div className="container">
            <div className="row">
                <div className="col-full col:md-4 d:md-none">
                    <div className="header-section">
                        <h3 className="title-section c-primary">Projetos</h3>
                        <SeparatorTitle colors={['b-primary','b-tertiary']} className="d:md-none"/>
                    </div>
                </div>
                <div className="col-full col:md-8">
                    <div className="row project-list animation:md-opacity animation:delay-300ms" >
                        {projects.map((project)=>(
                            <ProjectCard project={project} key={Math.random()} />
                        ))}
                    </div>
                </div>  
                <div className="col-full col:md-4 d:none d:md-block">
                    <div className="header-section d:flex justify:end animation:md-slide-left:fade ">
                        <h3 className="title-section c-primary">
                        Pro<br className="d:none d:md-block"/>jetos
                        </h3>
                        <img src={projectImage} alt="" className="image-section" />
                    </div>
                </div>
            </div>
        </div>     
    </Section>
  )
}
