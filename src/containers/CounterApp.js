import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Counter } from 'components';
import * as CounterActions from 'actions/CounterActions';


const CounterApp = (props) => {
  const { counter, actions } = props;
  return (
    <Counter counter={counter} {...actions} />
  );
};

CounterApp.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(CounterActions, dispatch)
  })
)(CounterApp);
