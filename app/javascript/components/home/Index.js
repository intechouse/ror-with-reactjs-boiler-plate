import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1> Boiler Plat APP</h1>
        <p> Boiler first paragraph</p>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  greeting: PropTypes.string
};
export default Index
