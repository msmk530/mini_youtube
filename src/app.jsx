import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import styles from './app.module.css';
import Header from './components/Header/header';
import VideoList from './components/VideoList/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Header name={'Youtube'} onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
