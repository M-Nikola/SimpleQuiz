import React from 'react';
import { Animated } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Home from './src/screen/Home';
import ChapterScreen from './src/screen/ChapterScreen';
import QuestionScreen from './src/screen/QuestionScreen';


const MediatorScreen = props => (
    <Home navigation={props.navigation} />
);

const navigationStack = createStackNavigator({
    MediatorScreen: { screen: MediatorScreen },
    ChapterScreen: { screen: ChapterScreen, title: "ChapterScreen" },
    QuestionScreen: { screen: QuestionScreen, title: "QuestionScreen" },
}, { headerMode: "none", navigationOptions: { swipeEnabled: false },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
                timing: Animated.timing
            },
        }),},
);

const App = createAppContainer(navigationStack);
export default App;