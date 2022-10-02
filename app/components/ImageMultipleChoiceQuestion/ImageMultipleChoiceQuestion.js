import { View, Text, StyleSheet } from 'react-native'
import ImageOption from '../ImageOption'
import React, {useState} from 'react'
import Button from '../Button';
import PropTypes from 'prop-types'


const ImageMultipleChoiceQuestion = ({question, onCorrect, onWrong}) => {
    const [selected, setSelected] = useState(null);

    function onButtonPress(){
        if(selected.correct) {
          onCorrect()
          setSelected(null)
        }else {
          onWrong()
        }
      }

  return (
    <>
        <Text style={styles.title}>{question.question}</Text>
            <View style={styles.optionsContainer} >
                {question.options.map(options =>
                    (<ImageOption 
                    key={options.id}
                    image={options.image}
                    text={options.text} 
                    isSelected={selected?.id === options.id}
                    onPress={() => (setSelected(options))}
                />))}
            </View>
        <Button  text="Check" onPress={onButtonPress} disabled={!selected}/>
    </>
  )
}

export default ImageMultipleChoiceQuestion

const {shape, bool, string, arrayOf} = PropTypes

ImageMultipleChoiceQuestion.propTypes = {
    question: shape({
        question: string.isRequired,
        options: arrayOf(
            shape({
                id: string, 
                text: string, 
                image: string, 
                correct: bool,
            })
        ).isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    title: {
      fontSize: 20, 
      fontWeight: 'bold',
      alignSelf: "stretch",
      paddingBottom: 10,
    }, 
    optionsContainer: {
      flex: 1,
      width: '100%', 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      justifyContent: 'space-between',
      alignContent: 'space-between'
    }})