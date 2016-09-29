
var React = require('react'),
    render = require('react-dom/server'),
    ReactMain = React.createFactory(require('../component/main'));

module.exports = function(app) {

	app.get('/', function(req, res) {

    var data = [{
      name: "Sebastian De La Roche",
      age: 21
    }, {
      name: "Evaluna De La Roche",
      age: 0
    }];

		// React.renderToString takes your component
    // and generates the markup
		var reactHtml = render.renderToString(ReactMain({data}));
    // Output html rendered by react
    res.render('index.ejs', {reactOutput: reactHtml});

	});

};
