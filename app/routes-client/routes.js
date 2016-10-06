
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from '../component/Layout';
import Home from '../component/Home';
import Foo from '../component/Foo';
import Bar from '../component/Bar';

// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Layout.css';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="foo" component={Foo} />
    <Route path="bar" component={Bar} />
  </Route>
);


export default routes;
