import './chip.scss'

export default function ChipComponent(props) {
    let chips = [];

    props.titles.forEach(element => {
        chips.push(<span class='chip'>{element}</span>);
    });

    return (
        chips
    )
}
