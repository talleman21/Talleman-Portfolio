import React, { ReactElement } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {Divider} from '@material-ui/core'
import Header from './Header'

interface Props {
  
}

export default function About({}: Props): ReactElement {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      profileImage:{
        borderRadius:'50%',
        padding:'20px',
        maxWidth:'300px',
        maxHeight:'300px'
      },
      container:{
        margin: 'auto',
        maxWidth:'1000px',
        display:'flex',
        justifyContent:'center'
      }
    }),
  );

  const classes = useStyles()

  return (
    <div>
      <Header header='About'/>
      <div className={classes.container} >
        <img className={classes.profileImage} src={`${process.env.PUBLIC_URL}/images/profile_image.png`} alt="photograph of a very handsome man with a huge beard" />
        <div>
          <h1>About Me</h1>
          <Divider />
          <p>A tech-savvy and solution-oriented professional with hands-on experience and knowledge of building highly
    innovative and creative web applications. Knowledgeable in developing solutions by applying agile methodologies
    and utilizing expertise in Typescript, JavaScript, React, Node.js, Express, and SQL. Adept at analyzing requirements to
    ensure optimal performance, quality, and responsiveness of applications. Talent for resolving bugs, developing areas
    for refactoring in existing programs, as well as writing and implementing code. Quickly learn and master new
    technologies, successful work in both, team and self-directed settings. Possess excellent communication,
    interpersonal, organizational, and problem-solving skills.
          </p>
        </div>

      </div>
      <div className={classes.container}>
        <h2>Technical Proficiencies</h2>
        <Divider/>
        <p>
          TypeScript | JavaScript | React | Node.js | Express | SQL | MongoDB | Git | VBA | Docker | OAuth | HTML | CSS
        </p>
      </div>
    </div>
  )
}
