/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styles from './styles/selected_video.module.css';

const SelectedVideo = ({ video }) => (
  <section className={styles.selected}>
    <iframe
      className={styles.video}
      type='text/html'
      width='100%'
      height='500px'
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder='0'
      allowfullscreen
    ></iframe>
    <h2>{video.snippet.title}</h2>
    <h2>{video.snippet.channelTitle}</h2>
    <pre className={styles.videoDescription}>{video.snippet.description}</pre>
  </section>
);

export default SelectedVideo;
