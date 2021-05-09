import './home.css';
import { frontface } from '../datasource/databasefront'
import Card from './card'
import React, { useState} from 'react'
import { Input } from "@chakra-ui/react"
import AddModal from "./addModal"

function Home() {

  if ( JSON.parse( localStorage.getItem( 'frontface' ) ) == null ) {
    localStorage.setItem( 'frontface', JSON.stringify( [] ) )
  }
  const [searchtag, setsearchtag] = useState('');

  function handleChange4( event ) {
    setsearchtag( event.target.value )
  }

  function listWithTags( tag ) {
    let taggedFrontFace = JSON.parse( localStorage.getItem( 'frontface' ) )
    return taggedFrontFace.filter(face => face.tags === tag)
  }

  return (
    <div className="App">
      <h1 className="heading">Creating a FlashCard is now Easy</h1>
      <p>Total Number of Cards: {JSON.parse( localStorage.getItem( 'frontface' ) ).length}</p>
      <AddModal />
      <Input variant="filled" placeholder="Search by tagname" onChange={handleChange4} className="inp" />
      <div id="card-layout" className="layout">
        {( frontface === null) ? <div className = "prompt">No FlashCards Yet</div> : (frontface.length === 0) ? <div className = "prompt">No FlashCards Yet</div>: searchtag.length === 0 ? frontface.map( (front,idx) => (
          <Card className="cardbody" data-id={ idx } tag = {front.tags} key = {idx} fronttext={front.short_story} backtext = {front.short_ans} id = {idx} />
        ) ) : listWithTags( searchtag ).map( ( front, idx ) => (
          <Card className="cardbody" data-id={ idx } tag = {front.tags} key = {idx} fronttext={front.short_story} backtext = {front.short_ans} id = {idx} />
        ))}
      </div>
    </div>
  );
}

export default Home;
