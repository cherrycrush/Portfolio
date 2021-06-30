import React from 'react'
import { HashRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'

const App = () => {
  const author = 'Aaron Emerson'
  return (
    <div>
      <Router >
        <Route path={'/'}
          exact={true}
          render={props => <Nav me={author}
            {...props} />} />
        <div className='container'></div>
        <Switch>
          <Route exact path={'/'} component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
