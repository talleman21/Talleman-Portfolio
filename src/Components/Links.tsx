import * as React from 'react';

interface ILinksProps {
  setPage: Function
  page: string
}

const Links: React.FunctionComponent<ILinksProps> = (props) => {

  const setPageHandler = (newPage: string) => {
    props.setPage(newPage)
  }

  const hideLink = (link: string) => {
    if (props.page !== link && props.page !== 'home') {
      return 'display-none'
    } else {
      return ''
    }
  }

  return (
    <div className="links" style={props.page === 'home' ? { height: '70vh' } : { height: '10vh' }}>
      <div className={hideLink('projects')} onMouseEnter={() => setPageHandler('projects')}>[ Projects ]</div>
      <div className={hideLink('resume')} onMouseEnter={() => setPageHandler('resume')}>[ Resume ]</div>
      <div className={hideLink('contact')} onMouseEnter={() => setPageHandler('contact')}>[ Contact ]</div>
    </div>
  );
};

export default Links;
