import './score.scss'

export default function ScoreComponent(props) {

    const array = [];

    for (let i = 0; i < 5; i++) {
        const active = i < props.score ? 'score--active' : '';
        const classes = `score ${active}`
        array.push(<span class={classes}></span>)
    }
    return (
        array
    )
}
