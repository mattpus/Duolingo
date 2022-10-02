import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import ProgressBar from '../ProgressBar'
import heart from '../../../assets/images/heart.png'
const Header = ({progress, lives}) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
      <Image source={heart} style={styles.icon} resizeMode="contain"/>
      <Text style={styles.lives}>{lives} </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: 'center'

    }, 
    icon: {
        marginHorizontal: 5, 
        width: 30, 
        height: 30, 
    }, 
    lives: {
        color: 'red', 
        fontWeight: 'bold', 
        fontSize: 16, 
        


    }
})