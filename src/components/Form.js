import React, { PropTypes } from 'react';

const Form = (props) => {
  const { onSubmit } = props;
  return (
    <div>
      <div className="weather-upper">
        <form onSubmit={onSubmit} className="form-weather">
          <h2 className="subtitle">Please Enter your location</h2>
          <div className="field">
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
);
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
