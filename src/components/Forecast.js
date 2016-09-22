import React, { PropTypes } from 'react';

const Forecast = (props) => {
  const { forecast } = props;
  return (
    <div className="forecast-item delay-5">
      <div className="day">{forecast.day}</div>
      <div className="high">{forecast.high}</div>
      <div className="low">{forecast.low}</div>
      <div className="text">{forecast.text}</div>
    </div>
);
};
Forecast.propTypes = {
  forecast: PropTypes.object
};
export default Forecast;
