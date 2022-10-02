import { Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

const ImageOption = ({image, text, isSelected, onPress}) => {
  return (
   
    <Pressable 
    onPress= {onPress}style={[styles.optionContainer, isSelected? styles.selectedContainer : {}]}>
        <Image source={{uri: image}} style={styles.optionImage} resizeMode="contain" /> 
      <Text style={isSelected? styles.selectedText :styles.optionText}>{text}</Text>
  
    </Pressable>
  )
}
ImageOption.propTypes = {
    image: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func
  };
ImageOption.defaultProps = {
    text: "Default", 
    isSelected: false, 
    onPress: () => {},
}
export default ImageOption;

const styles = StyleSheet.create({
    optionContainer: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: 'lightblue',
        borderRadius: 5,
        //size
        width: '48%',
        height: '48%',
        alignItems: 'center', 
        },
    selectedContainer: {
        borderColor: 'blue', 
        backgroundColor: 'lightblue'},
    optionImage: {
        width: '100%', 
        flex: 1,
    }, 
    selectedText: {
        color: 'darkblue',
        padding:10,
    },
    optionText: {
        padding:10, 
    },
})