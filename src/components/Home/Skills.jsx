import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import styles from '../../styles/Home.module.css';

const parallaxLayers = [
  {
    image: '',
    amount: 0.5,
  },
];

const slideAnchors = {
  slide1: { 'data-anchor': 'backend' },
  slide2: { 'data-anchor': 'frontend' },
  slide3: { 'data-anchor': 'others' },
};

export default function Skills() {
  return (
    <div className="section">
      <ParallaxBanner
        className={styles.sectionContainer}
        layers={parallaxLayers}
      >
        <div className="slide">
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionTitle}>
              What I Can Do
            </h1>
          </div>
        </div>
        <div className="slide" {...slideAnchors.slide1}>
          <div className={styles.sectionContent}>
            <h3 className={styles.slideTitle}>
              Back-End
            </h3>
          </div>
        </div>
        <div className="slide" {...slideAnchors.slide2}>
          <div className={styles.sectionContent}>
            <h3 className={styles.slideTitle}>
              Front-End
            </h3>
          </div>
        </div>
        <div className="slide" {...slideAnchors.slide3}>
          <div className={styles.sectionContent}>
            <h3 className={styles.slideTitle}>
              And many more!
            </h3>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
}
