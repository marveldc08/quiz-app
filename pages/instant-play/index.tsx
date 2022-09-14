import { Button } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import Header from '../../components/Header';
import styles from "../../styles/instantPlay.module.css";

const questionCategory = [
  {
    id: "1",
    name: "Math",
    photoUrl: "/images/copy.jpg",
    description: "solve interesting math questions on time",
    slog: "math",
  },
  {
    id: "2",
    name: "English",
    photoUrl: "/images/quickplay2.jpg",
    description: "answer english quiz questions briliantly",
    slog: "english",
  },
  {
    id: "3",
    name: "History",
    photoUrl: "/images/group.jpg",
    description: "prove your knowledge on history while timed",
    slog: "history",
  },
  {
    id: "4",
    name: "General",
    photoUrl: "/images/laptopMan.jpg",
    description: "test your quiz power on general questions",
    slog: "general",
  },
];
 const isServer = typeof window === "undefined";
function instantPlayIndex() {

  return (
    <div>
      <Head>
        <title>Instant play | index</title>
        <meta name="description" content="quiz category page" />
        {/* <meta name="viewport" content="width=device-width"></meta> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Header userName="Tomm Holland" />
        <div className={styles.content}>
          <div className={styles.instant}>
            {questionCategory.map((category) => (
              <Link href={`instant-play/${category.slog}`}>
                <div className={styles.wrapper} key={category.slog} >
                  <div className={styles.img}>
                    <img src={category.photoUrl} alt="challenge" />
                  </div>
                  <div className={styles.description}>
                    <h4>{category.name}</h4>
                    <p>{category.description}</p>

                    {/* <Button
                      variant="contained"
                      onClick={() => {
                        loadQuestions(category.id);
                      }}
                    >
                      {" "}
                      play
                    </Button> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default instantPlayIndex;
