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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import styled from 'styled-components';
import styles from '../styles/header.module.css'

const drawerWidth = 240;

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


function head() {
 const [mobileOpen, setMobileOpen] = React.useState(false);

 const handleDrawerToggle = () => {
   setMobileOpen(!mobileOpen);
 };

 const drawer = (
   <div>
     <Toolbar />
     <Divider />
     <List>
       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
         <ListItem key={text} disablePadding>
           <ListItemButton className={styles.li}>
             <ListItemIcon className={styles.li_Icon}>
               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
             </ListItemIcon>
             <ListItemText primary={text} />
           </ListItemButton>
         </ListItem>
       ))}
     </List>
     <Divider />
     <List>
       {["All mail", "Trash", "Spam"].map((text, index) => (
         <ListItem key={text} disablePadding>
           <ListItemButton>
             <ListItemIcon>
               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
             </ListItemIcon>
             <ListItemText primary={text} />
           </ListItemButton>
         </ListItem>
       ))}
     </List>
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
     <Avatar {...stringAvatar("Kent Dodds")} />
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