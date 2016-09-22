import React, { PropTypes } from 'react';

const Cpn = (props) => {
  const { click1, click2, counter1, counter2 } = props;
  return (
    <div>
    aa:{counter1} bb:{counter2}
      <button type="submit" onClick={click1}>click</button>
      <button type="submit" onClick={click2}>click</button>
    </div>
);
};
Cpn.propTypes = {
  click1: PropTypes.func.isRequired,
  click2: PropTypes.func.isRequired,
  counter1: PropTypes.number.isRequired,
  counter2: PropTypes.number.isRequired
};
export default Cpn;
