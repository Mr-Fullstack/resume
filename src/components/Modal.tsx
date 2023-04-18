import React, {  PropsWithChildren } from 'react'
import { useModal } from '../contexts/ModalContext'

import btnCloseModal from '../../src/assets/close.webp'

export default function Modal( { children }: PropsWithChildren ) 
{
    
   const { modals, closeModal } = useModal();

   const handlerCloseModal = ( evt: Event )=>{

    if(evt instanceof KeyboardEvent)
    {

        if( evt.key === 'Escape' )
        {
            closeModal()
        }
    }

    if( evt instanceof MouseEvent )
    {
        handlerCloseClickOutSide( evt )
    }

   };


   const handlerCloseClickOutSide = ( evt: Event )=>
   {
        if( evt.target instanceof HTMLElement )
        {
            if( evt.target.classList.contains( 'modal' ) )
            {
                closeModal()
            }
        }
   };


   React.useEffect( ()=> {

    document.addEventListener( "keydown", handlerCloseModal );

    document.addEventListener( "click", handlerCloseModal );

    return( ()=> {

            if( modals.length <= 0 )
            {
                closeModal();

                document.removeEventListener( "keydown", handlerCloseModal );

                document.removeEventListener( "click", handlerCloseModal );
            }
    })

   },[ modals ] )

   return (

        <div className='modal'>

            <div className="modal-main">

                <img src={ btnCloseModal } alt="" className='modal-close'  onClick={ ()=> closeModal() } />

                { children }
            </div>

        </div>
    )

}
