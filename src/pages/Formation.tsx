import  React from 'react';
import formationImage from '../assets/formation.webp';
import Section from '../components/Section';
import SeparatorTitle from '../components/SeparatorTitle';
import { formations } from '../data/formations';
import userAnimation from '../hooks/userAnimation';


export default function Formation()
{
   
   const { addElement, elements, animateNumber } = userAnimation();

   const generateLowerCaseClassName = (value: string )=>  value.toLowerCase().split( " " ).join( "-" ).trim();

   React.useEffect( ()=> {
    
    if( elements.length <= 0 )
    {

        let ids: string[]= [] ;

        formations.map( ( { name } )=> ids.push( generateLowerCaseClassName( name ) ) );

        addElement( [ ...ids ] );

    }

   },[ elements ])

    return (

        <Section className='formation' animateTogether={ ()=> animateNumber( true ) }>

            <div className="container">

                <div className="row">

                    <div className="col-full col:md-4">

                        <div className="header-section animation:md-slide-right:fade">

                            <h3 className="title-section">

                                For<br className="d:none d:md-block"/>ma<br className="d:none d:md-block"/>ção

                            </h3>

                            <SeparatorTitle colors={ [ 'b-text', 'b-secondary' ] } className="d:md-none"/>

                            <img src={ formationImage } alt="" className="image-section" />

                        </div>

                    </div>

                    <div className="col-12 col:md-5">
                            <div className="formation-box animation:md-opacity animation:delay-300ms">

                                <span>Formação Backend</span> 

                                <h3 className='fw-600'>Backend com foco em Node JS</h3>

                                <span>Cubos Academy</span> 

                            </div>

                            <div className="formation-box animation:md-opacity animation:delay-300ms">

                                <span>Tecnólogo</span> 

                                <h3 className='fw-600'>Analise e desenvolvimento de sistemas</h3>

                                <span>UNOPAR</span> 

                            </div>

                            <div className='formation-card-list animation:md-opacity animation:delay-300ms'>

                                <h2>Cursos</h2>

                                { formations.map( formation => (

                                    <div className='formation-card' key={formation.name}>

                                        <div className="d:flex align:baseline justify:between w-100">

                                            <span>

                                                { formation.name }

                                            </span>

                                            <span id={generateLowerCaseClassName(formation.name)} >
                                                
                                                {  formation.hour } h
                                            
                                            </span>

                                            {

                                                <div className={ "d:flex align:center justify:between " + formation.status } >

                                                    <div className='rect:s-15' ></div>

                                                    <div className='rect:s-15' ></div>

                                                </div>

                                            }

                                        </div>

                                    </div>
                                    
                                ))}

                            </div>

                    </div>

                </div>

            </div>

        </Section>
    )
}

