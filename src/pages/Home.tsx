import React from 'react'
import ButtonAvailableJob from '../components/ButtonAvailableJob';
import Section from '../components/Section';
import SeparatorTitle from '../components/SeparatorTitle';
import tecs from '../assets/tecs.webp';
import heroImage from '../assets/hero.webp';
import heroImageShadow from '../assets/shadow.webp';
import heroImageLight from '../assets/hero-light.webp';
export default function Home() 
{
	return (
		<Section className='home'>
			<div className="container">
				<ButtonAvailableJob available/>
				<div className='hero d:md-flex align:md-center justify:md-center'>
					<div className="row">
						<article className="col-full col:lg-5">
							<header>
							<h1>Marcos Antonio Cerqueira Souza de Freitas</h1>
								<p>Analista de Sistemas e Programador</p>
								<SeparatorTitle colors={ [ 'b-secondary', 'b-tertiary' ] } />
							</header>
							<p>
								Formado em análise e desenvolvimento de sistemas, iniciando na área de desenvolvimento em 2020, 
								desde então venho trabalhando em projetos comerciais e pessoais com diversas tecnologias
							</p>
							<img src={ tecs } alt="" />
						</article>
						<div className="col-6 col:lg-7 d:none d:md-block ">
							{/* <img src={ my_self } alt="" width={ 500 } height={ 500 } /> */}
							<div className='hero-image'>
								<img src={ heroImage } alt="hero-image" width={600} height={600}/>
								<img className='hero-image-light' src={ heroImageLight } alt="hero-image" width={600} height={600}/>
							</div>
							<img className='hero-image-shadow'src={ heroImageShadow } alt="hero-image" width={600} height={600}/>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}
