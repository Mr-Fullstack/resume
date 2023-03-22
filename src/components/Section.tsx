import React from 'react'
import { useLineColor } from '../contexts/LineContext'

interface SectionProps extends React.PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>{}

const Section = React.forwardRef<any,SectionProps>( ({children,...props})=>  {

  const ref = React.useRef<HTMLDivElement>(null);

  const { changeLineColor } = useLineColor();

  const animaOnTheScreen = (evt:Event)=> {
    
    if(ref.current)
    {
      console.warn(ref.current.getBoundingClientRect().top)
      console.warn(ref.current.classList[0]); 
      if(ref.current.getBoundingClientRect().top < window.innerHeight / 2 )
      {
        // console.warn("passou do top"); 
        ref.current.classList.add("anima");
        
        switch(ref.current.classList[0])
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
        if(ref.current.getBoundingClientRect().top >= window.innerHeight )
        {
          ref.current.classList.remove("anima");
        }
      }
    }
  }

 React.useEffect(()=>{

    document.addEventListener("scroll",animaOnTheScreen);
    
    return(()=>{
      document.removeEventListener("scroll",animaOnTheScreen);
    })

  },[])
  React.useEffect(()=>{

    document.addEventListener("scroll",animaOnTheScreen);
    
    return(()=>{
      document.removeEventListener("scroll",animaOnTheScreen);
    })

  },[])

  return (
    <section ref={ref} {...props}>
        {children}
    </section>
  )

})



export default React.memo(Section)