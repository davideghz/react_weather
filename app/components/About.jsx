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
      <h3>About component</h3>
      <p>Welcome to the About page!</p>
    </div>

  );
};


module.exports = About;
