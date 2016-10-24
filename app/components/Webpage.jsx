var React = require("react"),
	ShapeList = require("./ShapeList.jsx");

// @TODO: replace this hardcode with a socket.io received signal
var sortBy = 'category';

module.exports = React.createClass({
	render: function() {
		return(
			<div className="App">
				<div className="App-header">
					<h2>Web Page</h2>
				</div>
				<div className="content">
					<ShapeList shapes={this.props.shapes} sort={sortBy} />
				</div>
			</div>
		)
	}
});

