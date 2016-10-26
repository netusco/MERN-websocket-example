var React = require("react"),
	socket = require('socket.io-client')('http://localhost:7777'),
	ShapeButton = require("./Buttons.jsx");


module.exports = React.createClass({
	getInitialState: function() {
		return { sort: 'categories' }
	},
	actOnClient: function(checked, sortBy) {
		if(checked) {	
			this.setState({ sort: sortBy });
			socket.emit('sortBy', sortBy);
		}
	},
	render: function() {
		return(
			<div className="App">
				<div className="App-header">
					<h2>Mobile Web App</h2>
				</div>
				<div className="content">
					<div className="buttons-container">
						<ShapeButton sortby="categories" callbackParent={this.actOnClient} />
						<ShapeButton sortby="colors" callbackParent={this.actOnClient} />
					</div>
				</div>
			</div>
		  )
	}
});
