import TitleComponent from './components/title/TitleComponent';
import './style.scss';
import SectionComponent from "./components/section/SectionComponent";
import TimelineComponent from './components/timeline/TimelineComponent';
import LinkComponent from './components/link/LinkComponent';
import ScoreComponent from './components/score/ScoreComponent';
import ChipComponent from './components/chip/ChipComponent';
import PhotoComponent from "./components/photo/PhotoComponent";

export default function App() {
    const startYear = 2016;
    const currentYear = new Date().getFullYear();
    const experienceInYears = currentYear - startYear;

    return (
        <>
            <div class='resume resume__container'>
                <TitleComponent title="Michał Górski"></TitleComponent>

                <div class='resume__left-container'>
                    <PhotoComponent/>
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
                    <p class='label'>Testing (Cypress, Selenium, JUnit, Jest, Chromatic)</p>
                    <ScoreComponent score='4' />
                    <p class='label'>ReactJS</p>
                    <ScoreComponent score='4' />
                    <p class='label'>Thymeleaf</p>
                    <ScoreComponent score='3' />
                    <p class='label'>Docker</p>
                    <ScoreComponent score='3' />
                    <p class='label'>AWS</p>
                    <ScoreComponent score='2' />
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
                    <p>
                        With <b>over {experienceInYears}</b> years of experience in the IT industry, I have honed my skills in developing and maintaining web applications on various complexity levels.
                        My unique approach to team leadership focuses on inspiring proactivity and fostering a positive team culture.
                    </p>

                    <p>If you're looking for a developer who can deliver high-quality solutions while cultivating a collaborative and motivated team environment, let’s connect and explore how we can achieve your business goals together.</p>
                    <SectionComponent title='Employment history' />
                    <TimelineComponent title='Senior Full-stack Developer at Jit Team' startYear='2025' endYear='current' location='Gdańsk/Remote' />
                    <ChipComponent titles={['ReactJS', 'TypeScript', 'Java', 'Spring', 'AWS', 'Playwright']} />
                    <p>Working on a leading european public procurement platform.</p>
                    <TimelineComponent title='Team Lead at OneWelcome, a Thales company' startYear='2022' endYear='2025' location='Gdańsk/Remote' />
                    <ChipComponent titles={['ReactJS', 'TypeScript', 'Cypress', 'Storybook', 'Java', 'Spring', 'AWS']} />
                    <p>I lead a multinational team of four skilled developers, each with a diverse skill set, tasked with the following key responsibilities:</p>

                    <ul>
                        <li>Developing and maintaining an open-source, highly accessible component library, while building scalable user interfaces using ReactJS and TypeScript in a micro-frontend architecture.</li>
                        <li>Designing and implementing system architecture to support scalable and efficient frontend applications.</li>
                        <li>Working on a new platform, being responsible for new microservices and frontend applications.</li>
                        <li>Owning and maintaining production-ready micro-frontend containers.</li>
                        <li>Writing various types of tests, including unit, component, end-to-end, and visual tests.</li>
                    </ul>

                    <p>As a team leader, I focus on:</p>
                    <ul>
                        <li>Planning and refining our work processes and tasks within an agile framework to enhance team productivity.</li>
                        <li>Fostering a strong engineering culture by implementing best practices and encouraging continuous learning.</li>
                        <li>Conducting job interviews, facilitating 1-on-1s, and overseeing annual performance reviews to support team development.</li>
                    </ul>

                    <TimelineComponent title='Software Developer at Onegini' startYear='2018' endYear='2022' location='Gdańsk/Remote' />
                    <ChipComponent titles={['Java', 'Spring', 'Selenium', 'Thymeleaf', 'JavaScript']} />

                    <p>
                        I worked on the implementation of a core identity platform with over 25 customers from various markets, including financial, insurance, and government sectors.
                        In this role, time was crucial, which allowed me to test my abilities when working under pressure.
                    </p>
                    <p>
                        My key responsibilities included:
                    </p>
                    <ul>
                        <li>Integrating and customizing our product, which involved integrating it with existing APIs, implementing UI designs, and more.</li>
                        <li>Collaborating with architects to validate proposed designs.</li>
                        <li>Implementing and maintaining internal tools (e.g., SpringBoot starters) to expedite time-to-market.</li>
                        <li>Assisting the R&D team with new features and maintenance tasks.</li>
                    </ul>

                    <p>I transitioned to an R&D position where I continued to work on the same identity platform's monolithic application as a senior Java developer. In this role, my focus was primarily on:</p>

                    <ul>
                        <li>Delivering new features, primarily related to identity protocols such as OIDC/OAuth2, SAML, and their implementations with various national identity providers.</li>
                        <li>Enhancing the existing codebase and tests, which significantly reduced the time and flakiness of our Selenium-based end-to-end tests.</li>
                        <li>Shifting from JUnit/Mockito-based tests to proper black-box testing whenever applicable.</li>
                    </ul>

                    <TimelineComponent title='Junior Java Developer at Solwit' startYear='2016' endYear='2018' location='Gdańsk' />
                    <ChipComponent titles={['Java', 'Spring', 'Angular', 'Protractor', 'TypeScript']} />
                    <p>I was responsible for development of web application for an external customer. The work consisted of both backend part of the application and frontend.</p>
                    <SectionComponent title='Education' ></SectionComponent>
                    <TimelineComponent title='Masters`s in Computer Science, University of Gdansk' startYear='2013' endYear='2018' location='Gdańsk' />
                </div>
            </div>

        </>
    );
}
