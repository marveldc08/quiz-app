import { Style } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Head, Main } from 'next/document'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/dashboard.module.css'



function dashBoard() {
  return (
    <div>
     
      <main className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.instant}></div>
          <div className={styles.challenge}></div>
        </div>
      </main>
    </div>
  );
}

export default dashBoard