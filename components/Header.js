import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Guess Number Game</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#f6f6f6',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingTop:60,

    }
    ,
    headerTitle:{
        fontSize:25
    }
})