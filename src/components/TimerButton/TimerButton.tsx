import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';

const TimerButton = ({ buttonAction, buttonValue }) => (
 
 <div className="cont-btn"><button className="btn" onClick={() => buttonAction()}>
    
      <p className="button-value">{buttonValue}</p>
    
    </button>
    </div>
  );

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,


};


export default TimerButton;