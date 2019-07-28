import * as React from 'react';

interface IProjectsProps {
  platform: string
}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {

  const projects = [
    {
      name: 'GradeBook',
      liveLink: 'http://www.thomas-alleman.com',
      githubLink: 'https://github.com/talleman21/gradebook',
      image: 'gradebook.png'
    },
    {
      name: 'Simon',
      liveLink: 'https://codepen.io/Talleman/full/rvwzMQ',
      githubLink: '',
      image: 'simon.png'
    },
    {
      name: 'Wiki-Search',
      liveLink: 'https://codepen.io/Talleman/full/GxeORz',
      githubLink: '',
      image: 'wikisearch.png'
    },
    {
      name: 'Flashcards',
      liveLink: 'https://organic-wildflower.glitch.me/',
      githubLink: '',
      image: 'flashcards.png'
    },
    {
      name: 'Drum Machine',
      liveLink: 'https://codepen.io/Talleman/full/NBpGjx',
      githubLink: '',
      image: 'drummachine.png'
    },
    {
      name: 'Markdown Previewer',
      liveLink: 'https://codepen.io/Talleman/full/vaXjBx',
      githubLink: '',
      image: 'markdownpreviewer.png'
    },
  ]
  return (
    <div className="projects">
      {props.platform === 'large' ? 'Projects' : null}
      <div className="card-container">
        {projects.map(project => {
          return (
            <div className="card" key={project.name}>
              <a href={project.liveLink} target='_blank' rel="noopener noreferrer"><img src={project.image} alt={project.name} /></a>
              <div className="card-nav">
                <div className='card-button'>
                  <a href={project.liveLink} target='_blank' rel="noopener noreferrer">
                    Live
                    </a>
                </div>
                <div className='card-button'>
                  <a href={project.githubLink} target='_blank' rel="noopener noreferrer">
                    Github
                    </a>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>


    //       <div className="card">
    //         <img src="gradebook.png" />
    //         <div className="card-nav">
    //           <div className='card-button'>
    //             Live
    //           </div>
    //           <div className='card-button'>
    //             Github
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <img src="simon.png" />
    //         <div className="card-nav">
    //           <div className='card-button'>
    //             Live
    //           </div>
    //           <div className='card-button'>
    //             Github
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <img src="wikisearch.png" />
    //         <div className="card-nav">
    //           <div className='card-button'>
    //             Live
    //           </div>
    //           <div className='card-button'>
    //             Github
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card-container">
    //       <div className="card">
    //         <img src="flashcards.png" />
    //         <div className="card-nav">
    //           <div className='card-button'>
    //             Live
    //           </div>
    //           <div className='card-button'>
    //             Github
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <a href="https://codepen.io/Talleman/full/NBpGjx" target='_blank'><img src="drummachine.png" /></a>
    //         <div className="card-nav">
    //           <div className='card-button'>
    //             <a href="https://codepen.io/Talleman/full/NBpGjx" target='_blank'>
    //               Live
    //             </a>
    //           </div>
    //           <div className='card-button'>
    //             Github
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <a href="https://codepen.io/Talleman/full/vaXjBx" target='_blank'><img src="markdownpreviewer.png" /></a>
    //         <div className="card-nav">
    //           <div className='card-button'>
    //             <a href="https://codepen.io/Talleman/full/vaXjBx" target='_blank'>
    //               Live
    //             </a>
    //           </div>
    //           <div className='card-button'>
    //             Github
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
