import React from 'react'

import ButtonAvailableJob from '../components/ButtonAvailableJob';
import Section from '../components/Section';
import SeparatorTitle from '../components/SeparatorTitle';

import my_self from '../assets/my_self.webp';
import tecs from '../assets/tecs.webp';

export default function Home() 
{

  return (

    <Section className='home'>

        <div className="container">

            <ButtonAvailableJob available/>

            <div className='hero d:md-flex align:md-center justify:md-center'>
               
                <div className="row">
                    <div className="col-6 col:lg-5 d:none d:md-block ">

                        <img src={ my_self } alt="" width={ 500 } height={ 500 } />

                    </div>

                    <article className="col-full col:lg-6">

                        <header>

                        <h1>Marcos Antonio Cerqueira Souza de Freitas</h1>

                            <p>Analista de Sistemas e Programador</p>

                            <SeparatorTitle colors={ [ 'b-secondary', 'b-tertiary' ] } />

                        </header>

                        <p>
                            Formado em análise e desenvolvimento de sistemas, iniciando na área de desenvolvimento em 2020, 
                            desde então venho trabalhando em projetos comerciais e pessoais com diversas tecnologias
                        </p>

                        <img src={ tecs } alt="" />

                    </article>

                </div>

            </div>

        </div>

    </Section>

  )
}
