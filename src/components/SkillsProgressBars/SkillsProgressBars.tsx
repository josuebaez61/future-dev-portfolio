import React from 'react'
import { useSkills } from '../../hooks/useSkills';
import BsProgressBar from '../BsProgressBar/BsProgressBar';
import LoadingCard from '../LoadingCard.tsx/LoadingCard';
const SkillsProgressBars = () => {

    const { skills, loading } = useSkills();
    return (
        <div>
            {
                loading
                    ? <LoadingCard />
                    : skills.map(skill =>
                        <article key={skill.id} className="pt-2 pb-2">
                            <h6>{skill.label}</h6>
                            <BsProgressBar value={skill.value} />
                        </article>)
            }
        </div>
    )
}

export default SkillsProgressBars
