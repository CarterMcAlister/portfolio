import React from 'react'
import skillStyles from "./skillsection.module.css"
import placeholder from '../img/skill-icons/html.svg'

const SkillSection = ({heading, skillList}) => (
  <section className={skillStyles.card}>
    <div className={skillStyles.cardTitle}>
        <h4>{heading}</h4>
    </div>
    <div className={skillStyles.cardBody}>
        {skillList.map((item) => 
            <div className={skillStyles.skillItem}>
                <img className={skillStyles.skillLogo} src={placeholder} />
                {item.title}
            </div>
        )}
    </div>

  </section>
)

export default SkillSection
