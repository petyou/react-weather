import React, { PropTypes } from 'react';
import Forecast from './Forecast';
const Weather = (props) => {
  const { data } = props;
  return (
    <div>
      <div className="weather-upper">
        <div className="container">
          <h1 className="title location delay-7">{data.location}</h1>
          <div className="weather-right">
            <div className="inner">
              <h3>{data.condition.text}</h3>
              <h2 className="temperature subtitle delay-9">{data.condition.temp}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="weather-lower">
        {data.forecast.map((forecast, key) =>
          <Forecast key={key} forecast={forecast} />)}
      </div>
    </div>
);
};
Weather.propTypes = {
  data: PropTypes.object
};
export default Weather;
