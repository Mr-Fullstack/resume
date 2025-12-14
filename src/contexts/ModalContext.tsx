import React, { PropsWithChildren, ReactNode } from 'react'
import Modal from '../components/Modal';


const ContextModal = React.createContext( { } );

interface ModalProps 
{
    openModal:( modalContent:JSX.Element )=> void;
    closeModal:( index?:number ) => void;
    modals:ReactNode[];
}

function ModalContext( { children }: PropsWithChildren ) 
{

    const [ modals, setModals ] = React.useState< ReactNode[] >( [] );

    const [ active, setActive ] = React.useState( false );

    const openModal = ( modalContent: ReactNode )=> {

        if( !document.body.classList.contains( 'modal-open' )) 
        {
            document.body.classList.add( 'modal-open' )
        }

        setActive(true);

        const addModal = modals ;

        addModal.unshift(

            <Modal>
                
                { modalContent }
            
            </Modal> 
        )

        setModals([ ...addModal ])
    }

    const closeModal = ( modalIndex?:number )=>{

        if( modalIndex )
        {   
            const removeModal = modals.filter( ( modal, index )=> index !== modalIndex );

            setModals(removeModal)
        }
        else
        {
            const removeModal = modals;

            removeModal.shift();

            if( removeModal.length <= 0 )
            {
               
                if( document.body.classList.contains('modal-open') )
                {
                    document.body.classList.remove('modal-open')
                }
            }
            setModals([...removeModal])
        }
    }

    return (

        <ContextModal.Provider value={{ openModal, closeModal,modals }}>

            { children }

            {
                active && modals.map( ( modal, index ) => (

                    <React.Fragment key={index}>

                        { modal }
                    
                    </React.Fragment>

                ))
            }
            
        </ContextModal.Provider>
  )
}

export default ModalContext;

export function useModal()
{

    return React.useContext( ContextModal ) as ModalProps ;
}