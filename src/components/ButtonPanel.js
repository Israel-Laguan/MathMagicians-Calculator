import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import css from '../style/ButtonPanel.module.css';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

/**
 * The calculator panel with all the buttons
 * @param {Function} onClick Event Handler for Click a Button
 * @return {Node} React Element
 */
const ButtonPanel = ({ onClick }) => (
  <div data-testid="button-panel">
    {
      buttons.map((group, id) => (
        <div key={Math.random()} data-testid={`group-${id + 1}`} className={css.group}>
          {
            group.map((name, i) => (
              <Button
                name={name}
                key={Math.random()}
                color={(id !== 4 || i !== 2) && i !== 3}
                wide={name === '0'}
                onClick={onClick}
              />
            ))
          }
        </div>
      ))
    }
  </div>
);

ButtonPanel.propTypes = {
  onClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  onClick: e => e.target,
};

export default ButtonPanel;
