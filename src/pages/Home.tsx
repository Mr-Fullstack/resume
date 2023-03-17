import React from 'react'

import my_self from '../assets/my_self.png';

export default function Home() {
  return (

    <section>
        <div className="container">
            <div className='hero d:md-flex align:md-center justify:md-center'>
                <div className="row">
                    <div className="col-full col:md-5">
                        <img src={my_self} alt="" width={500} height={500} />
                    </div>
                    <article className="col-full col:md-6">
                        <header>
                        <h1>Marcos Antonio Cerqueira Souza de Freitas</h1>
                            <p>
                            System Anlyst Programmer
                            </p>
                        </header>
                        <p>
                            Graduated in systems analysis and development, starting in the development area in 2020, 
                            since then I have been working on commercial and personal projects with various technologies
                        </p>
                    </article>
                </div>
            </div>
        </div>      
    </section>
  )
}
