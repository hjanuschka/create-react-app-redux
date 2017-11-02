import React from 'react';
import { Route, Link } from 'react-router-dom'
import asyncComponent from '../../components/AsyncComponent'
const AsyncHome = asyncComponent(() => import("../home"));
const AsyncAbout = asyncComponent(() => import("../about"));



const App = () => (
  <div>
    <header>
    HEADER
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>


    <main>
      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/about-us" component={AsyncAbout} />
    </main>
    FOOTER
  </div>
)

export default App
