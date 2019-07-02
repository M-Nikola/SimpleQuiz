/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import React from 'react';

import {name as appName} from './app.json';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';

import Home from './src/screen/Home';
import ChapterScreen from './src/screen/ChapterScreen';
import QuestionScreen from './src/screen/QuestionScreen';
import FinalScreen from './src/screen/FinalScreen';

const RouterData = () => (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="Home" component={Home} />
        <Scene key="ChapterScreen" component={ChapterScreen} title="ChapterScreen"/>
        <Scene key="QuestionScreen" component={QuestionScreen} title="QuestionScreen"/>
        <Scene key="FinalScreen" component={FinalScreen} title="FinalScreen"/>
      </Stack>
    </Router>
  );

export default RouterData;
