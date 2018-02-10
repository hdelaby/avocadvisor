import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import Logo from './Logo.svg'
import Pricing from './features/Pricing'
import Home from './features/Home'

const App = () => (
  <Router>
    <div>
      <div className="container-fluid">
        <div className="row topbar">
          <div className="col col-xs-4" >
            <img src={Logo} height="100%" alt="Baker logo"/>
          </div>
          <div className="col col-xs-5">
            <NavLink activeClassName="active" className="nav-item nav-link top-block advising" to="/">Advising</NavLink>
          </div>
          <div className="col col-xs-3">
            <NavLink activeClassName="active" className="nav-item nav-link top-block partners" to="/pricing">Partners</NavLink>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col col-xs-4">
          <NavLink activeClassName="active" className="nav-item nav-link block pricing" to="/pricing">Pricing</NavLink>
        </div>
        <div className="col col-xs-5">
          <div>
            <NavLink activeClassName="active" className="nav-item nav-link calendar half-block" to="/pricing">Calendar</NavLink>
          </div>
          <div>
            <NavLink activeClassName="active" className="nav-item nav-link half-block clients" to="/pricing">Clients</NavLink>
          </div>
        </div>
        <div className="col col-xs-3">
          <NavLink activeClassName="active" className="nav-item nav-link block arnaud" to="/pricing">Nono</NavLink>
        </div>
      </div>

      {/* <div className="container-fluid">
        <Route exact path="/" component={Home}/>
        <Route path="/pricing" component={Pricing}/>
      </div> */}
    </div>
  </Router>
)


export default App