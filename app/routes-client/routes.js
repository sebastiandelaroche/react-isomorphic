
import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Layout.css';

function Layout({ children }) {
  console.log("ENTRO ...");
  return (
    <div>
      <header>
        <h1>React Router with Isomorphic CSS Example</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/foo">Foo</Link></li>
          <li><Link to="/bar">Bar</Link></li>
        </ul>
      </header>
      {children}
    </div>
  );
}

const Home = () => (<div>Home!</div>);
const Foo = () => (<div>Foo!</div>);
const Bar = () => (<div>Bar!</div>);

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="foo" component={Foo} />
    <Route path="bar" component={Bar} />
  </Route>
);


export default routes;
