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
  const [tag, settag] = useState( '' );
  const [search, setsearch] = useState('');

  function handleChange1(event) {
    setfronttext( event.target.value );
  }
  function handleChange2(event) {
    setbacktext( event.target.value );
  }
  function handleChange3( event ) {
    settag( event.target.value );
  }
  function handleChange4( event ) {
    setsearch( event.target.value )
  }
  function handleSubmit( event ) {
    let frontface = JSON.parse( localStorage.getItem( 'frontface' ) )
    if ( frontface.length === 0 ) {
      frontface.push( {
        id: frontface.length + 1,
        short_story: frontext,
        short_ans: backtext,
        tags: tag
      } )
    }
    else {
      frontface.push( {
        id: frontface[frontface.length-1].id+1,
        short_story: frontext,
        short_ans: backtext,
        tags: tag
      } )
    }
    localStorage.setItem( 'frontface', JSON.stringify( frontface ) )
    console.log(JSON.parse(localStorage.getItem('frontface')))
    console.log( frontface )
    window.location.reload();
  }
  return (
    <div className="App">
      <h1 className="heading">Creating a FlashCard is now Easy</h1>
      <p>Total Number of Cards: { JSON.parse(localStorage.getItem('frontface')).length }</p>
      <div className="inp-section">
        <Input variant="filled" placeholder="Type frontface short text" onChange={handleChange1} className = "inp" />
        <Input variant="filled" placeholder="Type backface short text" onChange={handleChange2} className="inp" />
        <Input variant="filled" placeholder="Tag" onChange={handleChange3} className="inp" />
      </div>
      <Button type="submit" mb={4} onClick={handleSubmit} colorScheme="teal" size="md">Submit</Button>
      {/* <Input variant="filled" placeholder="Search by tagname" onChange={handleChange4} className="inp" /> */}
      <div id="card-layout" className="layout">
        {( frontface === null) ? <div className = "prompt">No FlashCards Yet</div> : (frontface.length === 0) ? <div className = "prompt">No FlashCards Yet</div>: frontface.map( (front,idx) => (
          <Card className="cardbody" data-id={ idx } searchTag = {search} tag = {front.tags} key = {idx} fronttext={front.short_story} backtext = {front.short_ans} id = {idx} />
        ) )}
      </div>
    </div>
  );
}

export default App;
