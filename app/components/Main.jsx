var React = require('react');
var Nav = require('Nav');

// don't use this.props.children because props is passed as
// an argument of the arrow function

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
