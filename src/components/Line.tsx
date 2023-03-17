import React from 'react';
import { getRandomNumberLimit, getRandomRangeNumber } from '../helpers';
import { animate, motion, motionValue } from "framer-motion"
interface LineProps extends React.HTMLAttributes<HTMLDivElement> {
    direction:'top'|'bottom'|'left'|'right';
    speed?:number;
}

interface LineOptions {
    transform:string;
    opacity:number
}

export default function Line({speed=50,direction,className,...props}:LineProps){
 

    const ref = React.useRef<HTMLDivElement>(null) 

    const getInitialPositonToTransform = ()=> {
        
        switch(direction)
        {
            case'left':
                return window.innerWidth + 200;

            case'top':
                return window.innerHeight + 200;

            case 'bottom':
                return (window.innerHeight * -1) - 200;

            case 'right':
               return (window.innerWidth * -1) -200;
        }
    }

    const [ distance, setDistance] = React.useState(getInitialPositonToTransform());
    const [ position, setPosition] = React.useState(getRandomRangeNumber(25,100));
    const [ duration, setDuration] = React.useState(speed);
    const [ time, setTime] = React.useState(getRandomRangeNumber(50,150));

    const [ lineColor, setLineColor] = React.useState('c-secondary-line');
    const [ rectColor, setRectColor] = React.useState('b-secondary');

    const getOptionsTransform = ()=> {

        switch(direction)
        {
            case'bottom':
            case'top':
               
                return {
                    x:position,
                    y:distance
                }
                
            case 'left':
            case 'right':
                return {
                    x:distance,
                    y:position
                }   
        }
    }

    const getMaxLimitToFinishTransformLine = ()=>{

        switch(direction)
        {
            case'left':
            case'top':
            case 'bottom':
            case 'right':
                return getInitialPositonToTransform() * -1 
        }
    }

    const isMaxLimitToFinishTranformLineReaching = ()=> {

        switch(direction)
        {
            case'left':
            case'top':
                return distance <= getMaxLimitToFinishTransformLine()

            case 'right':
            case 'bottom':
                return distance >= getMaxLimitToFinishTransformLine()

        }
    }
    
    const lineColors = ['c-secondary-line','c-primary-line','c-tertiary-line'];
    const rectColors = ['b-secondary','b-primary','b-tertiary'];

   
    const rangeLineColors = ()=>{
        setLineColor( lineColors[getRandomNumberLimit(3)] ) ;
    }

    const rangeRectColors = ()=>{
        return rectColors[getRandomNumberLimit(3)];
    }

    const lineStayMoviment = ()=> {
      
        switch(direction)
        {
            case'top':
            case 'left':

                setDistance(oldState =>  oldState -=duration );
                break;

            case'bottom':
            case 'right':

                setDistance(oldState => oldState +=duration ) ;
                break;
        }
    }

    const resetLineMoviment = ()=> { 


        if( ref.current)
        {
            ref.current.style.opacity = '0';
        }
        
        setDuration( getRandomRangeNumber(25,50) );
        setDistance( getInitialPositonToTransform());

        let timeout = setTimeout(()=>{

            setTime( getRandomRangeNumber(50,150))

            switch(direction)
            {
                case'top':
                case 'bottom':
                    setPosition( getRandomRangeNumber(25,window.innerHeight) ); 

                    break;
    
                case'left':
                case 'right':
    
                    setPosition( getRandomRangeNumber(25,window.innerHeight) ); 
                    break;
            }


            let timeout2 = setTimeout(()=> {

                if( ref.current)
                {
                    ref.current.style.opacity = '1';
                }
    
                clearTimeout(timeout2)

            },110)

            clearTimeout(timeout)

        },100)

    }


    React.useEffect(()=>{

        if(ref.current){

            const timeInterval = setInterval(()=>{
            
                if( !isMaxLimitToFinishTranformLineReaching() )
                {
                    lineStayMoviment()
                }
                else
                {
                    
                    resetLineMoviment();  
                }
            },time)
    
            return(()=>{
                clearInterval(timeInterval)
            })
        }
      
    },[distance,time,ref])

    return (

        <motion.div ref={ref} className={'line '+ 'line:'+direction +' '+ lineColor +' '+ className }
         initial= {getOptionsTransform()}
         animate= {getOptionsTransform()}>
            <div className={'rect:s-12 ' + rectColor }></div>
        </motion.div>

    )
}


