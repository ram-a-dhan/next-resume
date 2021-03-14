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
  slide1: { 'data-anchor': 'project1' },
  slide2: { 'data-anchor': 'project2' },
  slide3: { 'data-anchor': 'others' },
};

export default function Projects() {
  return (
    <div className="section">
      <ParallaxBanner
        className={styles.sectionContainer}
        layers={parallaxLayers}
      >
        <div className="slide">
          <div className={styles.sectionContent}>
            <h1 className={styles.sectionTitle}>
              What I Made
            </h1>
          </div>
        </div>
        <div className="slide" {...slideAnchors.slide1}>
          <div className={styles.sectionContent}>
            <h3 className={styles.slideTitle}>
              Project 1
            </h3>
          </div>
        </div>
        <div className="slide" {...slideAnchors.slide2}>
          <div className={styles.sectionContent}>
            <h3 className={styles.slideTitle}>
              Project 2
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
