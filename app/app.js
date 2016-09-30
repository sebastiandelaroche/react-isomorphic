

import React from 'react';
import { render } from 'react-dom';
import Main from './component/main';
import { Router, browserHistory, history } from 'react-router';
import routes from './routes-client/routes';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
