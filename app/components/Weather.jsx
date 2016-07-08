var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');

var Weather = React.createClass({
  render: function () {
    return(
      <div>
        <h3>Weather component</h3>
        <WeatherForm />
        <Message />
      </div>
    );
  }
});

module.exports = Weather;
