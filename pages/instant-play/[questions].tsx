import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import styles from '../../styles/questions.module.css';
import { Button } from '@mui/material';
import { PlayArrow, SubtitlesOutlined } from '@mui/icons-material';

const qustions = [
  {
    id: "1",
    questionTypeId: "1",
    question:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam fugit blanditiis nulla     nihil dolor repellat, tempora neque debitis fugiat qui doloribus perferendis quae dicta quos tenetur aspernatur voluptates, architecto non.",
    answer: "True",
    option1: "Olufsen",
    option2: "Wrong",
    option3: "The Wronger",
  },
  {
    id: "1",
    questionTypeId: "1",
    question: "wertyu",
    answer: "rtu",
    option1: "dfg",
    option2: "df",
    option3: "dftg",
  },
  {
    id: "1",
    questionTypeId: "1",
    question: "wertyu",
    answer: "rtu",
    option1: "dfg",
    option2: "df",
    option3: "dftg",
  },
  {
    id: "1",
    questionTypeId: "1",
    question: "wertyu",
    answer: "rtu",
    option1: "dfg",
    option2: "df",
    option3: "dftg",
  },
  {
    id: "1",
    questionTypeId: "1",
    question: "wertyu",
    answer: "rtu",
    option1: "dfg",
    option2: "df",
    option3: "dftg",
  },
];

function questions() {
    const router = useRouter();
    const {questions} = router.query
    
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const handleStartQuiz = () =>{
        setIsStarted(true)
    }
  return (
    <div>
      <Head>
        <title>Instant play | index</title>
        <meta name="description" content="quiz category page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        {isStarted === false ? (
          <div className={styles.land}>
            <div className={styles.landWrap}>
              <h2>Your quiz starts on the click of the button.</h2>
              <Button
                variant="contained"
                size="large"
                className={styles.playBtn}
                onClick={handleStartQuiz}
              >
                <PlayArrow sx={{ fontSize: "4rem" }} />
              </Button>
              <h2>Let's Go... 🚀</h2>
            </div>
          </div>
        ) : (
          <div className={styles.questionWrap}>
            <div className={styles.content}>
              <div className={styles.top}>
                <div className={styles.points}>
                  <h4>122 +</h4>
                </div>
                <div className={styles.timer}>
                    <h3>20:04:00</h3>
                </div>
                <Button variant='contained' size='large' className={styles.quitOption}>Quit</Button>
              </div>
              <div className={styles.questionSection}>
                ehdhoidupsdo Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Commodi deleniti cumque reiciendis aut minus! Eum
                molestias harum impedit odit provident assumenda dolores dolore.
                Nulla nesciunt laboriosam neque ab alias aliquid.
              </div>
              <div className={styles.optionsSection}>
                <div className={styles.options}>A: oeyuowrouwoeu</div>
                <div className={styles.options}>B: wuoeyuowro</div>
                <div className={styles.options}>C: wrouwoeufoi</div>
                <div className={styles.options}>D: yuowrouwoeufoiasdf</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default questions