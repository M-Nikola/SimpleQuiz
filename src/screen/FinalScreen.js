

import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { CustomStatusBarWithRoot, ListingItem, CardView, Header, TitleText, Progress, ButtonElement } from '../component';
import { strings } from '../utils/languageText';
import { firebaseObject } from "./../firebase/firebase";
import { connect } from 'react-redux';
import { getData } from "./../Action/action";
import { parseData } from '../utils/utility';

var _ = require('lodash');

class FinalScreen extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    // const { navigate } = this.props.navigation;
    // navigate('SignUpScreen')
    this.state = {
      isShow: false,
      activeTab: "",
      langaugeData: [],
      finishchapter:""
    };
  }

  componentDidMount(){
    this.setState({finishchapter: this.props.navigation.state.params.finishchapter});
  }
goBack(item){
    this.props.navigation.state.params.returnData(item);
    this.props.navigation.goBack();
}
  render() {
    return (
      <CustomStatusBarWithRoot>
              
        <View style={styles.container}>
            <TitleText name={this.state.finishchapter} buttonStyle={{fontSize:28}}/>
            <View style={{flexDirection:"row"}}>
                <ButtonElement style={{flex:1, margin:5}} buttonStyle={{fontSize:20}} onPress={() => {
                    const item = {
                        isHome: false,
                    }
                    this.goBack(item);
                }}>Next Chapter</ButtonElement>  
                <ButtonElement buttonStyle={{fontSize:20}} style={{flex:1, margin:5, backgroundColor:"#008000"}} onPress={() => {
                    const item = {
                        isHome: true,
                    }
                    this.goBack(item);
                }}>Home</ButtonElement>  
            </View>            
        </View>
        <Progress isShow={this.props.loading} />
      </CustomStatusBarWithRoot>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center", 
    justifyContent:"center",
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
})(FinalScreen);
