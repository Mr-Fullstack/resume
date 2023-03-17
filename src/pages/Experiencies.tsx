import React, { ReactNode } from 'react'


interface TimeLineProps {
    data:ReactNode[][];
    years:number[]
}

export default function Experiencies() {


    const experiencies:ReactNode[][] = [
        [
            <article>
                <header>
                    <h2> Jr Web Developer Freelancer</h2>
                    <p> Level 123 </p>
                </header>
                <p>Developement web site wordpress <br/>  PHP 7 -  MYSQL - JS - CSS3 - GIT </p>
            </article>,
            <article>
                <header>
                    <h2>Jr Front End</h2>
                    <p>Reis da Bola</p>
                </header>
                <p>Developement PWA <br/> REACT - SASS - JAVASCRIPT - FIGMA - GIT - SVN</p>
            </article>
        ],
        [
            <article>
                <header>
                    <h2>Jr Front End UX UI Freelancer</h2>
                    <p>Golias Fantasy</p>
                </header>
                <p>Developement PWA <br/> FIREBASE - REACT NATIVE - REACT - SASS - JAVASCRIPT - FIGMA - SVN</p>
            </article>
        ],
        [ 
            <article>
                <header>
                    <h2>FullStack Web Developer Freelancer</h2>
                    <p>Web app - Mobile app - Games</p>
                </header>
                <p>FIREBASE - REACT NATIVE - REACT - SASS - JAVASCRIPT FIGMA - UNITY - C# - UML - SQL - MONGO - NODE - GIT</p>
            </article>
        ]
    ]

    const TimeLine=({years,data}:TimeLineProps)=>{

        const content = data.map((box,index)=>{
            
            return(
                <ul className='timeline-box' key={index+new Date().getMilliseconds()}>
                    { box.map( (item,index) => (
                            <li key={index + new Date().getMilliseconds()}>
                                {item}
                            </li>
                        ))
                    }
                    <div className='timeline-box-year'>
                        <span>{years[index]}</span>
                    </div>
                </ul>
            )  
        });

        return (
            <div className='col-9 col:md-6 timeline'>
                {content}
            </div>
        );
    }

    return (
        <section>
            <h3 className="title-section">
                Experiencies
                <div className="title-separation"></div>
            </h3>
            <div className="container">
                <div className="row">
                    <TimeLine data= {experiencies} years={[2020,2022,2023]} />
                </div>
            </div>     
        </section>
    )
}
