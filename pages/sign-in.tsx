import React from 'react'
import Head from 'next/head'
import { Alert, AlertTitle, Button, FormControl, Input, InputLabel, Stack, TextField } from "@mui/material";
import { BsArrowLeftCircle } from "react-icons/bs";
import styles from '../styles/signUp.module.css'
import Link from 'next/link';
import Script from 'next/script';

 var window :  Window & typeof globalThis;
 
function signIn() {
    function decodeJwtResponse(token: string) {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    }
   
 
  return (
    <div>
      <Head>
        <title>Login Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width"></meta>
        {/* <meta
          name="google-signin-client_id"
          content="406812739349-rp7h1kf809crkrt1db5glutol4vg0ggt.apps.googleusercontent.com"
        ></meta> */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        ></link>
        <Script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></Script>
      </Head>

      <main className={styles.container}>
        <div className={styles.top}>
          <Link href={"/"}>
            <BsArrowLeftCircle className={styles.top_icon} />
          </Link>
          <div>
            <p className={styles.topText}>
              <span>Don't have an account?</span>
              <span>
                <Link href={"/sign-up"}>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.simg}>
            <img src="/images/login.svg" />
          </div>
          <div className={styles.sform}>
            {/* <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
              </Alert>

              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
            </Stack> */}
            <form action="">
              <div className={styles.group}>
                <InputLabel htmlFor="email">Email </InputLabel>
                <input type="email" name="" id="email" required />
              </div>

              <div className={styles.group}>
                <InputLabel htmlFor="email"> Password</InputLabel>
                <input type="password" name="" id="" required />
              </div>
              <Button
                variant="contained"
                size="large"
                sx={{ "margin-top": 20 }}
                className={styles.signupButton}
              >
                Log In
              </Button>
            </form>
            <div className={styles.fpassword}>
              <Link href={"#"}>
                <p>Forgot Password?</p>
              </Link>
            </div>
            <div className={styles.partition}>
              <div>
                <hr /> <span>OR</span> <hr />
              </div>
            </div>
            <div className={styles.google}>
              <Link href="http://localhost:5000/redirect/google">
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ "margin-top": 20, width: 200 }}
                  className={(styles.gButton, "g_id_signin")}
                >
                  <img
                    src="/images/g-logo.png"
                    alt="google logo"
                    width={50}
                    height={35}
                  />
                  Continue with Google
                </Button>
              </Link>

              {/* <div
                id="g_id_onload"
                data-client_id="406812739349-rp7h1kf809crkrt1db5glutol4vg0ggt.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-login_uri="http://localhost:5000"
                data-auto_prompt="false"
               
              ></div> */}

              {/* <div
                className="g_id_signin"
                data-type="standard"
                data-shape="pill"
                data-theme="outline"
                data-text="continue_with"
                data-size="large"
                data-locale="en-GB"
                data-logo_alignment="center"
                data-width="400px"
                
              ></div> */}

              {/* <div className="g-signin2" data-onsuccess="onSignIn">
              </div> */}
            </div>

            {/* <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input fullWidth id="my-input" aria-describedby="my-helper-text" className={styles.lnt} />
            </FormControl> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default signIn