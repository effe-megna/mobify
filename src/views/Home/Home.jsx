import React from 'react';

const Home = ({

}) => {

  const redirectToPrompt = () => {
    const client_id = "8f0ce6cc11104955a7504b845b0aa02a"
    fetch(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=http://localhost:3000/`).then(res => {
        console.log(res)
      })
  }

  return (
    <div style={{ margin: 40 }}>
      <h2>Homepage</h2>
      <button onClick={redirectToPrompt}>
        login with spotify
      </button>
    </div>
  )
}

export default Home;