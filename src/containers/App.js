import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Counter, Cpn } from 'components';
import * as CounterActions from 'actions/CounterActions';
import * as CpnActions from 'actions/CpnActions';
const App = (props) => {
  const { counter, actions, counter3, counter4, actions1 } = props;
  return (
    <div>
      <Cpn counter1={counter3} counter2={counter4} {...actions1} />
      <Counter counter={counter} {...actions} />
    </div>
      );
};
App.propTypes = {
  counter: PropTypes.number.isRequired,
  counter3: PropTypes.number.isRequired,
  counter4: PropTypes.number.isRequired,
  actions: PropTypes.object,
  actions1: PropTypes.object
};

const mapStateToProps = (state) => ({
  counter: state.counter,
  counter3: state.cpn,
  counter4: state.cpn
});

export default connect(
      mapStateToProps,
      dispatch => ({
        actions: bindActionCreators(CounterActions, dispatch),
        actions1: bindActionCreators(CpnActions, dispatch)
      })
    )(App);
