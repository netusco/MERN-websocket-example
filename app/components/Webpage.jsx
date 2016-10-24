var React = require("react"),
	ShapeList = require("./ShapeList.jsx"),
	ShapeStore = require("../stores/ShapeStore");

// @TODO: replace this hardcode with a socket.io received signal
var sortBy = 'category';

// @TODO: replace this hardcoded list with results from db once filled in
var _shapes= [
		{ name: 'triangle', color: 'green' },
		{ name: 'triangle', color: 'red' },
		{ name: 'circle', color: 'red' },
		{ name: 'square', color: 'green' },
		{ name: 'square', color: 'blue' },
		{ name: 'circle', color: 'green' },
		{ name: 'square', color: 'red' },
		{ name: 'triangle', color: 'blue' },
		{ name: 'circle', color: 'blue' },
	];

var getShapesCallback = function(shapes){
    _shapes = shapes;
    render();
};

ShapeStore.onChange(getShapesCallback);

module.exports = React.createClass({
	render: function() {
		return(
				<div className="App">
					<div className="App-header">
						<h2>Web Page</h2>
					</div>
					<div className="content">
						<ShapeList shapes={_shapes} sort={sortBy} />
					</div>
				</div>
		)
	}
});

