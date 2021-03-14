import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import styles from '../../styles/Home.module.css';

const parallaxLayers = [
  {
    image: '',
    amount: 0.5,
  },
];

export default function Goodbye() {

  return (
    <div className="section">
      <ParallaxBanner
        className={styles.sectionContainer}
        layers={parallaxLayers}
      >
        <div className={styles.sectionContent}>
          <h1 className={styles.sectionTitle}>
            I'ts Been Fun!
          </h1>
        </div>
      </ParallaxBanner>
    </div>
  );
}
