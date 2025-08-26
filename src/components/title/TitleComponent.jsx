import './title.scss'

export default function TitleComponent(props) {
    return (
        <div class='page-title__container'>
            <h2 class='page-title__text'>{props.title}</h2>
        </div>
    )
}
