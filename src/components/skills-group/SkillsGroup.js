import SectionComponent from "../section/SectionComponent.jsx";
import SkillItem from "../skill-item/SkillItem.js";

export default function SkillsGroup({ title, skills }) {
    return (
        <>
            <SectionComponent title={title} />
            {skills.map((skill, index) => (
                <SkillItem key={index} label={skill.label} score={skill.score} />
            ))}
        </>
    );
}
