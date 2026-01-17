import ScoreComponent from "../score/ScoreComponent";

export default function SkillItem({ label, score }) {
    return (
        <>
            <p class='label'>{label}</p>
            {score && <ScoreComponent score={score} />}
        </>
    );
}
