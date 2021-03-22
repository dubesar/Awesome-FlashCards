import './card.css'

export default function card( {fronttext, backtext, id} ) {
    // let id = props.frontface[0].id
    // let fronttext = props.frontface[0].short_story
    console.log(id)
    function deleteCard(event) {
        let id = event.target.id;
        let frontface = JSON.parse( localStorage.getItem( 'frontface' ) )
        frontface.splice( id, 1 )
        localStorage.setItem( 'frontface', JSON.stringify( frontface ) )
        window.location.reload();
    }

    return (
        <div className="flip-card cardbody">
            <div className="flip-card-inner">
                <div className="delete">
                    <img onClick={deleteCard} id={ id } className = "delete-button" src="https://thumbs.dreamstime.com/b/delete-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133760264.jpg" width="30px" height="30px" />
                </div>
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
