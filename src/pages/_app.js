import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.css';
import '../styles/FullpageMod.css';
import '../styles/ReactScrollParallaxMod.css';
// import '../styles/Navbar.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
