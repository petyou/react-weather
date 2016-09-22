import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Cpn } from 'components';
import * as CpnActions from 'actions/CpnActions';


const CpnApp = (props) => {
  const { actions, counter3, counter4 } = props;
  return (
    <Cpn counter1={counter3} counter2={counter4} {...actions} />
  );
};

CpnApp.propTypes = {
  counter3: PropTypes.number.isRequired,
  counter4: PropTypes.number.isRequired,
  actions: PropTypes.object
};

const mapStateToProps = (state) => ({
  counter3: state.cpn.first,
  counter4: state.cpn.second
});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(CpnActions, dispatch)
  })
)(CpnApp);
