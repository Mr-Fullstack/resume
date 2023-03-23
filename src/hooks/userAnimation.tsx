import React from 'react'

export default function userAnimation() {

  const [ elements, setElements ] = React.useState< string[] >( [ ] );
  const [ animate, setAnimate ] = React.useState< boolean >( false );

  const addElement=(value:any)=>{

    setElements( oldState => [ ...oldState, ...value ] );

  }

  const animateNumber = ( trigger: boolean)=>{

    setAnimate( trigger )

  }


  const incrementNumber = ( number: HTMLElement )=> {

    const total = +number.innerText.replace('h','');

    number.innerText = '0';

    const increment = 2;

    let count = 0;
    
    const interval = setInterval( ()=> {

        count += increment;

        number.innerText = count + 'h';

        if( count > total )
        {

          number.innerText = total + 'h' ;

          clearInterval( interval )

        }

    }, 100 * Math.random() )

  }

  const getNumbers = ()=>
  {
    elements.map(element => {

      const number = document.getElementById( element );

      if( number ) incrementNumber( number );

    })

  }

  React.useEffect( ()=> {
   
        if( animate )
        {
            if( elements.length >= 1 )
            {
              getNumbers()
            }
        }

  },[ animate ] )

  return {

    addElement,
    elements,
    animate,
    animateNumber
    
  }


}
