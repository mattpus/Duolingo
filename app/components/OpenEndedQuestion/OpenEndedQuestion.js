import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import mascot from '../../../assets/images/mascot.png'
import Button from '../Button'
import PropTypes from 'prop-types'
const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState('')

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect()
    } else {
      onWrong()
    }
  }

  return (
    <>
      <Text style={styles.text}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image style={styles.image} source={mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.textInput}
        placeholder="write text here"
        textAlignVertical="top"
        multiline
      />
      <Button text="Check" onPress={onButtonPress} disabled={!input} />
    </>
  )
}

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }),
  onCorrect: PropTypes.func.isRequired,
  onWrong: PropTypes.func.isRequired
}
export default OpenEndedQuestion

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10
  },
  image: {
    width: '30%',
    aspectRatio: 3 / 4,
    marginRight: 10
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 10
  },
  sentence: {
    fontSize: 16
  },
  textInput: {
    backgroundColor: '#ebebeb',
    alignSelf: 'stretch',
    flex: 1,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16
  }
})
