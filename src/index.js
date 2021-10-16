import { render } from 'preact';
import PageTitleComponent from './components/page-title/PageTitleComponent';
import './style';

export default function App() {
		render(<PageTitleComponent title="Michał Górski"></PageTitleComponent>, document.body);
}
