import './link.scss'

export default function LinkComponent(props) {
    return (
        <a class='link' href={props.href}>{props.title} ↗</a>
    )
}
