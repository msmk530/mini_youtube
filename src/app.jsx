import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import styles from './app.module.css';
import Header from './components/Header/header';
import SelectedVideo from './components/SelectedVideo/selected_video';
import VideoList from './components/VideoList/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setSelected(null);
        });
    },
    [youtube],
  );

  const selectVideo = (video) => {
    setSelected(video);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <div className={styles.content}>
        {selected && (
          <div className={styles.selected}>
            <SelectedVideo video={selected} />
          </div>
        )}
        <div className={styles.videoList}>
          <VideoList
            videos={videos}
            onSelectVideo={selectVideo}
            display={selected !== null ? 'list' : 'grid'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
