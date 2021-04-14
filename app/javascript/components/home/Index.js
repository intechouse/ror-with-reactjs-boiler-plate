import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  render () {
    debugger
    return (
      <React.Fragment>
        <h1> Boiler Plat APP</h1>
        <p> Boiler Plat APP</p>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  greeting: PropTypes.string
};
export default Index
