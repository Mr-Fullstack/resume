
import formationImage from '../assets/formation.png';
import Section from '../components/Section';
import SeparatorTitle from '../components/SeparatorTitle';
import { formations } from '../data/formations';

export default function Formation()
{

  return (
    <Section className='formation'>
        <div className="container">
            <div className="row">
                    <div className="col-full col:md-4">
                        <div className="header-section animation:md-slide-right:fade">
                            <h3 className="title-section">
                                For<br className="d:none d:md-block"/>ma<br className="d:none d:md-block"/>ção
                            </h3>
                            <SeparatorTitle colors={['b-text','b-secondary']} className="d:md-none"/>
                            <img src={formationImage} alt="" className="image-section" />
                        </div>
                    </div>
                    <div className="col-12 col:md-5">
                            <div className="formation-box animation:md-opacity animation:delay-300ms">
                                <span>Tecnólogo</span> 
                                <h3 className='fw-600'>Analise e desenvolvimento de sistemas</h3>
                                <span>UNOPAR</span> 
                            </div>
                            <div className='formation-card-list animation:md-opacity animation:delay-300ms'>
                                <h2>Cursos Intensivos</h2>
                                {formations.map(formation=>(
                                    <div className='formation-card'>
                                        <div className="d:flex align:baseline justify:between w-100">
                                            <span>{formation.name}</span>
                                            <span>{formation.hour}h</span>
                                            {
                                                <div className={"d:flex align:center justify:between " + formation.status}>
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

