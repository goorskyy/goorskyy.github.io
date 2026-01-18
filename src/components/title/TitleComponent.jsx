import './title.scss'

export default function TitleComponent(props) {
    return (
        <>
            <h2 class='page-title__text'>{props.title}</h2>
            <p class='page-title__sub-text'>{props.subText}</p>
        </>
    )
}
