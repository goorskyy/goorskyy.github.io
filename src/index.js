import TitleComponent from './components/title/TitleComponent';
import './style';
import SectionComponent from "./components/section/SectionComponent";
import TimelineComponent from './components/timeline/TimelineComponent';

export default function App() {
    return (
        <>
            <TitleComponent title="Michał Górski"></TitleComponent>
            <SectionComponent title='New section' ></SectionComponent>
            <TimelineComponent title='Oxford' startYear='2016' endYear='2018' location='Gdańsk'></TimelineComponent>
        </>
    );
}
