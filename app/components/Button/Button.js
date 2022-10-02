import { Pressable, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import React from 'react'

const Button = ({text, onPress, disabled}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.container, disabled? styles.disabledContainer : {}]}
    disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired, 
    onPress: PropTypes.func, 
    disabled: PropTypes.bool
}

Button.defatultProps = {
    onPress: () => {}, 
    disabled: false, 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#58CC02",
        height: 50,
        marginVertical: 10,
        alignSelf: 'stretch', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        borderBottomWidth: 5, 
        borderColor: '#57A600',
    },
    disabledContainer: {
        backgroundColor: 'lightgray', 
        borderColor: 'gray',
    },
    text: {
        fontSize: 20, 
        color: 'white', 
        fontWeight: 'bold', 
        borderColor: 'white', 
        borderBottomWidth: 1, 
    }
})

export default Button