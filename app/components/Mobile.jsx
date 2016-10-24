var React = require("react"),
	ShapeButton = require("./Buttons.jsx");


module.exports = React.createClass({
	getInitialState: function() {
		return { sort: 'categories' }
	},
	actOnClient: function(checked, sortBy) {
		if(checked) {	
			this.setState({ sort: sortBy });
			// @TODO: add socket.io emit here to broadcast the sortBy state
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
