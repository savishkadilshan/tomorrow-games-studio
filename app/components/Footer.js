import React from 'react'
import styles from './Footer.module.css'
import { Box, Image } from '@chakra-ui/react'

export default function Footer() {
  return (
    <div className={styles.container}>
        <Box bgColor='#000000' h='100%' display='flex' justifyContent='center' alignItems='center' pt='10px' pb='10px' flexDirection='column'>
            <Image src='/studio-logo.svg' w='150px'/>
            <p>Copyright &copy; 2024 Tomorrow Games Studio </p>
        </Box>
    </div>
  )
}