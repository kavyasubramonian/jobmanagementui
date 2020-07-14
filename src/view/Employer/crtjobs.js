import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import '../../components/SignUp/SignUp.css';
import { secondaryListItems } from '../../components/Sidebar/Sidebar';
import Create_Jobs from "./CreateJobs";
import { makeStyles } from '@material-ui/styles';
import Footer from '../../components/Footer/Footer';
import {
  Card,
  Container,
  Grid,
  Paper,
  Box
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
root: {
display: 'flex',
},
toolbar: {
paddingRight: 24, // keep right padding when drawer closed
},
toolbarIcon: {
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-end',
padding: '0 8px',
...theme.mixins.toolbar,
},
appBar: {
zIndex: theme.zIndex.drawer + 1,
transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
},
appBarShift: {
marginLeft: drawerWidth,
width: `calc(100% - ${drawerWidth}px)`,
transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
}),
},
menuButton: {
marginRight: 36,
},
menuButtonHidden: {
display: 'none',
},
title: {
flexGrow: 1,
},
drawerPaper: {
position: 'relative',
whiteSpace: 'nowrap',
width: drawerWidth,
transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
}),
},
drawerPaperClose: {
overflowX: 'hidden',
transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
width: theme.spacing(7),
[theme.breakpoints.up('sm')]: {
    width: theme.spacing(9),
},
},
appBarSpacer: theme.mixins.toolbar,
content: {
flexGrow: 1,
height: '100vh',
overflow: 'auto',
},
container: {
paddingTop: theme.spacing(4),
paddingBottom: theme.spacing(4),
},
paper: {
padding: theme.spacing(2),
display: 'flex',
overflow: 'auto',
flexDirection: 'column',
},
fixedHeight: {
height: 240,
},
}));



export default function CreateJobs ()
{
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
      setOpen(true);
  };
  const handleDrawerClose = () => {
      setOpen(false);
  };
    
  const mystyle = {
    margin: "100px 100px 0px 240px",
  };
  
    return (
      <div className={classes.root}>
        <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Create Jobs
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{secondaryListItems}</List>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Card>
                        <Create_Jobs />
                      </Card>
                    </Paper>
                  </Grid>
                </Grid>
                <Box pt={4}>
                  <Footer/>
                </Box>
              </Container>
        </main>
      </div>
    );
}

