var React = require("react"),
	$ = require("jquery"),
	url = require('url'),
	resourceUrl = "/api/shape/";


module.exports = React.createClass({
	getInitialState: function() {
		return { isHovering: false, seen: this.props.info.seen }
	},
	handleMouseOver: function() {
		var seen = this.state.seen;

		if(!this.state.isHovering) {
			seen++;
            $.ajax({
                url: resourceUrl + this.props.info._id,
                method: "PUT",
				data: "seen=" + seen,
                dataType: "json",
				cache: false,
                success: function(data) {
					this.setState({ isHovering: true, seen: data.seen });
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this)
            });
		}
	},
	handleMouseOut: function() {
		this.setState({ isHovering: false, seen: this.state.seen });
	},
	render: function() {
		return(
			<div className="shape tooltips" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
				<div className={ this.props.info.name + ' polygon-' + this.props.info.color }>
				</div>
				<span>
					<h3>{this.props.info.color} {this.props.info.name}</h3>	
					<p>seen {this.state.seen}</p>	
				</span>
			</div>
		)
	}
});



