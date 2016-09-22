import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';


/**
 * react router hot reload hack
 */
Router.prototype.componentWillReceiveProps = (nextProps) => {
  const components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  if (module.hot) {
    grabComponents(nextProps.routes || nextProps.children);
    components.forEach(React.createElement); // force patching
  }
};

const Root = (props) => {
  const { store, history } = props;

  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired
};

export default Root;
