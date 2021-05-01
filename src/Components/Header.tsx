import React, { ReactElement } from 'react'
import {Typography,Divider,Slide} from '@material-ui/core'

interface Props {
  header:string
}

export default function Header({header}: Props): ReactElement {
  return (
    <div style={{textAlign:'right'}}>
      <Typography variant='h4'>
        Thomas Alleman
      </Typography>
      <Divider />
      <Slide in={true} direction='left' timeout={1000}>
        <Typography variant='h5' style={{color:'#6AAAE2'}}>
          {header}
        </Typography>
      </Slide>
    </div>
  )
}
