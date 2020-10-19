import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './app.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCYDQM2sTPSYaXL6l-VNB-4j8pd8yEieOM',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }, []);
  return <h1>hello :)</h1>;
}

export default App;
