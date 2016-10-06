
import React from 'react';
import { Link } from 'react-router';


export default class Layout extends React.Component {

  render() {

    const {children} = this.props;

    return (
      <div>
        <header>
          <h1>React Router with Isomorphic</h1>
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
}
