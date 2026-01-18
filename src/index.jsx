import './style.scss';
import './print.css';
import LeftContainer from "./containers/left-container/LeftContainer.jsx";
import RightContainer from "./containers/right-container/RightContainer.jsx";

export default function App() {
    return (
        <>
            <div class='resume resume__container'>
                <LeftContainer/>
                <RightContainer/>
            </div>

        </>
    );
}
