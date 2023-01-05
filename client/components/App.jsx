import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import Blog from './Blog'
import Footer from './Footer'

const App = () => {
  const author = 'Aaron Emerson'

  return (
    <>
      <Router>
        <Route path='/'>
          <Nav
            home={'Home'}
            blog={'Blog'}
            projects={'Projects'}
          />
        </Route>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Blog'>
            <Blog />
          </Route>
          <Route exact path='/Projects'>
            <Projects />
          </Route>
        </Switch>
        <Route path='/'>
          <Footer
            author={author}
          />
        </Route>
      </Router>
    </>
  )
}

export default App
