import React from 'react';
import PropTypes from 'prop-types';
import css from '../style/Button.module.css';

/**
 * Button of calculator
 * @param {String} name Name of the Button
 * @param {Boolean} color used to customize the color of the button
 * @param {Boolean} wide indicate that the button should have twice the standard width
 * @return {Node} React Element
 */
const Button = ({
  name, color, wide, handleClick,
}) => (
  <button
    type="button"
    data-testid={name}
    onClick={() => handleClick(name)}
    className={`${css.button} ${color ? css.color : ''} ${wide ? css.wide : ''}`}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  color: false,
  wide: false,
  handleClick: e => e.target,
};

export default Button;
