import TitleComponent from './components/title/TitleComponent';
import './style';
import SectionComponent from "./components/section/SectionComponent";
import TimelineComponent from './components/timeline/TimelineComponent';
import LinkComponent from './components/link/LinkComponent';
import ScoreComponent from './components/score/ScoreComponent';

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
                    <LinkComponent href='https://www.linkedin.com/in/mgorskyy/' title='Linkedin' />
                    <SectionComponent title='Skills' ></SectionComponent>
                    <p class='label'>Java</p>
                    <ScoreComponent score='3' />
                    <p class='label'>Spring</p>
                    <ScoreComponent score='3' />
                    <p class='label'>Javascript</p>
                    <ScoreComponent score='3' />
                    <p class='label'>HTML & CSS</p>
                    <ScoreComponent score='3' />
                    <p class='label'>Docker</p>
                    <ScoreComponent score='2' />
                    <p class='label'>SQL</p>
                    <ScoreComponent score='2' />
                    <p class='label'>Angular 2+/ReactJS</p>
                    <ScoreComponent score='2' />
                    <SectionComponent title='Languages' ></SectionComponent>
                    <p class='label'>Polish</p>
                    <ScoreComponent score='5' />
                    <p class='label'>English</p>
                    <ScoreComponent score='4' />

                </div>
                <div class='resume__right-container'>
                    <SectionComponent title='About me' />
                    <p>I'm a software developer who believes that understanding the business needs is essential to create scaleable software.</p>
                    <SectionComponent title='Employment history' />
                    <TimelineComponent title='Software Engineer, Onewelcome' startYear='2018' endYear='current' location='Gdańsk' />
                    <p>I was working with a product operating in the IAM space where I was mostly responsible for the engineering tasks,
                        such as creating new features, testing, and styling.
                    </p>
                    <p>
                        For the first two years, I worked closely with the customer implementing the designs.
                        I was also making demonstrations of our customizations.
                    </p>
                    <p> After that, I moved to an R&D position where I was creating features based on business requirements.
                        In addition to that, I was leading a frontend architecture meeting.
                    </p>
                    <TimelineComponent title='Junior Java Developer, Solwit' startYear='2016' endYear='2018' location='Gdańsk'></TimelineComponent>
                    <SectionComponent title='Education' ></SectionComponent>
                    <TimelineComponent title='Masters`s, University of Gdansk' startYear='2013' endYear='2018' location='Gdańsk'></TimelineComponent>
                </div>
            </div>

        </>
    );
}
