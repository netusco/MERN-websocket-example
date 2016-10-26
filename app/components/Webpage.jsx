var React = require("react"),
	ShapeList = require("./ShapeList.jsx"),
	socket = require('socket.io-client')('http://localhost:7777');


module.exports = React.createClass({
	getInitialState: function() {
		return { sortBy: 'categories' };
	},
	componentWillMount: function() {
		this.listen();
	},
	listen: function() {
		var self = this;
		socket.on('sortBy', function(sort) {
			console.log('received sortBy', sort);
			self.changeSorting(sort);
		});
	},
	changeSorting: function(sort) {
		this.setState({ sortBy: sort });
	},
	render: function() {
		return(
			<div className="App">
				<div className="App-header">
					<h2>Web Page</h2>
				</div>
				<div className="content">
					<ShapeList shapes={this.props.shapes} sort={this.state.sortBy} />
				</div>
			</div>
		)
	}
});

