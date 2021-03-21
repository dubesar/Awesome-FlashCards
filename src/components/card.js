import './card.css'

export default function card( {fronttext, backtext} ) {
    // let id = props.frontface[0].id
    // let fronttext = props.frontface[0].short_story
    console.log( fronttext, backtext )
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {fronttext}
                </div>
                <div className="flip-card-back">
                    {backtext}
                </div>
            </div>
        </div>
    )
}
