import PhotoComponent from "../../components/photo/PhotoComponent.jsx";
import SectionComponent from "../../components/section/SectionComponent.jsx";
import LinkComponent from "../../components/link/LinkComponent.jsx";
import SkillsGroup from "../../components/skills-group/SkillsGroup";

export default function LeftContainer() {
    const programmingLanguages = [
        {label: 'Java', score: '4'},
        {label: 'Javascript/Typescript', score: '4'},
        {label: 'HTML & CSS', score: '3'},
        {label: 'SQL', score: '2'},
    ];

    const frameworks = [
        {label: 'Spring (Boot/MVC/Data/Security)', score: '4'},
        {label: 'Testing (Cypress, Playwright, JUnit, Jest)', score: '4'},
        {label: 'ReactJS', score: '4'},
        {label: 'Docker', score: '4'},
        {label: 'Thymeleaf', score: '3'},
        {label: 'AWS', score: '3'},
        {label: 'Kubernetes', score: '2'},
        {label: 'Angular', score: '2'},
    ];

    const expertise = [
        {label: 'Clean code'},
        {label: 'Micro-services & SaaS'},
        {label: 'Micro-frontends'},
        {label: 'Multi-tenancy'},
        {label: 'IAM / OIDC / OAuth2'},
    ];

    const languages = [
        {label: 'Polish', score: '6'},
        {label: 'English', score: '5'},
        {label: 'German', score: '2'},
    ];

    return (
        <div class='resume__left-container'>
            <PhotoComponent/>

            <SectionComponent title='Details'/>
            <p class='label'>Phone</p>
            <p class='text'>+48609203699</p>
            <p class='label'>Email</p>
            <p class='text'>michal.gorski.it@gmail.com</p>

            <SectionComponent title='Links'/>
            <LinkComponent href='https://github.com/goorskyy' title='GitHub'/>
            <LinkComponent href='https://www.linkedin.com/in/mgorskyy/' title='LinkedIn'/>

            <SkillsGroup title='Programming languages' skills={programmingLanguages}/>
            <SkillsGroup title='Frameworks & Tools' skills={frameworks}/>
            <SkillsGroup title='Expertise' skills={expertise}/>
            <SkillsGroup title='Languages' skills={languages}/>
        </div>
    );
}