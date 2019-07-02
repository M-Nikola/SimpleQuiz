

import React, { Component } from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import { CustomStatusBarWithRoot, ListingItem, CardView, Header, TitleText, Divider, QuestionItems, ButtonElement } from '../component';
import { strings } from '../utils/languageText';    
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import { parseQuizData, parseQuestion, parseData } from '../utils/utility';

class QuestionScreen extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    // const { navigate } = this.props.navigation;
    // navigate('SignUpScreen')
    this.state = {
      isShow: false,
      activeTab: "",
      data:{},
      questionList: [],
      currentIndex: 0,
      questionData:[],
      page:"",
      intro:"",
      selectedQuestion:20,
      currentQuestion:{},
      result:"",
      submitButtonText:"Submit",
      chapterCount:0,
      chapterIndex:0,
      chapterData:{},
      chapterName:"",
      param:{},
      finishchapter:"",
      isCorrect: true,
      isAnswer: false
    };
  }

  componentDidMount(){
    const param = this.props.navigation.state.params;
    const data = this.props.subjectList[param.subject][param.chapter];
    const chapterData = this.props.subjectList[param.subject];
    this.setState({chapterData: parseData(chapterData)});

    const questionData =  parseQuizData(data);
    
    // console.log("questionData", questionData);
    
    
    
    this.setState({questionData,finishchapter: data.finishchapter, chapterCount: param.chapterCount, chapterIndex: param.chapterIndex, param,chapterName: param.chapter}, () => {
      this.setCurrentQuestion();  
    });
    
  }

  setCurrentQuestion(){
    var questionData = this.state.questionData;
    

    const deviceLocal = DeviceInfo.getDeviceLocale();
    const language = deviceLocal.substring(0,2);
    console.log("language",language);
    var currentQuestion = questionData[this.state.currentIndex];
    
    const page = currentQuestion.page;
    
    var languageData = currentQuestion[language];
    
    
    if(languageData){
      currentQuestion = languageData
    } else {
      languageData = currentQuestion["en"]
      if(languageData){
        currentQuestion = languageData
      } 
    }
    const questionList = parseQuestion(currentQuestion);

    if(questionList.length !== 0){
      questionList.push(currentQuestion.correct);
    }
    var submitButtonText = "";
    var result = "";
    var isAnswer = false;
    if(questionList.length === 0){
      isAnswer = true;
      result="Only Infromation Available!"
      submitButtonText = "Next";
    } else {
      isAnswer = false;
      submitButtonText = "Submit";
    }
    currentQuestion.page = page;
    this.setState({questionList: this.shuffle(questionList), isCorrect:true,  currentQuestion, result, selectedQuestion:20, submitButtonText, isAnswer});
  }
  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let rnd = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[rnd];
        arr[rnd] = temp;
    }
    return arr;
}
  openQuestion(){
    this.props.navigation.navigate("ChapterScreen",{returnData:this.returnData.bind(this)});
  }
  returnData(item) {  
    if(item.isHome){
      this.props.navigation.state.params.returnData(item);   
      this.goBack();
    } else {
      
      var chapterIndex = this.state.chapterIndex;
      chapterIndex++;
      if(chapterIndex !== this.state.chapterCount){ 
        const chapter = this.state.chapterData[chapterIndex];
        const data = this.props.subjectList[this.state.param.subject][chapter];
        const questionData =  parseQuizData(data);
        this.setState({currentIndex:0, questionData, isCorrect:true, finishchapter: data.finishchapter, chapterIndex, chapterName: chapter}, () => {
          this.setCurrentQuestion();  
      });
      } else {
        this.props.navigation.state.params.returnData(item);   
        this.goBack(); 
      }
    }
  }
  goBack(){
    this.props.navigation.goBack();
  }

  render() {      
    return (
      <CustomStatusBarWithRoot>
        <Header rightImage={require("./../../images/ic_home.png")} onBackPress={() => {
          this.goBack();
        }}
        onPress={() => {
          const item = {
            isHome: true,
          }
        this.props.navigation.state.params.returnData(item);   
        this.goBack();
        }}>
          Question
        </Header>
        <Divider />
        <ScrollView>
        <View style={{flexDirection:"row", padding:10}}>
            <Text style={{flex:1}}>
                {this.state.chapterName}
            </Text>
            <Text>
                {this.state.currentQuestion.page}
            </Text>
        </View>
      <TitleText name={this.state.currentQuestion.information} buttonStyle={{fontSize:14, textAlign:"left"}}></TitleText>
      
        <View style={styles.container}>
        <TitleText name={this.state.currentQuestion.question} buttonStyle={{fontSize:20, textAlign:"left"}}></TitleText>
          <FlatList
            data={this.state.questionList}
            renderItem={({ item, index }) => (
              <CardView>
                <QuestionItems
                  buttonStyle={{padding:5}}
                  isSelected={this.state.selectedQuestion === index ? true : false}
                  onPress={() => {
                    // if(this.state.result === ""){
                      this.setState({selectedQuestion: index}, ()=> {

                          const arrayList = this.state.questionList.slice();
                          this.setState({questionList: arrayList});
                          
                      });
                    }}
                  // }
                  name={item}
                />
              </CardView>
            )}
          />
        </View>
        <TitleText name={this.state.result === "Only Infromation Available!" ? "" : this.state.result} buttonStyle={{fontSize:14, textAlign:"center", color: this.state.isCorrect ? "green" : "red"}}></TitleText>
        <View style={{alignItems: 'center'}}>
            <ButtonElement style={{margin:20, width:200, fontSize:20}} onPress={() => {
                 
                 const questionData = this.state.questionData;
                
              if(this.state.isAnswer){
                var currentIndex = this.state.currentIndex;
                currentIndex++;
             
                if(questionData[currentIndex] || null !== null){
                  this.setState({currentIndex}, () => {
                    this.setCurrentQuestion();
                  });
                } else { 
                  this.props.navigation.navigate("FinalScreen", {finishchapter: this.state.finishchapter, returnData:this.returnData.bind(this)});
                }
              } else {
                
                if(this.state.currentQuestion.correct === this.state.questionList[this.state.selectedQuestion]){
                  var currentIndex = this.state.currentIndex;
                  currentIndex++;
                  if(questionData[currentIndex] || null !== null){
                    this.setState({submitButtonText:"Next"})
                  } else { 
                    this.setState({submitButtonText:"Submit"})
                  }

                  this.setState({isCorrect: true, result:"Great Job!", isAnswer: true});
                } else {
                  this.setState({isCorrect: false, result:"Oops. Try again.", isAnswer: false});
                }
              }
            }}>{this.state.submitButtonText}</ButtonElement>
        </View>
        </ScrollView>
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
export default connect(mapStateToProps, { })(QuestionScreen);