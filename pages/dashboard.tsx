import { Style } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Head, Main } from 'next/document'
import React from 'react'
import { FaPlay, FaEye } from "react-icons/fa";
import Header from '../components/Header'
import styles from '../styles/dashboard.module.css'



function dashBoard() { 
  return (
    <div>
      <main className={styles.container}>
        <Header userName='Tomm Holland'/>
        <div className={styles.content}>
          <div className={styles.instant}>
            <div className={styles.wrapper}>
              <div className={styles.img}>
                <img src="/images/quickplay.jpg" alt="quick play" />
              </div>
              <div className={styles.description}>
                <p>Quick start quiz, feel excited!!</p>
                <Button>
                  Play <FaPlay />
                </Button>
              </div>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.img}>
                <img src="/images/quickplay2.jpg" alt="challenge" />
              </div>
              <div className={styles.description}>
                <p>Quick start quiz, feel excited!!</p>
                <Button>
                  Play <FaPlay />
                </Button>
              </div>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.img}>
                <img src="/images/copy.jpg" alt="leader board" />
              </div>
              <div className={styles.description}>
                <p>Quick start quiz, feel excited!!</p>
                <Button>View <FaEye /> </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default dashBoard