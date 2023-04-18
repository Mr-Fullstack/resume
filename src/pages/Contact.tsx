import React from 'react';
import contact from '../assets/contact.webp';
import Section from '../components/Section';
import SeparatorTitle from '../components/SeparatorTitle';


export default function Contact()
{

  return (
    <Section className="contact">

        <div className="container">

            <div className="row">

                <div className="col-full col:md-4 d:md-none">

                    <div className="header-section">

                        <h3 className="title-section c-tertiary">Contato</h3>

                        <SeparatorTitle colors={ [ "b-tertiary", "b-secondary"] } />

                    </div>

                </div>

                <div className="col-full col:md-8">

                    <div className="row contact-main animation:md-opacity animation:delay-300ms">

                        <div className="col-full col:md-12">

                            <a target={'_blank'} href='https://api.whatsapp.com/send?phone=5571988846343&text=Ol%C3%A1%20tudo%20bem?%20eu%20te%20responderei%20o%20mais%20r%C3%A1pido%20possivel,%20at%C3%A9%20logo!'>
                                
                                <div className="d:flex align:center">
                                   
                                    <div className="artifact">
                                        
                                        <div className="rect:s-10 c-tertiary"></div>

                                    </div>

                                    <span>Whatsapp</span>

                                </div> 

                                <p className="fw-600">+55 71 9 8884-6343</p>

                            </a>

                        </div>

                        <div className="col-full col:md-12">
                           
                            <a target={'_blank'}  href="mailto:marcosfullstack@gmail.com?subject=Orçamento&cc=marcosfullstack@gmail.com&bcc=marcosfullstack@gmail.com&body=Coloque aqui sua mensagem!">
                               
                                <div className="d:flex align:center">
                                   
                                    <div className="artifact">
                                        
                                        <div className="rect:s-10 c-tertiary"></div>
                                        
                                    </div>

                                    <span>Email</span>

                                </div> 

                                <p className="fw-600">marcosfullstack@gmail.com</p>

                            </a>

                        </div>
                        
                        <div className="col-full col:md-6">

                            <h2>Redes</h2>
                            
                            <a className="contact-card d:flex align:center" target={'_blank'} href="https://github.com/Mr-Fullstack">
                                
                                <div className="artifact">

                                    <div className="rect:s-10 c-tertiary"></div>

                                    <div className="rect:s-10 c-secondary"></div>

                                
                                </div>

                                <p>Github</p> 

                            </a>

                            <a className="contact-card d:flex align:center" target={'_blank'} href="https://www.linkedin.com/in/marcos-antonio-cerqueira-souza-de-freitas-4233a1126/">
                               
                                <div className="artifact">

                                    <div className="rect:s-10 c-tertiary"></div>
                                    
                                    <div className="rect:s-10 c-secondary"></div>
                                
                                </div>

                                <p>Linkedin</p>

                            </a>

                        </div>

                    </div>

                </div> 

                <div className="col-full col:md-4 d:none d:md-block" >

                    <div className="header-section d:flex justify:end  animation:md-slide-left:fade" >

                        <h3 className="title-section c-tertiary">

                        Con<br className="d:none d:md-block"/>tato

                        </h3>

                        <img src={ contact } alt="" className="image-section" />

                    </div>

                </div>

            </div>

        </div>  

    </Section>
  )
}
