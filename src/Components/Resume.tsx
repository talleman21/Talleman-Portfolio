import * as React from 'react';

interface IResumeProps {
}

const Resume: React.FunctionComponent<IResumeProps> = (props) => {
  return (
    <div className='resume'>
      <div className='resume-title'>
        Resume
        <div className="resume-container">
          <div className='panel'>
            <div className="resume-heading">Developer Skills</div>
            <div style={{ display: 'flex' }}>
              <div>
                <div className="bullet"><b>React</b> 1 yr</div>
                <div className="bullet"><b>Node.JS</b> 1.5 yrs</div>
                <div className="bullet"><b>Javascript</b> 2 yrs</div>
              </div>
              <div>
                <div className="bullet"><b>jQuery</b> 2 yrs</div>
                <div className="bullet"><b>VBA</b> 6 yrs</div>
                <div className="bullet"><b>Python</b> 2 yrs</div>
              </div>
              <div>
                <div className="bullet"><b>TypeScript</b> .5 yrs</div>
                <div className="bullet"><b>SQL</b> 1.5 yrs</div>
                <div className="bullet"><b>MongoDB</b> 1.5 yrs</div>
              </div>
            </div>
            <div className="resume-heading">Employment</div>
            <div className="bullet"><b>Key Technology</b> (Oct. 2018-Present) - <span>CAD Application Developer</span></div>
            <ul className="description">
              <li>Create enterprise Full-Stack web apps using React, Node.JS, express, SQL, TypeScript</li>
              <li>Support engineering functions by automating processes within the CAD system (Solidworks)</li>
              <li>Provide IT and general support to sales engineering and project engineering groups.</li>
            </ul>
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
  );
};

export default Resume;
