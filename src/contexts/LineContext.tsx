import React from 'react';
import ContainerLines from '../components/ContainerLines';
import { isMobile } from './../helpers/index';

interface LineContextProps
{
    changeLineColor:( newColor: string )=> string;
}

const ContextLine = React.createContext( {} );

export default function LineContext( { children }: React.PropsWithChildren ) {

    const [ color, setColor ] = React.useState< string >( "c-primary" );

    const changeLineColor = ( newColor: string )=> {

        setColor( newColor )
    }

    return (

        <ContextLine.Provider value={ { changeLineColor } }>

            { !isMobile() && <ContainerLines color={ color } /> }

            { children }

        </ContextLine.Provider>
  )

}


export  const useLineColor = ()=> React.useContext( ContextLine ) as LineContextProps ;
