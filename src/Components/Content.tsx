import React, { ReactElement } from 'react'
import {Switch,Route} from 'react-router-dom'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Home from './Home'

interface Props {
  
}

export default function Content({}: Props): ReactElement {
  return (
    <Switch>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
  </Switch>
  )
}
