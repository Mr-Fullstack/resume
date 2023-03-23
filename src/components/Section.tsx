import React from 'react'
import { useLineColor } from '../contexts/LineContext'

interface SectionProps extends React.PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>
{
  animateTogether?:( params?: any )=> void;
}

const Section = React.forwardRef< any, SectionProps > ( ( { animateTogether, children, ...props } )=>  {

  const ref = React.useRef< HTMLDivElement >( null );
 
  const { changeLineColor } = useLineColor();

  const animaOnTheScreen = ()=> {
    
    if(ref.current)
    {
     
      if( ref.current.getBoundingClientRect().top < window.innerHeight / 2 )
      {

        const sectionCurrentClassName = ref.current.classList[ 0 ]
     
        ref.current.classList.add( "anima" );

        if(animateTogether)
        {

          let timeout = setTimeout( ()=> {

            animateTogether();

            clearTimeout(timeout)

          }, 0 )
         
        }
        
        switch(sectionCurrentClassName)
        {

          case 'home':

            changeLineColor("c-primary");

            break;

          case 'experience':

            changeLineColor("c-secondary");

            break;

          case 'project':

            changeLineColor("c-tertiary");

            break;

          case 'formation':

            changeLineColor("c-text");

            break;

          case 'contact':

            changeLineColor("c-tertiary");

            break;

          default:

            changeLineColor("c-primary");

            break;
        }

      }

      else
      {

        if( ref.current.getBoundingClientRect().top >= window.innerHeight )
        {
          ref.current.classList.remove( "anima" );
        }

      }

    }

  }

  React.useEffect( ()=> {

    document.addEventListener( "scroll", animaOnTheScreen );
    
    return( ()=> {

      document.removeEventListener( "scroll", animaOnTheScreen );

    })

  },[])

  return (

    <section ref={ ref } { ...props }>

        { children }

    </section>

  )

})



export default React.memo( Section )