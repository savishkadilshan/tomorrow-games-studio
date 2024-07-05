import React from 'react'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
        <video autoPlay muted loop preload='auto' className={styles.videoBackground}>
            <source src='https://firebasestorage.googleapis.com/v0/b/personalstorage-d06c5.appspot.com/o/tomorrow-games-studio%2FHero-Video.webm?alt=media&token=93231bdb-0156-40f3-b6f5-332aa3c048ab' type='video/webm'></source>
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
            <h1>[ Welcome to Immersive ]</h1>
            <p>Discover the magic of immersive gaming experiences.<br />
            At 'Tomorrow Games', we create worlds where fantasy meets reality.</p>
        </div>
    </div>
  )
}
