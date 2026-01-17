import SectionComponent from "../../components/section/SectionComponent";
import TimelineComponent from "../../components/timeline/TimelineComponent";
import ChipComponent from "../../components/chip/ChipComponent";

export default function RightContainer() {
    const startYear = 2016;
    const currentYear = new Date().getFullYear();
    const experienceInYears = currentYear - startYear;

    return (
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
            <p>Working on a leading European public procurement platform, with key responsibilities including:</p>
            <ul>
                <li>Developing and scaling robust full-stack features using ReactJS, TypeScript, and Spring Boot.</li>
                <li>Ensuring high platform reliability through automated testing with Playwright and comprehensive unit testing.</li>
                <li>Collaborating with cross-functional teams to modernize procurement workflows and improve user experience.</li>
                <li>Optimizing cloud-based infrastructure and microservices deployed on AWS.</li>
            </ul>

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
    );
}