import React, { useState, useEffect } from 'react';
import './CSS/App.css';

const App: React.FC = () => {
  const [titleStyle, setTitleStyle] = useState('title')
  const [page, setPage] = useState('home')
  const [previousPage, setPreviousPage] = useState('home')

  useEffect(() => {
    setTimeout(() => {
      setTitleStyle('title triggered')
    }, 3000)
  })

  useEffect(() => {
    let element = document.querySelector('.' + page)
    let previousElement = document.querySelector('.' + previousPage)
    if (element) {
      element.classList.add('visible')
    }
    // if (previousElement) {
    //   previousElement.classList.remove('visible')
    // }
  }, [page])

  const titleTrigger = () => {
    setTitleStyle('title triggered')
  }

  const setPageHandler = (newPage: string) => {
    setPreviousPage(page)
    setPage(newPage)
  }


  return (
    <div className="main">
      <div className="landing" >
        <div className={page !== 'home' ? 'background-dim' : 'background-bright'}>
          {page === 'projects' &&
            <div className='projects'>
              <div className="projects-container">
                Projects
                <div className="card-container">
                  <div className="card">
                    <img src="gradebook.png" />
                    <div className="card-nav">
                      <div className='card-button'>
                        Live
                      </div>
                      <div className='card-button'>
                        Github
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <img src="simon.png" />
                    <div className="card-nav">
                      <div className='card-button'>
                        Live
                      </div>
                      <div className='card-button'>
                        Github
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <img src="gradebook.png" />
                  </div>
                </div>
                <div className="card-container">
                  <div className="card">
                    <img src="gradebook.png" />
                  </div>
                  <div className="card">
                    <img src="gradebook.png" />
                  </div>
                  <div className="card">
                    <img src="gradebook.png" />
                  </div>
                </div>


              </div>
            </div>
          }
          {page === 'resume' &&
            <div className='resume'>
              <div className='resume-title'>
                Resume
                <div className="resume-container">
                  <div className='panel'>
                    <div className="resume-heading">Developer Skills</div>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <div className="bullet"><b>React</b> 1 year</div>
                        <div className="bullet"><b>Node.JS</b> 1.5 years</div>
                        <div className="bullet"><b>Javascript</b> 2 years</div>
                      </div>
                      <div>
                        <div className="bullet"><b>jQuery</b> 2 years</div>
                        <div className="bullet"><b>VBA</b> 6 years</div>
                        <div className="bullet"><b>Python</b> 2 years</div>
                      </div>
                      <div>
                        <div className="bullet"><b>TypeScript</b> .5 years</div>
                        <div className="bullet"><b>SQL</b> 1.5 years</div>
                        <div className="bullet"><b>MongoDB</b> 1.5 years</div>
                      </div>
                    </div>
                    <div className="resume-heading">Employment</div>
                    <div className="bullet"><b>Key Technology</b> (Oct. 2018-Present) - <span>CAD Application Developer</span></div>
                    <div className="description">
                      -Create enterprise Full-Stack web apps using React, Node.JS, express, SQL, TypeScript <br />
                      -Support engineering functions by automating processes within the CAD system (Solidworks)<br />
                      -Provide IT and general support to sales engineering and project engineering groups.
                    </div>
                    <div className="bullet"><b>Trelleborg Offshore</b> (2017) - <span>Senior Mechanical Designer (Remote)</span> </div>
                    <div className="description">
                      -Work in a remote environment to provide mechanical designs using Autodesk Inventor Software.<br />
                      -Automate design creation using VBA within CAD System.
                    </div>
                    <div className="bullet"><b>Key Technology</b> (2016-2017,2018) - <span>Mechanical Designer</span></div>
                    <div className="description">
                      -Design products based on specs provided by Sales Engineering using Solidworks software <br />
                      -Manage projects to ensure on-time and on-budget delivery<br />
                      -Work closely with other departments to provide positive outcomes for the end customer.
                    </div>
                    <div className="bullet"><b>Walla Walla University</b> (2017-Present) - <span>Adjunct Instructor</span> </div>
                    <div className="description">
                      -Provide instruction for Solidworks design software, and Keyshot rendering software.<br />
                      -Engage students with a real-world problem solving approach and a unique teaching style.
                    </div>
                    <div className="bullet"><b>Trelleborg Offshore</b> (2007-2009,2010-2015) - <span>Senior Mechanical Designer/Dept. Lead</span> </div>
                    <div className="description">
                      -Manage projects and designers within the department.<br />
                      -Ensure customer and company specs are adhered to.<br />
                      -Automate design creation using VBA within CAD System.
                    </div>
                    <div className="bullet"><b>Offshore Kinematics Inc</b> (2009-2010) - <span>Senior Mechanical Designer</span> </div>
                    <div className="description">
                      -Design structural components for offshore floatover platform installations. <br />
                      -Develop design standards and automation of designs <br />
                    </div>
                  </div>
                  <div className="panel">
                    <div className="resume-heading">Education</div>
                    <div className="bullet"><b>NWCCD</b> 2001-2002 - AAS Welding Technology</div>
                    <div className="bullet"><b>WJSHS</b> (1996-2000) - H.S. Diploma</div>
                  </div>
                </div>
              </div>
            </div>
          }

          {page === 'contact' &&
            <div className='contact'>
              <div style={{ textAlign: 'center' }}>
                <a href="mailto:talleman21@gmail.com?Subject=Hello%20again" target="_top">talleman21@gmail.com <br /></a>
                <a href="https://github.com/talleman21" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/thomas-alleman-157067a/" target="_blank"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          }

        </div>

        <div className={titleStyle} onMouseEnter={() => titleTrigger()}>
          <div className="who">
            <div className="who-I-am">Thomas Alleman</div>
            <div className="what-I-do">Web Developer</div>
          </div>
          <div className="links">
            <div onMouseEnter={() => setPageHandler('projects')}>[ Projects ]</div>
            <div onMouseEnter={() => setPageHandler('resume')}>[ Resume ]</div>
            <div onMouseEnter={() => setPageHandler('contact')}>[ Contact ]</div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
