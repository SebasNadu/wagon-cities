import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  static defaultProps = {
    city: { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' }
  }

  render() {

    if (!this.props.selectedCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }

    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;

    return (
      <div className="active-city">
        <h3>{this.props.selectedCity.name}</h3>
        <p>{this.props.selectedCity.address}</p>
        <img src={url} width="100%" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps) (ActiveCity);
