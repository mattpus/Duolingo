import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <View style={styles.bg}>
     <View style={[styles.fg, {width: `${progress * 100}%`}]}>
        <View style={styles.highlight}/>
     </View>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'lightgrey', 
        height: 15, 
        flex: 1, 
        borderRadius: 15, 
    }, 
    fg: {
        flex: 1, 
        backgroundColor: '#FAC800', 
        borderRadius: 15, 
    },
    highlight: {
        backgroundColor: '#FAD131', 
        width: '90%', 
        height: 3, 
        borderRadius: 3, 
        marginTop: 3, 
        alignSelf: "center", 

    }
})