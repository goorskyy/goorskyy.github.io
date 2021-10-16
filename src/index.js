import TitleComponent from './components/title/TitleComponent';
import './style';
import SectionComponent from "./components/section/SectionComponent";

export default function App() {
    return (
        <>
            <TitleComponent title="Michał Górski"></TitleComponent>
            <SectionComponent title="New section"></SectionComponent>
        </>
    );
}
