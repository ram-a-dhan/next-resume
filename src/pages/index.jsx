import React, { useState, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {
  Navbar,
  Welcome,
  Profile,
  Skills,
  Education,
  Experience,
  Projects,
  Goodbye,
} from '../components/Home';
import HomeStyles from '../styles/Home.module.css';
import NavbarStyles from '../styles/Navbar.module.css';
import HtmlHead from '../components/HtmlHead';

const styles = { ...HomeStyles, ...NavbarStyles };

const sectionsColor = (new Array(7)).fill('var(--background-color)');

const anchors = [
  'welcome',
  'profile',
  'skills',
  'education',
  'experience',
  'projects',
  'goodbye',
];

const fullpageOptions = {
  menu: `#${styles.navbar}`,
  anchors,
  sectionsColor,
  navigation: true,
  slidesNavigation: true,
  controlArrows: true,
  scrollBar: true,
  scrollHorizontally: true, //
  continuousHorizontal: true, //
  // continuousVertical: true,
  // loopTop: true,
  // loopBottom: true,
  animateAnchor: false,
  resetSliders: true, //
  dragAndMove: true, //
};

export default function Home() {
  // for hiding license key error message
  // setTimeout(() => console.clear(), 0);
  const [tabTitle, setTabTitle] = useState('');

  const welcomeVideo = {
    ref: useRef(null),
    play: () => welcomeVideo.ref.current.play(),
    pause: () => welcomeVideo.ref.current.pause(),
  };

  return (
    <div className={styles.Home}>
      <HtmlHead
        title={tabTitle}
        description={'WEBDEV'}
        keywords={['HTML', 'CSS', 'JS']}
      />
      <Navbar anchors={anchors} />
      <ReactFullpage
        {...fullpageOptions}
        render={() => (
          <ReactFullpage.Wrapper>
            <Welcome welcomeVideoRef={welcomeVideo.ref} />
            <Profile />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Goodbye />
          </ReactFullpage.Wrapper>
        )}
        afterLoad={(prev, next, dir, fullpageApi) => {
          // console.log('afterLoad', { prev, next, dir });
          setTabTitle(next.anchor);
          if (
            prev.anchor === next.anchor
            && next.anchor === 'welcome'
          ) {
            welcomeVideo.play();
          }
          if (next.anchor !== 'welcome') {
            welcomeVideo.pause();
          }
        }}
        onLeave={(prev, next, dir) => {
          // console.log('onLeave', { prev, next, dir });
          if (next.anchor === 'welcome') {
            welcomeVideo.play();
          }
        }}
      />
    </div>
  );
}
