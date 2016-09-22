import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Weather, Form } from 'components';
import {loadWeatherData,
    loadWeatherDataSuccess,
    loadWeatherDataFailed,
    getCurrentGeoLocation,
    doFetchWeatherData,
    getWoeidByText,
    getWoeidByLocation,
    changeLocation,
    updateLocationOptions,
    changeScreen} from '../actions/HomeActions';
import $ from 'jquery';
import {makeLocationOptions} from '../reducers/queryOptions';

function mapStateToProps(state) {
  return {
    weatherData: state.weatherData,
    queryOptions: state.queryOptions,
    screen: state.screen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    onChangeLocation(event) {
      console.log('');
      dispatch(changeLocation(event.target.value));
    }
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { queryOptions } = stateProps;
  const { dispatch } = dispatchProps;
  return Object.assign({}, ownProps, stateProps, dispatchProps, {
    onRefresh() {
      doFetchWeatherData(dispatch, queryOptions);
    },
    onSubmit(event) {
      event.preventDefault();
      let location = $(event.currentTarget).find('input[type=text]').val()
      doFetchWeatherData( dispatch, dispatch( updateLocationOptions( makeLocationOptions( {'location': location } ) ) ) )
    }
  });
}

const Home = (props) => {
  const { weatherData, queryOptions, request, dispatch, onSubmit, onChangeLocation } = props
  return (
    <div className="weather-app-container">
      <Form onSubmit={onSubmit} />
      <Weather data={weatherData.data} />
    </div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home);
