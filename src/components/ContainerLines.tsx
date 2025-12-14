import Line from './Line'

interface ContainerLinesProps {
  color: string;
}

export default function ContainerLines({ color }: ContainerLinesProps) {

  return (
    <div className='container-lines'>
      <Line direction='top' color={color} />
      <Line direction='left' color={color} />
      <Line direction='right' color={color} />
      <Line direction='bottom' color={color} />
    </div>
  )
}
