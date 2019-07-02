/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ReduxApp from './ReduxApp';

import Router from './Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReduxApp);
