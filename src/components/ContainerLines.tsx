import React from 'react'
import Line from './Line'

export default function ContainerLines() {
  return (
    <div className='container-lines'>
        <Line direction='left'/>
        <Line direction='right'/>
        <Line direction='top'/> 
        <Line direction='bottom'/> 
    </div>
  )
}
