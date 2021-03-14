import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import styles from '../../styles/Home.module.css';

const parallaxLayers = [
  {
    image: '',
    amount: 0.5,
  },
];

export default function Experience() {

  return (
    <div className="section">
      <ParallaxBanner
        className={styles.sectionContainer}
        layers={parallaxLayers}
      >
        <div className={styles.sectionContent}>
          <h1 className={styles.sectionTitle}>
            Where I've Been
          </h1>
        </div>
      </ParallaxBanner>
    </div>
  );
}
