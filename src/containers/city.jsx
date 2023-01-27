import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {

    let classes = 'list-group-item';
    if (this.props.city === this.props.selectedCity) {
      classes += ' city-selected'
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

import { selectCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { selectCity: selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (City);
