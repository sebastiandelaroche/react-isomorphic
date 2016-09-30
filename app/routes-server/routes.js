
import React from 'react';
import render from 'react-dom/server';
import Main from '../component/main';
// import { Router, createMemoryHistory } from 'react-router';
import { match, RouterContext } from 'react-router';
import routes from '../routes-client/routes';


module.exports = function(app) {

	app.get('/*', function(req, res) {

		// Note that req.url here should be the full URL path from
	  // the original request, including the query string.
	  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
	    if (error) {
	      res.status(500).send(error.message)
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
	    } else if (renderProps) {
	      // You can also check renderProps.components or renderProps.routes for
	      // your "not found" component or route respectively, and send a 404 as
	      // below, if you're using a catch-all route.

				const renderToStringHTML = render.renderToString(<RouterContext {...renderProps} />);
				const html = `<!doctype html>
				<html>
				  <head>
				    <meta charset="UTF-8">
				    <title>Hello React</title>
				  </head>
				  <body>
				    <div id="app">
				      ${renderToStringHTML}
				    </div>
				    <script src="./bundle.js"></script>
				  </body>
				</html>`;
				res.status(200).send(html);

	    } else {
	      res.status(404).send('Not found')
	    }
	  })

/*

		// React.renderToString takes your component
    // and generates the markup
		const reactHtml = render.renderToString(
	     <Router history={createMemoryHistory} routes={routes} />
	   );

	//	var reactHtml = render.renderToString(<Main />);
    // Output html rendered by react
    res.render('index.ejs', {reactOutput: reactHtml});
*/
	});

};
