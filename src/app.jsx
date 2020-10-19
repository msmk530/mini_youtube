import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import * as config from './config';

import styles from './app.module.css';
import Header from './components/Header/header';
import VideoList from './components/VideoList/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${config.YOUTUBE_API_KEY}`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideos(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <div className={styles.app}>
      <Header name={'Youtube'} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
