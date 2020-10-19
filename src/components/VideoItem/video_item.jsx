import React from 'react';
import styles from './styles/video_item.module.css';

const VideoItem = ({ video: { snippet } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt='video thumbnail'
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
