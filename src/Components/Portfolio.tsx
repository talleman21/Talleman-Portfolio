import React, { ReactElement, useState } from 'react'
import {Grid,Card,CardContent,CardActionArea,CardMedia,Typography,Hidden,Grow,Slide,Divider} from '@material-ui/core'
import Header from './Header'

interface Props {
  
}

type project = {[index:string]:any,id:string,label:string,image:string,techImages:string[],description:string}

const projects:project[] = [
  {id:'project1',label:'Authentication App', image:'auth-format.png',techImages:['bootstrap','express.js','react','mongodb','node.js'],
  description:'Authentication server based on the SalesForce OAuth implementation.  Requires an API key and callback url for 3rd party authentication.',
  features:[<li>Full-Stack Application</li>,<li>http-only cookies</li>,<li>fully encrypted user info</li>,<li>supports authentication, log-in, and log-out</li>]
  },
  {id:'project2',label:'Thunderhead Design', image:'thead-format.png',techImages:['react','bootstrap'],
  description:'3D design business site.  Uses React, and ReactStrap to achieve a pleasing responsive design.',
  features:[<li>Front-end application</li>,<li>Mobile first responsive design</li>,<li>API calls to external Email service</li>]
  },
  {id:'project3',label:'Bootcamp API', image:'format.png',techImages:['node.js','express.js','mongodb'],
  description:`API developed for students to use during nucamp's react and react-native courses.  This app serves campsite information, images, and allows for posting of comments and feedback.  After 15 minutes of inactivity, the api is reset back to it's original state.`,
  features:[<li>Back-end application</li>,<li>Node.js, express, and Mongodb</li>,<li>ddos protection to prevent redundant student api calls</li>,<li>front page allows api calls to be made and results displayed.</li>]}
]

export default function Portfolio({}: Props): ReactElement {

  const [selectedProject,setSelectedProject] = useState('')

  const handleProjectSelect = (project:string) => {
    if(selectedProject === project){
      setSelectedProject('')
    }else{
      setSelectedProject(project)
    }
  }

  const renderProjectCard = (project:project) => {
    return(
      <Grid item xs={12} md={4} key={project.id}>
        <Grow in={true} timeout={Math.random() * 2000 } >
          <Card onClick={()=>handleProjectSelect(project.id)}  style={{boxShadow:selectedProject === project.id ?'0px 0px 10px 0px lightblue':'none',backgroundColor:'#9ECCF4'}}>
              <img
                style={{height:'200px',width:'200px',objectFit:'contain',margin:'auto'}}
                src={`${process.env.PUBLIC_URL}/images/${project.image}`}    
                alt={project.label}          
              />
              <CardContent>
                <Typography variant='h5' style={{color:'#444'}}>{project.label}</Typography>
              </CardContent>
          </Card>
        </Grow>
      </Grid>
    )
  }

  const displaySelected = () => {
    const selected = projects.filter(project => project.id === selectedProject)[0]
    return (
      <Grid container xs={6} justify='center' style={{margin:'auto',height:selectedProject ? '500px':'0px',transition:'1s'}}>
        <Grow in={!!selectedProject} timeout={1000}>
        <Grid item xs={12} lg={6}>
              {selectedProject ?                
                  <img src={`${process.env.PUBLIC_URL}/images/${selected.image}`}  alt={selected.label}/>     
                :<div/>
              }
        </Grid>
            </Grow>
            <Grow in={!!selectedProject} timeout={1000}>
        <Grid item xs={12} lg={6}>
          <Typography variant='h4'>
            {selected?.label}
          </Typography>
          <Divider/>
          <Typography variant='body1' style={{marginTop:'20px'}}>
            {selected?.description}
          </Typography>
          <ul>{selected?.features}</ul>
        </Grid>
            </Grow>
        <Grid xs={12} container justify='space-around'>
          
            {selected?.techImages.map(tech => (
              <Grid item><img style={{height:'40px',objectFit:'contain'}} src={`${process.env.PUBLIC_URL}/images/tech-images/${tech}.png`} alt={`${tech} logo`}/></Grid>
            ))}
          
        </Grid>

      </Grid>
    )
  }

  return (
    <div style={{height:'100%'}}>
      <Header header='Portfolio'/>
      <Hidden smDown>
        <div style={{minHeight:'30%'}}>
            {displaySelected()}
        </div>
      </Hidden>
      
      <Grid container justify='space-evenly' spacing={2} style={{textAlign:'center'}}>
        {projects.map(project => renderProjectCard(project))}        
      </Grid>     
      
    </div>
  )
}
