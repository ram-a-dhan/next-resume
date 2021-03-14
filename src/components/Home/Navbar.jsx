import React from 'react';
import styles from '../../styles/Navbar.module.css';

export default function Navbar(props) {
  const { anchors } = props;

  const dataMenuAnchors = anchors.map((anchor) => {
    return { 'data-menuanchor': anchor };
  });

  return (
    <>
      <div id={styles.navbarShadow} />
      <ul id={styles.navbar}>
        {dataMenuAnchors.map((datum, index) => (
          <li key={index} {...datum}>
            <a href={`#${anchors[index]}`}>
              {anchors[index].toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
