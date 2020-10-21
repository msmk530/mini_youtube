import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import styles from './app.module.css';
import Header from './components/Header/header';
import SelectedVideo from './components/SelectedVideo/selected_video';
import VideoList from './components/VideoList/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  const selectVideo = (video) => {
    setSelected(video);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      {selected && <SelectedVideo video={selected} />}
      <VideoList videos={videos} onSelectVideo={selectVideo} />
    </div>
  );
}

export default App;
