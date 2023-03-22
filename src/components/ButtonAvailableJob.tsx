import React from 'react'
import { useModal } from '../contexts/ModalContext';

interface ButtonAvailableJobProps{
    available:boolean;
}

export default function ButtonAvailableJob({available}:ButtonAvailableJobProps) {

  let title = "Estou disponível para novos projetos. Entre em contato comigo!";
  let status = "--online";
  let color ="c-secondary"

  if(!available){
    title = "Indisponível para novos projetos no momento. Obrigado pelo seu contato!";
    status = "--offline"
    color ="--attention"
  }

  const {openModal, closeModal} = useModal(); 
   
  const ContactModal = () =>{
     return( 
         <div className="modal-content contact">
           {
             <div className="modal-body">
                    <div className="row">
                        <div className="col-full col:md-6">   
                            <h2 className="modal-title">Contato</h2>
                            <a target={'_blank'} href='https://api.whatsapp.com/send?phone=5571988846343&text=Ol%C3%A1%20tudo%20bem?%20eu%20te%20responderei%20o%20mais%20r%C3%A1pido%20possivel,%20at%C3%A9%20logo!'>
                                <div className="d:flex align:center">
                                    <div className="artifact">
                                        <div className="rect:s-10 c-tertiary"></div>
                                    </div>
                                    <span>Whatsapp</span>
                                </div> 
                                <p className="fw-600 c-text">+55 71 9 8884-6343</p>
                            </a>
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
           }  
         </div>
     )
  }
  
  const toggleModal = ()=>{
     openModal(<ContactModal/>)
  }
 

  return (

    <a className={"btn-available-job "  + status } onClick={toggleModal}>
        <div className="artifact">
            <div className={"rect:s-10 " + color}></div>
            <div className={"rect:s-10 " + color}></div>
        </div>
        <span>
            {title} 
        </span>
    </a>
  )
}
