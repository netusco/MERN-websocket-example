var React = require("react");


module.exports = React.createClass({
	render: function() {
		return(
			<div className="shape">
				<div className={ this.props.info.name + ' polygon-' + this.props.info.color } ></div>
			</div>
		)
	}
});



