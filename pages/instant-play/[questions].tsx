import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import styles from '../../styles/questions.module.css';
import { Button } from '@mui/material';
import { PlayArrow} from '@mui/icons-material';
import Swal from "sweetalert2";

const questionsArry = [
  {
    id: "1",
    questionTypeId: "1",
    question: "What is the name of the first Black President of the USA ?",
    answer: "Barak Obama",
    option1: "Olufsen Paul",
    option2: "Donald Trump",
    option3: "Dwain Johnson",
  },
  {
    id: "2",
    questionTypeId: "1",
    question: "wertyu",
    answer: "rtu",
    option1: "dfg",
    option2: "df",
    option3: "dftg",
  },
  {
    id: "3",
    questionTypeId: "1",
    question: "wertyu",
    answer: "rtu",
    option1: "dfg",
    option2: "df",
    option3: "dftg",
  },
  {
    id: "4",
    questionTypeId: "1",
    question: "wertyu",
    answer: "rtu",
    option1: "dfg",
    option2: "df",
    option3: "dftg",
  },
  {
    id: "5",
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
    const {questionType} = router.query
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [intervalSeconds, setIntervalSeconds] = useState<number>(1000)
    const [theQuestion, setTheQuestion] = useState<string>("");
   
    
    const handleStartQuiz = () =>{
      setIsStarted(true)
      setTheQuestion(questionsArry[0].question)
      
      //  setOptions(randomId);
      setTimeout(()=>{
         const random = Math.floor(1 + Math.random() * 4);
         const randomId = random.toString();
         console.log(randomId);
         const answer = document.getElementById(randomId) as HTMLDivElement;
         answer.innerHTML = questionsArry[0].answer
      },2000)
      
      
      let s = 0;
      let m = 1;
      const timerInterval = setInterval(timer, intervalSeconds);
      function timer(){
        if (s === 10 && m === 0) {
          console.log("here");
          let timeDiv = document.getElementById("timer") as HTMLDivElement;
          timeDiv.classList.remove('timer');
          timeDiv.classList.add("timeEnding");
       
        }

       if(m === 0 && s === 0) {
            clearInterval(timerInterval);
           Swal.fire({
             title: "Game Over!",
             html: "The timer has elapsed and the quiz has ended." +
                    '<p>Your score is: <b>234</b></p>',
             icon: "error",
            //  imageUrl: "/images/group.jpg",
            //  imageWidth: 400,
            //  imageHeight: 200,
            //  imageAlt: "Custom image",
             showCancelButton: true,
             confirmButtonColor: "#d33",
             cancelButtonColor: `var(--main-color)`,
             confirmButtonText: "Yes",
             cancelButtonText: "No",
           }).then((result) => {
             if (result.isConfirmed) {
               router.back();
             }
           });
          }else if (s > 0) {
            s--;
          }else if (s === 0) {
            m--
            s+=60;
          }
           setSeconds(s)
           setMinutes(m);
        }
        
    }
    const quitQuiz = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "If You quit now, You would lose your current progress!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: `var(--main-color)`,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          // setSeconds(0)
          // setMinutes(0)
          setIntervalSeconds(0)
          router.back();
        }
      });
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
              <p>Your quiz starts on the click of the button.</p>

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
                <div id="timer" className={styles.timer}>
                  <h3>
                    00:{minutes}:{seconds}
                  </h3>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  onClick={quitQuiz}
                  className={styles.quitOption}
                >
                  Quit
                </Button>
              </div>
              <div className={styles.questionSection}>{theQuestion}</div>
              <div className={styles.optionsSection}>
                <div id="1" className={styles.options}> oeyuowrouwoeu</div>
                <div id={"2"} className={styles.options}> wuoeyuowro</div>
                <div id={"3"} className={styles.options}> wrouwoeufoi</div>
                <div id={"4"} className={styles.options}> yuowrouwoeufoiasdf</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default questions