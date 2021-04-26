import React from 'react';
import PropTypes from 'prop-types';

const RandomColors = ({ randFirst, randLast }) => (
  <div className="buttons group">
    <button onClick={randFirst} type="button" className="button">
      Random First
    </button>
    <button
      onClick={() => {
        randFirst();
        randLast();
      }}
      type="button"
      className="button"
    >
      Random All
    </button>
    <button onClick={randLast} type="button" className="button">
      Random Last
    </button>
  </div>
);

RandomColors.propTypes = {
  randLast: PropTypes.func.isRequired,
  randFirst: PropTypes.func.isRequired,
};

export default RandomColors;
