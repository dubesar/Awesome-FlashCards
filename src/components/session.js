import { Button } from "@chakra-ui/react"
import './session.css'

export default function Session() {

    function getRandomInt() {
        let max = JSON.parse( localStorage.getItem( 'frontface' ) ).length
        let rand = Math.floor( Math.random() * Math.floor( max ) );
        let arr = JSON.parse( localStorage.getItem( 'frontface' ) )
        return arr[rand].short_story
    }

    function reload() {
        window.location.reload();
    }

    return (
        <div className="grid-sys">
            <div className="test-card">
                <h1 className = "qtext">{getRandomInt()}</h1>
            </div>
            <div className="yes-no">
                <Button onClick = {reload} m = {4}>Generate Random</Button>
            </div>
        </div>
    )
}