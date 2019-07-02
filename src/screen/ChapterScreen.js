

import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { CustomStatusBarWithRoot, ListingItem, CardView, Header, TitleText } from '../component';
import { strings } from '../utils/languageText';    
import { connect } from 'react-redux';
import { parseDataChapter } from '../utils/utility';


class ChapterScreen extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    // const { navigate } = this.props.navigation;
    // navigate('SignUpScreen')
    this.state = {
      isShow: false,
      activeTab: "",
      langaugeData: ["Chapter 1", "Chapter 4", "Chapter 3","Chapter 4"]
    };
  }
  componentDidMount(){
    const data = this.props.subjectList[this.props.navigation.state.params.subject];
    console.log("data", data);
    
    const langaugeData = parseDataChapter(data);
   
    this.setState({langaugeData , welcome:data.welcome});
  }
  goBack(){
    this.props.navigation.goBack();
  }
  openQuestion(item, index){
    this.props.navigation.navigate("QuestionScreen", {chapter: item, chapterIndex:index, chapterCount: this.state.langaugeData.length, subject: this.props.navigation.state.params.subject, returnData:this.returnData.bind(this)});
  }
  returnData(item) {  
    if(item.isHome){
      this.props.navigation.state.params.returnData(item);   
      this.goBack();
    }
  }
  render() {
    return (

      <CustomStatusBarWithRoot>
        <Header onBackPress={() => {
          this.goBack();
        }}>
          Chapter
        </Header>
        <TitleText name={this.state.welcome} buttonStyle={{fontSize:26}} />
      <TitleText name={strings.selectChapter}></TitleText>
      
        <View style={styles.container}>
          <FlatList
            data={this.state.langaugeData}
            renderItem={({ item, index }) => (
              <CardView>
                <ListingItem
                onPress={() => {
                    this.openQuestion(item, index);
                  }}
                  buttonStyle={{padding:5}}
                  name={item}
                />
              </CardView>
            )}
          />
        </View>
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
export default connect(mapStateToProps, { })(ChapterScreen);
  
