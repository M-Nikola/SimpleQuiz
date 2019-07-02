

import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { CustomStatusBarWithRoot, ListingItem, CardView, Header, TitleText, Progress } from '../component';
import { strings } from '../utils/languageText';
import { firebaseObject } from "./../firebase/firebase";
import { connect } from 'react-redux';
import { getData } from "./../Action/action";
import { parseData } from '../utils/utility';

var _ = require('lodash');

class Home extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    // const { navigate } = this.props.navigation;
    // navigate('SignUpScreen')
    this.state = {
      isShow: false,
      activeTab: "",
      langaugeData: []
    };
  }
componentDidMount(){
  this.getFirebaseData();  
}

getFirebaseData(){
  this.props.getData(); 
}
openChapterScreen(subjectName){
  this.props.navigation.navigate("ChapterScreen",{subject: subjectName, returnData:this.returnData.bind(this)});
}
returnData(item) {  
  
}
  render() {
    return (
      <CustomStatusBarWithRoot>
        <Header isBackPress={true}>
          Home
        </Header>
      <TitleText name={strings.welCome} buttonStyle={{fontSize:26}} />
      <TitleText name={strings.selectTopic}></TitleText>
      
        <View style={styles.container}>
          <FlatList
            data={parseData(this.props.subjectList)}
            renderItem={({ item }) => (
              <CardView>
                <ListingItem
                  onPress={() => {
                    this.openChapterScreen(item);
                  }}
                  name={item}
                />
              </CardView>
            )}
          />
        </View>
        <Progress isShow={this.props.loading} />
      </CustomStatusBarWithRoot>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = ({ list }) => {
  const { subjectList, error, loading } = list;
	return { subjectList, error, loading };
};
export default connect(mapStateToProps, {
	getData
})(Home);
