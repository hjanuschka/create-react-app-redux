import React from 'react';
import { Route, Link } from 'react-router-dom'
import asyncComponent from '../../components/AsyncComponent'
import Home from '../home'
const AsyncAbout = asyncComponent(() => import("../about"));

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={AsyncAbout} />
    </main>
  </div>
)

export default App
