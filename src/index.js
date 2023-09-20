import TitleComponent from './components/title/TitleComponent';
import './style';
import SectionComponent from "./components/section/SectionComponent";
import TimelineComponent from './components/timeline/TimelineComponent';
import LinkComponent from './components/link/LinkComponent';
import ScoreComponent from './components/score/ScoreComponent';
import ChipComponent from './components/chip/ChipComponent';

export default function App() {
    return (
        <>
            <div class='resume resume__container'>
                <TitleComponent title="Michał Górski"></TitleComponent>

                <div class='resume__left-container'>
                    <SectionComponent title='Details' ></SectionComponent>
                    <p class='label'>Phone</p>
                    <p class='text'>+48609203699</p>
                    <p class='label'>Email</p>
                    <p class='text'>michal.gorski.it@gmail.com</p>
                    <SectionComponent title='Links' ></SectionComponent>
                    <LinkComponent href='https://github.com/goorskyy' title='GitHub' />
                    <LinkComponent href='https://www.linkedin.com/in/mgorskyy/' title='LinkedIn' />

                    <SectionComponent title='Programming languages' ></SectionComponent>
                    <p class='label'>Java</p>
                    <ScoreComponent score='4' />
                    <p class='label'>Javascript/Typescript</p>
                    <ScoreComponent score='3' />
                    <p class='label'>HTML & CSS</p>
                    <ScoreComponent score='3' />
                    <p class='label'>SQL</p>
                    <ScoreComponent score='2' />

                    <SectionComponent title='Frameworks & Tools' ></SectionComponent>

                    <p class='label'>Spring (Boot/MVC/Data/Security)</p>
                    <ScoreComponent score='4' />
                    <p class='label'>Testing (Cypress, Selenium, JUnit, Mockito, Jest)</p>
                    <ScoreComponent score='4' />
                    <p class='label'>ReactJS</p>
                    <ScoreComponent score='3' />
                    <p class='label'>Thymeleaf</p>
                    <ScoreComponent score='3' />
                    <p class='label'>Docker</p>
                    <ScoreComponent score='3' />
                    <p class='label'>Kubernetes</p>
                    <ScoreComponent score='2' />
                    <p class='label'>Angular</p>
                    <ScoreComponent score='2' />
                    <p class='label'>NodeJS</p>
                    <ScoreComponent score='2' />

                    <SectionComponent title='Other'></SectionComponent>
                    <p class='label'>CircleCI</p>
                    <p class='label'>GitHub/GitLab</p>
                    <p class='label'>Jira/Confluence</p>
                    <p class='label'>Maven</p>
                    <p class='label'>Sonar</p>
                    <p class='label'>Git</p>
                    <p class='label'>REST</p>
                    <p class='label'>OAuth/OIDC</p>
                    <p class='label'>Unix</p>
                    <p class='label'>Redis</p>
                    <p class='label'>Postman</p>

                    <SectionComponent title='Concepts'></SectionComponent>
                    <p class='label'>SOLID</p>
                    <p class='label'>Clean code</p>
                    <p class='label'>Micro-frontends</p>
                    <p class='label'>Multitenancy</p>

                    <SectionComponent title='Languages'></SectionComponent>
                    <p class='label'>Polish</p>
                    <ScoreComponent score='6' />
                    <p class='label'>English</p>
                    <ScoreComponent score='5' />

                </div>
                <div class='resume__right-container'>
                    <SectionComponent title='About Me' />
                    <p>With <b>over 7</b> years of experience in the IT industry, I have honed my skills in developing and maintaining web applications on various complexity levels. My non-standard approach to leading teams involves inspiring proactiveness and fostering a positive team culture.</p>

                    <p>I am always looking for innovative ways to optimize team performance and continuously improve our processes. If you're looking for a Team Lead who can deliver high-quality solutions while fostering a positive and collaborative team culture, let's connect and explore how we can achieve your business goals together.</p>
                    <SectionComponent title='Employment history' />
                    <TimelineComponent title='Team Lead, OneWelcome' startYear='2022' endYear='present' location='Gdańsk/Remote' />
                    <ChipComponent titles={['ReactJS', 'TypeScript', 'Cypress', 'Storybook']} />
                    <p>I oversee a team comprising four skilled frontend engineers, tasked with the following key responsibilities:</p>

                    <ul>
                        <li>Developing and maintaining an open-source, highly accessible, component library in alignment with UX-designed templates.</li>
                        <li>Collaborating on the creation of UI for new products.</li>
                        <li>Exploring innovative solutions through the development of Proof of Concepts (PoCs).</li>
                    </ul>

                    <p>In my role as a team lead, I assume various duties, including:</p>
                    <ul>
                        <li>Acting as the primary point of contact for product management.</li>
                        <li>Strategizing and refining our workflow and tasks.</li>
                        <li>Conceptualizing novel solutions and designs.</li>
                        <li>Nurturing a cohesive engineering culture within the team.</li>
                    </ul>

                    <TimelineComponent title='Software Developer, OneWelcome' startYear='2018' endYear='2022' location='Gdańsk/Remote' />
                    <ChipComponent titles={['Java', 'Spring', 'Selenium', 'Thymeleaf', 'JavaScript']} />

                    <p>I was working with a product operating in the CIAM space where I was mostly responsible for the engineering tasks,
                        such as creating new features, testing, and frontend work.
                    </p>
                    <p>
                        For the first two years, I worked closely with the customer by implementing the technical solutions prepared by the architects.
                    </p>
                    <p> After that, I moved to an R&D position where I was creating features based on business requirements.</p>
                    <TimelineComponent title='Junior Java Developer, Solwit' startYear='2016' endYear='2018' location='Gdańsk' />
                    <ChipComponent titles={['Java', 'Spring', 'Angular', 'Protractor', 'TypeScript']} />
                    <p>I was responsible for development of web application for an external customer. The work consisted of both backend part of the application and frontend.</p>
                    <SectionComponent title='Education' ></SectionComponent>
                    <TimelineComponent title='Masters`s, University of Gdansk' startYear='2013' endYear='2018' location='Gdańsk' />
                </div>
            </div>

        </>
    );
}
