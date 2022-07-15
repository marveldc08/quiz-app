import React from 'react';
import styled from 'styled-components'
import Image from 'next/image';
import { Avatar, Button } from '@mui/material';
import styles from '../styles/landingPage.module.css'
import Link from 'next/link';

function NavHead() {
  return (
    <Nav>
        <Logo>
          <img src={'/images/logo.png'}  />
        </Logo>
          
         <Link href={'/sign-in'}>
               <Button variant="contained" size="large" className={styles.signinButton}>
                    Sign in
               </Button>
         </Link>
    </Nav>
  )
}

export default NavHead

const Nav = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding-right: 1rem;
     padding-left: 1rem;
     height : 70px;
     width : 100%;
    border-bottom: 1px solid #c4c4c4f9;
`;
const Logo = styled.div`
     width: 90px;
     height: 60px;

     img{
          width: 100%;
          height: 100%;
     }
     /* small mobile :320px. */
     @media (min-width: 320px) and (max-width: 480px){
          &{
               width: 60px;
               height: 20px;
          }
     }
`
