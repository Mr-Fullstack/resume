import React from 'react'
import Section from '../components/Section'
import SeparatorTitle from '../components/SeparatorTitle'

import skillImage from '../assets/skills.webp';
import { skills } from '../data/skills';

export default function Skills() 
{
	return (
		<Section className="skills">
			<div className="container">
				<div className="row">
					<div className="col-full col:md-4">
						<div className="header-section animation:md-slide-right:fade ">
							<h3 className="title-section c-secondary">Habilidades</h3>
							<SeparatorTitle colors={['b-secondary', 'b-text']} className="d:md-none" />
							<img src={skillImage} alt="" className="image-section" />
						</div>
					</div>
					<div className="col-full col:md-8">
						<div className="row">
							<div className="col-full col:md-6">
								<div className="skills-list animation:opacity animation:delay-300ms">
									<h2>Habilidades Atuais</h2>
									{
										skills.current.map(skill => (
											<div className="skill-card" key={skill}>
												<span>disponível</span>
												<p>
													{skill}
												</p>
											</div>
										))
									}
								</div>
							</div>
							<div className="col-full col:md-6">
								<div className="skills-list animation:opacity animation:delay-300ms">
									<h2>Habilidades em breve</h2>
									{
										skills.comingSoon.map(skill => (
											<div className="skill-card skill-card:coming-soon" key={skill}>
												<span>Em breve</span>
												<p>
													{skill}
												</p>
											</div>
										))
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}
