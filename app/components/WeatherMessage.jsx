var React = require('react');

// var WeatherMessage = (props) => {
//   var {temp, location} = props; //ES6 destructuring
//
//   return(
//     <h2>It's {temp} in {location}</h2>
//   );
// }

// ES6 destructuring directly in function argument

var WeatherMessage = ({temp, location}) => {

  return(
    <h3 className="text-center">It's {temp} in {location}</h3>
  );
}

module.exports = WeatherMessage;
