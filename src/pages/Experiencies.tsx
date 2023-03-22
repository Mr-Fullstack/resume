import React from 'react'
import { ExperiencesProps, experienciesData } from '../data/experiences';

import experienceImage from '../assets/experience.png';
import SeparatorTitle from '../components/SeparatorTitle';
import Section from '../components/Section';

interface TimeLineProps {
    data:ExperiencesProps;
    years:number[];
}

export default function  Experiencies()
{

    const experiencies = experienciesData;

    const TimeLine = React.memo(({years,data}:TimeLineProps)=>{
     
        const timeLineData: React.ReactNode[] = [];

        for(let key=0; key <= years.length-1 ; key++)
        {
            const experiences = data[years[key]];
           
            timeLineData.push(
                <ul className='timeline-box' key={years[key]}>
                    { experiences.map((experience,index) => (
                        <li key={index + new Date().getMilliseconds()}>
                            <article>
                                 <header>
                                     <h2>{ experience.job_role }</h2>
                                     <p>{ experience.company }</p>
                                 </header>
                                 <p> 
                                    { experience.descritption }<br/> 
                                 </p>
                                 {/* <span>{ experience.stack.join(' - ') }</span> */}
                                 <p>
                                    { 
                                        experience.stack.map(tecnology => (
                                            <span key={tecnology} className="tag">{tecnology}</span>
                                        ))
                                    }
                                </p>
                             </article>
                        </li>
                    ))}
                    <div className='timeline-box-year'>
                        <span>{years[key]}</span>
                    </div>
                </ul>
            )
            
        }
         
        return (
            <div className='col-10 col:md-6 timeline animation:md-opacity animation:delay-300ms'>
                {timeLineData}
            </div>
        );
    })

    return (
        
        <Section className="experience" >
            <div className="container">
                <div className="row">
                    <div className="col-full col:md-4">
                        <div className="header-section animation:md-slide-right:fade ">
                            <h3 className="title-section c-secondary">Experiência</h3>
                            <SeparatorTitle colors={['b-secondary','b-primary']} className="d:md-none"/>
                            <img src={ experienceImage } alt="" className="image-section" />
                        </div>
                    </div>
                    <TimeLine data= {experiencies} years={Object.keys(experiencies).map(value=>parseInt(value)).reverse()}  />
                </div>
            </div>     
        </Section>
    )
}
