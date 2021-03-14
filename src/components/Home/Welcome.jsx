import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import styles from '../../styles/Home.module.css';

const parallaxLayers = (videoRef) => [{
  image: './images/welcome.jpg',
  amount: 0.5,
  ...(true && {
    children: (
      <video
        data-src={'./videos/welcome.webm'}
        data-keepplaying
        loop
        muted
        width={'100%'}
        height={'100%'}
        style={{ objectFit: 'cover' }}
        type="video/webm"
        ref={videoRef}
      />
    )
  }),
}];

export default function Welcome(props) {
  const { welcomeVideoRef } = props;

  return (
    <div id={styles.intro} className="section">
      <ParallaxBanner
        className={styles.sectionContainer}
        layers={parallaxLayers(welcomeVideoRef)}
      >
        <div className={`${styles.sectionContent} ${styles.flexColumn}`}>
          <h1 className={styles.sectionTitle}>
            Hello There!
          </h1>
          <h1 className={styles.sectionTitle} style={{ fontSize: '3rem', fontStyle: 'italic' }}>
            Muhammad Ramadhan
          </h1>
          <h1 className={styles.sectionTitle}>
            Here to Help.
          </h1>
        </div>
      </ParallaxBanner>
    </div>
  );
}
