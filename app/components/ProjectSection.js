import React from 'react'
import styles from './ProjectSection.module.css'
import { Box, Image } from '@chakra-ui/react'

export default function ProjectSection() {
  return (
    <div className={styles.container}>
        <div className={styles.textSection}>
            <h1>Projects We've done</h1>
        </div>
        <div className={styles.showcaseSection}>
            <Box maxW='sm' borderRadius='6px' overflow='hidden'>
                <video autoPlay muted loop preload='auto'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/personalstorage-d06c5.appspot.com/o/tomorrow-games-studio%2Fgame-video-1.webm?alt=media&token=e14f67a1-d0d0-42d0-87d2-350c10ec0c84' type='video/webm'></source>
                </video>
                <p>Rise of The Ronin</p>
            </Box>
            <Box maxW='sm' borderRadius='6px' overflow='hidden'>
                <video autoPlay muted loop preload='auto'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/personalstorage-d06c5.appspot.com/o/tomorrow-games-studio%2Fgame-video-2.webm?alt=media&token=b168c55d-c7db-4e6e-b183-f37d1c34560e' type='video/webm'></source>
                </video>
                <p>Assassin's Creed: Shadows</p>
            </Box>
            <Box maxW='sm' borderRadius='6px' overflow='hidden'>
                <video autoPlay muted loop preload='auto'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/personalstorage-d06c5.appspot.com/o/tomorrow-games-studio%2Fgame-video-3.webm?alt=media&token=78b37814-c540-47e9-a6fa-582a5460da24' type='video/webm'></source>
                </video>
                <p>South Park: Snow Day!</p>
            </Box>
        </div>
        <div className={styles.upperTextSection}>
            <p>Browse our portfolio to see the projects that define us.<br />
            We pride ourselves on delivering high-quality games that resonate with players.</p>
        </div>
        <div className={styles.circleElement}>
            <Image src='/circle-bottom-pencile-draw-h150.svg'/>
        </div>
    </div>
  )
}
