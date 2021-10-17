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
              <LinkComponent href='https://github.com/goorskyy' title='GitHub'/>
              <LinkComponent href='https://www.linkedin.com/in/mgorskyy/' title='Linkedin'/>
              <SectionComponent title='Skills' ></SectionComponent>
              <p class='label'>Java</p>
              <ScoreComponent score='3'/>
              <SectionComponent title='Languages' ></SectionComponent>
            </div>
            <div class='resume__right-container'>
            <SectionComponent title='Employment history' ></SectionComponent>
            <TimelineComponent title='Solwit' startYear='2016' endYear='2018' location='Gdańsk'></TimelineComponent>
            <SectionComponent title='Education' ></SectionComponent>
            <TimelineComponent title='Masters`s, University of Gdansk' startYear='2013' endYear='2018' location='Gdańsk'></TimelineComponent>
            </div>
        </div>
        
        </>
    );
}
