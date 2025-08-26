import './photo.scss'

export default function PhotoComponent() {
    return (
        <div class={'photo__container'}>
            <img class={'photo'} width={150} height={150} src={'/assets/portrait.jpg'}  alt={"portrait of Michał Górski"}></img>
        </div>
    )
}
