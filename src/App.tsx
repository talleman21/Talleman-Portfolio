import React from 'react';
import './CSS/App.css';
import Title from './Components/Title'
import Links from './Components/Links'
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {

  state = {
    platform: '',
    page: 'home',
    titleStyle: ''
  }

  componentDidMount = () => {
    window.innerWidth < 600 ? this.setState({ platform: 'mobile' }) : this.setState({ platform: 'large' })   // set mobile or large media type
    window.addEventListener("resize", () => {                                // set an event listener to react to window resizes
      window.innerWidth < 600 ? this.setState({ platform: 'mobile' }) : this.setState({ platform: 'large' })
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", () => {                                // set an event listener to react to window resizes
      window.innerWidth < 600 ? this.setState({ platform: 'mobile' }) : this.setState({ platform: 'large' })
    })
  }

  componentDidUpdate = () => {
    let element = document.querySelector('.' + this.state.page)
    if (element) {
      element.classList.add('visible')
    }

    if (this.state.platform === 'large') {
      setTimeout(() => {
        this.setState({ titleStyle: 'title triggered' })
      }, 3000)
    }
  }

  titleTrigger = () => {
    this.setState({ titleStyle: 'title triggered' })
  }

  setPage = (page: string) => {
    this.setState({ page })
  }


  render() {
    return (
      <div className="App">
        <Title platform={this.state.platform} />
        <Links setPage={this.setPage} page={this.state.page} />
        <div className="page-container">
          {this.state.page === 'projects' && <Projects />}
          {this.state.page === 'resume' && <Resume />}
          {this.state.page === 'contact' && <Contact />}
        </div>
      </div>
    );
  }
}
