import React from 'react'

interface ButtonAvailableJobProps{
    available:boolean;
}

export default function ButtonAvailableJob({available}:ButtonAvailableJobProps) {

  let title = "Estou disponível para novos projetos. Entre em contato comigo!";
  let status = "--online";
  let color ="c-secondary"

  if(!available){
    title = "Indisponível para novos projetos no momento. Obrigado pelo seu contato!";
    status = "--offline"
    color ="--attention"
  }

  return (

    <div className={"btn-available-job "  + status }>
        <div className="artifact">
            <div className={"rect:s-10 " + color}></div>
            <div className={"rect:s-10 " + color}></div>
        </div>
        <span>
            {title} 
        </span>
    </div>
  )
}
