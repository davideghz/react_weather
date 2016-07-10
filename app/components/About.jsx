var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return(
//       <h3>About component</h3>
//     );
//   }
// });

// stateless functional component, only defines render method and
// doesn't keep any stateless

// var About = function (props) {
//   return(
//     <h3>About component</h3>
//   );
// };

// stateless functional component, arrow version
var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built in React.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="http://facebok.github.io/react" target="_blank">React</a> - This is the JavaScript
            framework used.
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used OpenWeatherMap to
            search for weather data by city name.
        </li>
      </ul>
    </div>

  );
};


module.exports = About;
