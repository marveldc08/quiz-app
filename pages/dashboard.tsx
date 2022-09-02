import { Style } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import Head from 'next/head'
import React from 'react'
import { FaPlay, FaEye } from "react-icons/fa";
import Header from '../components/Header'
import styles from '../styles/dashboard.module.css'



function dashBoard() { 
  // if (auth2.isSignedIn.get()) {
  //   var profile = auth2.currentUser.get().getBasicProfile();
  //   console.log("ID: " + profile.getId());
  //   console.log("Full Name: " + profile.getName());
  //   console.log("Given Name: " + profile.getGivenName());
  //   console.log("Family Name: " + profile.getFamilyName());
  //   console.log("Image URL: " + profile.getImageUrl());
  //   console.log("Email: " + profile.getEmail());
  // }
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="the dashboard page" />
        {/* <meta name="viewport" content="width=device-width"></meta> */}
      
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
                <Button>
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