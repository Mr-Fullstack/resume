import React from 'react';
import formationImage from '../assets/formation.webp';
import Section from '../components/Section';
import SeparatorTitle from '../components/SeparatorTitle';
import { formations, courses } from '../data/formations';
import userAnimation from '../hooks/userAnimation';


export default function Formation() {

  const { addElement, elements, animateNumber } = userAnimation();

  const generateLowerCaseClassName = (value: string) => value.toLowerCase().split(" ").join("-").trim();

  React.useEffect(() => {
    if (elements.length <= 0) {
      let ids: string[] = [];
      courses.map(({ name }) => ids.push(generateLowerCaseClassName(name)));
      addElement([...ids]);
    }
  }, [elements])

  return (

    <Section className='formation' animateTogether={() => animateNumber(true)}>
      <div className="container">
        <div className="row">
          <div className="col-full col:md-4">
            <div className="header-section animation:md-slide-right:fade">
              <h3 className="title-section">
                For<br className="d:none d:md-block" />ma<br className="d:none d:md-block" />ção
              </h3>
              <SeparatorTitle colors={['b-text', 'b-secondary']} className="d:md-none" />
              <img src={formationImage} alt="" className="image-section" />
            </div>
          </div>
          <div className="col-12 col:md-5">
            {
              formations.map(formation => {
                const yearDiff =  formation.dateFinish.getFullYear() - formation.dateStart.getFullYear() ;
                const dateDiff =  yearDiff > 0 ? yearDiff : formation.dateFinish.getMonth() - formation.dateStart.getMonth();
                return(
                <div className="formation-box animation:md-opacity animation:delay-300ms">
                  <div className="formation-box-detail">
                    <span>{formation.area}</span>
                    <span>{`${dateDiff} ${yearDiff > 0 ? 'anos': 'meses' } ` }</span>
                  </div>
                  <h3 className='fw-600'>{formation.title}</h3>
                  <span>{`${formation.institution} (${formation.dateStart.getFullYear()} - ${formation.dateFinish.getFullYear()})`}</span>
                </div>
              )})
            }

            <div className='formation-card-list animation:md-opacity animation:delay-300ms'>
              <h2>Tecnologias</h2>
              {courses.map(course => (
                <div className='formation-card' key={course.name}>
                  <div className="d:flex align:baseline justify:between w-100">
                    <span>
                      {course.name}
                    </span>
                    {/* <span id={generateLowerCaseClassName(course.name)} >
                      {course.hour} h
                    </span> */}
                    {
                      <div className={"d:flex align:center justify:between " + course.status} >
                        <div className='rect:s-15' ></div>
                        <div className='rect:s-15' ></div>
                      </div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

