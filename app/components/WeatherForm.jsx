var React = require('react');

var WeatherForm = React.createClass({
  render: function () {
    return(
      <form>
        <div>
          <input type="text" ref="city" placeholder="Enter City name"/>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
