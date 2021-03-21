import './App.css';
import { frontface } from './datasource/databasefront'
import Card from './components/card'
import React, { useState } from 'react'
import { Input } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"

function App() {
  if ( JSON.parse( localStorage.getItem( 'frontface' ) ) == null ) {
    localStorage.setItem( 'frontface', JSON.stringify( [] ) )
  }
  const [frontext, setfronttext] = useState( '' )
  const [backtext, setbacktext] = useState( '' )

  function handleChange1(event) {
    setfronttext( event.target.value );
  }
  function handleChange2(event) {
    setbacktext( event.target.value );
  }
  function handleSubmit( event ) {
    let frontface = JSON.parse(localStorage.getItem('frontface'))
    frontface.push( {
      id: frontface.length + 1,
      short_story: frontext,
      short_ans: backtext,
    } )
    localStorage.setItem( 'frontface', JSON.stringify( frontface ) )
    console.log(JSON.parse(localStorage.getItem('frontface')))
    console.log( frontface )
    window.location.reload();
  }
  return (
    <div className="App">
      <h1 className = "heading">Creating a FlashCard is now Easy</h1>
      <div className="inp-section">
        <Input variant="filled" placeholder="Type frontface short text" onChange={handleChange1} className = "inp" />
        <Input variant="filled" placeholder="Type backface short text" onChange={handleChange2} className="inp" />
      </div>
      <Button type="submit" mb = {4} onClick={ handleSubmit } colorScheme="teal" size="md">Submit</Button>
      <div id="card-layout" className="layout">
        {( frontface === null) ? <div className = "prompt">No FlashCards Yet</div> : (frontface.length === 0) ? <div className = "prompt">No FlashCards Yet</div>: frontface.map( front => (
          <Card key = {front.id} fronttext={front.short_story} backtext = {front.short_ans} />
        ) )}
      </div>
    </div>
  );
}

export default App;
