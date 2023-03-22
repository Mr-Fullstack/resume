


interface SeparatorTitleProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
    colors:string[];
}

export default function SeparatorTitle({colors,className,...props}:SeparatorTitleProps) {

    const Artifact = ()=> (
        <div className="artifact">
            <div className={'rect:s-12 ' + colors[0] }></div>
            <div className={'rect:s-12 ' + colors[1] }></div>
        </div>
    );

  return (
    <div className={"separation "+ className} {...props}>
        <Artifact/>
        <Artifact/>
    </div>
  )
}
