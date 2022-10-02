import {useState, useEffect } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View} from 'react-native';

import ImageMultipleChoiceQuestion from './app/components/ImageMultipleChoiceQuestion';
import OpenEndedQuestion from './app/components/OpenEndedQuestion';
import Header from './app/components/Header';
import questions from './assets/data/allQuestions'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
  const [lives, setLives] = useState(3)
  const [hasLoaded, setHasLoaded] = useState(false)
  
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if(hasLoaded){
    saveData();
    }
  },[lives, currentQuestionIndex, hasLoaded])

  useEffect(()=> {
        if(currentQuestionIndex >= questions.length) {
      Alert.alert("You won!!", "What time shall we go to soho house?")
      setCurrentQuestionIndex(0)
      setLives(5)
      return
    }
    setCurrentQuestion(questions[currentQuestionIndex])
  },[currentQuestionIndex]);

 

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  };

  const restart = () => {
 
      setLives(5)
      setCurrentQuestionIndex(0)

  }
  const onWrong = () => {
    if(lives <= 1){
      Alert.alert("Game over!", "Try again", [
        {
          text: 'Try again', 
          onPress: restart, 
        }
      ])
    }
    setLives(prev => prev -1)
  };
  const saveData = async () => {
    await AsyncStorage.setItem('lives', lives.toString())
    await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString())
  }
  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem('lives')
    if (loadedLives){
      setLives(parseInt(loadedLives))
    }
    const loadedCurrentQuestionIndex = await AsyncStorage.getItem('currentQuestionIndex')
    if (loadedCurrentQuestionIndex){
      setCurrentQuestionIndex(parseInt(loadedCurrentQuestionIndex))
    }
    setHasLoaded(true);
  }
  if (!hasLoaded) {
    return (<ActivityIndicator />)
  }
  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} lives={lives} />
     {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE'? <ImageMultipleChoiceQuestion
      question={currentQuestion}
      onCorrect={onCorrect}
      onWrong={onWrong}
      /> :
      <OpenEndedQuestion 
      question={currentQuestion}
      onCorrect={onCorrect}
      onWrong={onWrong}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40, 
    padding: 20,
  },
});
