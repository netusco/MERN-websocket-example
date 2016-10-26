var React = require("react"),
	url = require('url'),
	socket = require('socket.io-client')(url.href),
	$ = require("jquery"),
	resourceUrl = "/api/statistics",
	ShapeButton = require("./Buttons.jsx");


module.exports = React.createClass({
	getInitialState: function() {
		return { sort: 'categories' }
	},
	actOnClient: function(checked, sortBy) {
		if(checked) {	
			this.setState({ sort: sortBy });

			var stats = {
				seenCat: (sortBy === 'categories'),
				seenColor: (sortBy === 'colors'),
				agent: this.props.agentInfo
			};

            $.ajax({
                url: resourceUrl,
                method: "POST",
				data: "seenCat=" + stats.seenCat 
					+ "&seenColor=" + stats.seenColor 
					+ "&agent=" + stats.agent,
                dataType: "json",
				cache: false,
                success: function(data) {
				},
				error: function(xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}
            });

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
