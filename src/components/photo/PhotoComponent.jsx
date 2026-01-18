import './photo.scss'

export default function PhotoComponent() {
    return (
        <div class={'photo__container'}>
            <img class={'photo'} width={175} height={175} src={'/assets/portrait.jpg'}  alt={"portrait of Michał Górski"}></img>
        </div>
    )
}
