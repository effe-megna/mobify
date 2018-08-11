import React from 'react';

import NavigationBar from "../../components/NavBar"
const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const client_id = "8f0ce6cc11104955a7504b845b0aa02a"

const Home = ({

}) => {

  return (
    <div style={{ margin: 40 }}>
      <NavigationBar />
      <h2>Homepage</h2>
      <a href={`${proxyUrl}https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=http://localhost:3000/`}>
        login with spotify
      </a>
    </div>
  )
}

export default Home;