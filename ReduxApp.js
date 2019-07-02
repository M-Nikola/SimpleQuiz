import React from 'react'; 
import Router from './Router';
import {SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

export default class ReduxApp extends React.Component {
  componentDidMount() {
    //   SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}> 
          <Router />
      </Provider>
    );
  }
}