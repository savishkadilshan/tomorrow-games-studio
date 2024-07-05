import React from 'react'
import styles from './Header.module.css'
import { Box, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <div>
        <Box bg='#000000' w='100%' pl='24px' pr='24px' pt='12px' pb='12px'>
            <Image className={styles.animation} src='/studio-logo.svg' alt='studio-logo' w='130px' />
        </Box>
    </div>
  )
}
