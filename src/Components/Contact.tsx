import * as React from 'react';

interface IContactProps {
}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  return (
    <div className='contact'>
      <div style={{ textAlign: 'center' }}>
        <a href="mailto:talleman21@gmail.com?Subject=Hello%20again" target="_top">talleman21@gmail.com <br /></a>
        <a href="https://github.com/talleman21" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/thomas-alleman-157067a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default Contact;

