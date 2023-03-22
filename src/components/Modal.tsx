import React, { EventHandler, HTMLAttributes, KeyboardEvent, KeyboardEventHandler, MouseEvent, MouseEventHandler, PropsWithChildren, ReactNode } from 'react'
import { useModal } from '../contexts/ModalContext'

import btnCloseModal from '../../src/assets/close.png'

export default function Modal( { children }:PropsWithChildren ) {
    
   const { modals, closeModal } = useModal();

   const handlerEscapeCloseModal = (evt:KeyboardEventInit)=>{
    
    
    if(evt.key === 'Escape')
    {
        // console.log("fechar modal com Esc");
        closeModal()
    }

   };


   const handlerCloseClickOutSide = (evt:any)=>{

        if(evt.target.classList.contains('modal'))
        {
            // console.log("fecha com clique");
            closeModal()
        }
   };


   React.useEffect(()=>{

    // console.log("evt",modals);
    document.addEventListener("keydown",handlerEscapeCloseModal);
    document.addEventListener("click",handlerCloseClickOutSide);

    return(()=>{
        if(modals.length<=0){
            closeModal();
            document.removeEventListener("keydown",handlerEscapeCloseModal);
            document.removeEventListener("click",handlerCloseClickOutSide);
        }
    })

   },[modals])

   return (
        <div className='modal'>
            <div className="modal-main">
                <img src={btnCloseModal} alt="" className='modal-close'  onClick={()=>closeModal()}/>
                {children}
            </div>
        </div>
    )

}
