import React from 'react';
import './CSS/App.css';
import { Swipeable } from 'react-swipeable'
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
    titleStyle: 'title-container'
  }

  componentDidMount = () => {
    window.innerWidth < 675 ? this.setState({ platform: 'mobile' }) : this.setState({ platform: 'large' })   // set mobile or large media type
    window.addEventListener("resize", () => {                                // set an event listener to react to window resizes
      window.innerWidth < 675 ? this.setState({ platform: 'mobile' }) : this.setState({ platform: 'large' })
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", () => {                                // set an event listener to react to window resizes
      window.innerWidth < 675 ? this.setState({ platform: 'mobile' }) : this.setState({ platform: 'large' })
    })
  }

  componentDidUpdate = () => {
    let element = document.querySelector('.' + this.state.page)
    if (element) {
      element.classList.add('visible')
    }

    if (this.state.platform === 'large') {
      setTimeout(() => {
        this.setState({ titleStyle: 'title-container triggered' })
      }, 3000)
    }
  }

  titleTrigger = () => {
    this.setState({ titleStyle: 'title-container triggered' })
  }

  setPage = (page: string) => {
    this.setState({ page })
  }

  swipeHandler = (direction: string) => {
    let pages = ['home', 'projects', 'resume', 'contact']
    let nextIndex: number

    if (direction === 'left' && this.state.page === 'contact') {
      nextIndex = 0
    } else if (direction === 'right' && this.state.page === 'home') {
      nextIndex = pages.length - 1
    } else if (direction === 'left') {
      nextIndex = pages.indexOf(this.state.page) + 1
    } else {
      nextIndex = pages.indexOf(this.state.page) - 1
    }

    this.setState({ page: pages[nextIndex] })
  }


  render() {
    return (
      <Swipeable className={this.state.page !== 'home' ? "App dim-bg" : 'App'} onSwipedLeft={() => this.swipeHandler('left')} onSwipedRight={() => this.swipeHandler('right')}>
        <div className={this.state.titleStyle}>
          <div className="filler"></div>
          <Title platform={this.state.platform} titleTrigger={this.titleTrigger} />
          <Links setPage={this.setPage} platform={this.state.platform} page={this.state.page} />
        </div>
        <div className="page-container">
          {this.state.page === 'projects' && <Projects platform={this.state.platform} />}
          {this.state.page === 'resume' && <Resume platform={this.state.platform} />}
          {this.state.page === 'contact' && <Contact platform={this.state.platform} />}
        </div>
      </Swipeable>
    );
  }
}
