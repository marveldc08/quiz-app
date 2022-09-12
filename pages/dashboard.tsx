import { Style } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import { PlayArrow } from "@mui/icons-material";
import { FaPlay, FaEye } from "react-icons/fa";
import Header from '../components/Header'
import styles from '../styles/dashboard.module.css'



function dashBoard() { 
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="the dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Header userName="Tomm Holland" />
        <div className={styles.content}>
          <div className={styles.instant}>
            <div className={styles.wrapper}>
              <div className={styles.img}>
                <img src="/images/quickplay.jpg" alt="quick play" />
              </div>
              <div className={styles.description}>
                <p>Quick start quiz, feel excited!!</p>
                <Link href={"/instant-play"}>
                  <Button variant="contained" size="large" className={styles.action}>
                    Play <PlayArrow sx={{ marginLeft: "6px" }} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.img}>
                <img src="/images/quickplay2.jpg" alt="challenge" />
              </div>
              <div className={styles.description}>
                <p>Paticipate in quiz competitions</p>
                <Button variant="contained" size="large" className={styles.action}>
                  Play  <PlayArrow sx={{ marginLeft: "6px" }} />
                </Button>
              </div>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.img}>
                <img src="/images/copy.jpg" alt="leader board" />
              </div>
              <div className={styles.description}>
                <p>View all those who have topped the Leader board!</p>
                <Button variant="contained" size="large" className={styles.action}>
                  View <FaEye />{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default dashBoard