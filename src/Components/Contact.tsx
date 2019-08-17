import * as React from 'react';
//@ts-ignore
import GitHubCalendar from 'github-calendar'

interface IContactProps {
  platform: string
}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  new GitHubCalendar('.calendar', 'talleman21', { global_stats: true, responsive: true })
  return (
    <div className='contact'>
      <div style={{ textAlign: 'center' }}>
        <div>
          <img src="./talleman_profile.png" />
        </div>
        <a href="mailto:talleman21@gmail.com?Subject=Hello%20again" target="_top">talleman21@gmail.com <br /></a>
        <a href="https://github.com/talleman21" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/thomas-alleman-157067a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className='calendar'>Loading Awesome Calendar...</div>
    </div>
  );
};

export default Contact;

