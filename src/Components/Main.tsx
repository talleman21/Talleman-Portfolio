import React, {useState} from 'react';
import Content from './Content'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {CssBaseline,Drawer,ListItemIcon,ListItemText,ListItem,Divider,List} from '@material-ui/core';
import {AccountBox,Mail,GitHub, LinkedIn,Phonelink,Home} from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";





export default function PermanentDrawerLeft(props:any) {
  
  const [drawerWidth,setDrawerWidth] = useState(60)
  const [page,setPage] = useState(window.location.pathname.toLowerCase())

  // console.log('location',window.location.pathname)

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        overflowX:'hidden',
        height:'100vh',
        fontFamily:'Kiwi Maru, serif',
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      image: {
        width:drawerWidth,
        objectFit:'contain',
        transition:'1s'
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        transition:'1s',
        whiteSpace:'nowrap',
        position:'absolute'

      },
      drawerPaper: {
        width: drawerWidth,
        overflow:'hidden',
        transition:'1s'
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
    }),
  );

  const classes = useStyles();

  return (
    <Router>

      <div className={classes.root} style={{fontFamily:'Kiwi Maru, serif'}} >
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
          onMouseEnter={()=>setDrawerWidth(175)}
          onMouseLeave={()=>setDrawerWidth(60)}
        >
          <div>
            <img className={classes.image} src={`${process.env.PUBLIC_URL}/images/beardman.png`} alt=""/>
          </div>
            
        
          <Divider />
          <List>
            <ListItem button key={'Home'} onClick={()=>setPage('/')} 
              style={{backgroundColor: page==='/' ? '#6AAAE2':''}} 
              component={(props) => <Link to='/' {...props}/>}
            >
              <ListItemIcon style={{color: page==='/' ? 'white':''}} >{<Home />}</ListItemIcon>
              <ListItemText style={{color: page==='/' ? 'white':''}} primary={'Home'} />
            </ListItem>
            <ListItem button key={'Portfolio'} onClick={()=>setPage('/portfolio')} style={{backgroundColor: page==='/portfolio' ? '#6AAAE2':''}} component={(props) => <Link to='portfolio' {...props}/>}>
              <ListItemIcon style={{color: page==='/portfolio' ? 'white':''}}>{<Phonelink />}</ListItemIcon>
              <ListItemText style={{color: page==='/portfolio' ? 'white':''}} primary={'Portfolio'} />
            </ListItem>
            <ListItem button key={'About'} onClick={()=>setPage('/about')} style={{backgroundColor: page==='/about' ? '#6AAAE2':''}} component={(props) => <Link to='about' {...props}/>}>
              <ListItemIcon style={{color: page==='/about' ? 'white':''}}>{<AccountBox />}</ListItemIcon>
              <ListItemText style={{color: page==='/about' ? 'white':''}} primary={'About'} />
            </ListItem>
            <ListItem button key={'Contact'} onClick={()=>setPage('/contact')} style={{backgroundColor: page==='/contact' ? '#6AAAE2':''}} component={(props) => <Link to='contact' {...props}/>}>
              <ListItemIcon style={{color: page==='/contact' ? 'white':''}}>{<Mail />}</ListItemIcon>
              <ListItemText style={{color: page==='/contact' ? 'white':''}} primary={'Contact'} />
            </ListItem>
          </List>
          <Divider />
          <List>

            <ListItem button component='a' href='https://github.com/talleman21' key={'Github'}>
              <ListItemIcon>{<GitHub />}</ListItemIcon>
              <ListItemText primary={'Github'} />
            </ListItem>
              
            <ListItem href='https://www.linkedin.com/in/thomas-alleman-157067a/' button component='a' key={'LinkedIn'}>
              <ListItemIcon>{<LinkedIn />}</ListItemIcon>
              <ListItemText primary={'LinkedIn'} />
            </ListItem>
              
          </List>
        </Drawer>
        <div style={{padding:'10px 10px 10px 70px',width:'100%',backgroundColor:'#fff',height:'100%'}}>
          <Content />
        </div>
      </div>
    </Router>
  );
}