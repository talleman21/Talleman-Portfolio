import React, { ReactElement } from 'react'
import { Typography,Divider ,Grow} from '@material-ui/core'
import Header from './Header'

interface Props {
  
}

export default function Home({}: Props): ReactElement {
  return (
    <Grow in timeout={1000}>
      <div style={{display:'flex',flexDirection:'column' ,alignItems:'center'}}>      
          <Typography variant='h1' style={{borderBottom:'1px solid black',padding:'50px 30px 10px 30px'}}>
            Thomas Alleman
          </Typography>
          <Typography variant='h2' style={{color:'#6AAAE2'}}>
            Full-Stack Developer
          </Typography>
      </div>

    </Grow>
  )
}
