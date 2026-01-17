import TitleComponent from './components/title/TitleComponent';
import './style.scss';
import LeftContainer from "./containers/left-container/LeftContainer.jsx";
import RightContainer from "./containers/right-container/RightContainer.jsx";

export default function App() {
    return (
        <>
            <div class='resume resume__container'>
                <TitleComponent title="Michał Górski"></TitleComponent>
                <LeftContainer/>
                <RightContainer/>
            </div>

        </>
    );
}
