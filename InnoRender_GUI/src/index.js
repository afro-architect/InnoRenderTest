import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import InnoRenderIndex from './views/inno-render-index'
import InnoRenderUpload from './views/inno-render-upload'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={InnoRenderIndex} exact path="/" />
        <Route component={InnoRenderUpload} exact path="/inno-render-upload" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
