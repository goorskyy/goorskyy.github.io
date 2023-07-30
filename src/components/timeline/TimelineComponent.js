import './timeline.scss'

export default function TimelineComponent(props) {
    return (
        <div class='timeline__container'>
            <div class='flex__space-between'>
                <span class='timeline__title'>{props.title}</span>
                <span class='timeline__location'>{props.location}</span>
            </div>
                <p class='timeline__period'>{props.startYear} - {props.endYear}</p>
                <p class='timeline__description'>{props.description}</p>
            
        </div>
    )
}
