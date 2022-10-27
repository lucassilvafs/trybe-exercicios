import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <li className="pokemon">
        <div>
          <p>{ pokemon.name }</p>
          <p>{ pokemon.type }</p>
          <p>
            Average weight:
            <span>
              {`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}
            </span>
          </p>
        </div>
        <img src={ pokemon.image } alt={ `${pokemon.name}` } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
