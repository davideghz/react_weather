var React = require('react');

var Message = React.createClass({
  render: function () {
    var {temp, location} = this.props; //ES6 destructuring

    return(
      <h2>It's {temp} in {location}</h2>
    );
  }
});

module.exports = Message;
