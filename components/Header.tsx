import React from 'react'

import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { FaUserCircle, FaPlay } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import { MdCreate } from "react-icons/md";
import { BsBarChartLineFill } from "react-icons/bs";
import { AiTwotoneSetting, AiOutlineClose } from "react-icons/ai";
import MenuIcon from "@mui/icons-material/Menu";
import styled from 'styled-components';
import styles from  "./Header.module.css"
import Link from 'next/link';

const drawerWidth = 240;

interface avaterProp {
  userName: string;
}
///for Avatar start here
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
//Avarat function ends here


function head({userName}:avaterProp) {
 const [mobileOpen, setMobileOpen] = React.useState(false);

 const handleDrawerToggle = () => {
   setMobileOpen(!mobileOpen);
 };
 const handleCloseDrawer = () => {
    setMobileOpen(mobileOpen);
 }

 const drawer = (
   <div>
     {/* <Toolbar /> */}
     <div className={styles.close}>
       <IconButton
         color="inherit"
         aria-label="open drawer"
         edge="end"
         onClick={handleDrawerToggle}
         sx={{ display: { sm: "block" } }}
       >
         <AiOutlineClose />
       </IconButton>
     </div>
     <Divider />
     <List>
       <div className={styles.profile}>
         <Avatar
           {...stringAvatar(userName)}
           sx={{ width: 56, height: 56, background: `var(--main-color)` }}
         />
       </div>

       <ListItem key="My Profile" disablePadding>
         <ListItemButton className={styles.li}>
           <ListItemIcon className={styles.li_Icon}>
             <FaUserCircle />
           </ListItemIcon>
           <ListItemText primary="My Profile" />
         </ListItemButton>
       </ListItem>
       <ListItem key="Instant Play" disablePadding>
         <ListItemButton className={styles.li}>
           <ListItemIcon className={styles.li_Icon}>
             <FaPlay />
           </ListItemIcon>
           <ListItemText primary="Instant Play" />
         </ListItemButton>
       </ListItem>
       <ListItem key="Quiz Challenge" disablePadding>
         <ListItemButton className={styles.li}>
           <ListItemIcon className={styles.li_Icon}>
             <GiTrophy />
           </ListItemIcon>
           <ListItemText primary="Quiz Challenge" />
         </ListItemButton>
       </ListItem>
       <ListItem key="Host Challenge" disablePadding>
         <ListItemButton className={styles.li}>
           <ListItemIcon className={styles.li_Icon}>
             <MdCreate />
           </ListItemIcon>
           <ListItemText primary="Host Challenge" />
         </ListItemButton>
       </ListItem>
       <ListItem key="Leader Board" disablePadding>
         <ListItemButton className={styles.li}>
           <ListItemIcon className={styles.li_Icon}>
             <BsBarChartLineFill />
           </ListItemIcon>
           <ListItemText primary="Leader Board" />
         </ListItemButton>
       </ListItem>
       <ListItem key={"Settings"} disablePadding>
         <ListItemButton className={styles.li}>
           <ListItemIcon className={styles.li_Icon}>
             <AiTwotoneSetting />
           </ListItemIcon>
           <ListItemText primary={"Settings"} />
         </ListItemButton>
       </ListItem>
     </List>

     <NavFoot className={styles.navfoot}>
       <Divider />
       <NavFootText>
         <p>Quizapp copyight 2023. All rights reserved</p>
       </NavFootText>
     </NavFoot>
   </div>
 );


 return (
   <Box
     sx={{
       width: "100%",
       position: "relative",
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       borderBottom: "1px solid #b9baba",
       padding: "7px 20px",
       height: "10%",
     }}
   >
     <CssBaseline />

     <IconButton
       color="inherit"
       aria-label="open drawer"
       edge="start"
       onClick={handleDrawerToggle}
       sx={{ display: { sm: "block" } }}
     >
       <MenuIcon />
     </IconButton>

     <Space></Space>
     <Space></Space>

     <Logo src="/images/logo.png" alt="" />

     <Box
       component="nav"
       sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
       aria-label="mailbox folders"
     >
       {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
       <Drawer
         variant="temporary"
         open={mobileOpen}
         onClose={handleDrawerToggle}
         ModalProps={{
           keepMounted: false, // Better open performance on mobile.
         }}
         sx={{
           display: { xs: "block", sm: "none" },
           "& .MuiDrawer-paper": {
             boxSizing: "border-box",
             width: drawerWidth,
           },
         }}
       >
         {drawer}
       </Drawer>
       <Drawer
         variant="temporary"
         onClose={handleDrawerToggle}
         ModalProps={{ keepMounted: false }}
         sx={{
           display: { xs: "none", sm: "block" },
           "& .MuiDrawer-paper": {
             boxSizing: "border-box",
             width: drawerWidth,
           },
         }}
         open={mobileOpen}
       >
         {drawer}
       </Drawer>
     </Box>
     <Link href={"http://localhost:5000/logout"}>
       <Avatar
         {...stringAvatar(userName)}
         sx={{ background: `var(--main-color)` }}
       />
     </Link>
   </Box>
 );
}

export default head

const Logo = styled.img`
  width: 70px;
  height: 40px;
`
const Space = styled.div`
  width: 70px;
  margin-left: 12px;
`
const NavFoot = styled.div`
 
  position: absolute;
  bottom: 4px;
  width: 100%;

 
`;
const NavFootText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 4px;
  p {
    font-size: 12px;
    color: var(--text-color);
  }
`;