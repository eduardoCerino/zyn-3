import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'expo-image';


  
const LeverSquare = ( { color, isLeverDown }) => {

    if (color === '#00A9E0' && isLeverDown) {
        return (
            <>
                <Image source={require('../../assets/images/cans/square/square_blue.png')} style={[styles.lever_container]} />
            </>
        )
    }

    //greeen
    if (color === '#B9CF14' && isLeverDown) {
        return (
            <>
                <Image source={require('../../assets/images/cans/square/square_green.png')} style={[styles.lever_container]} />
            </>
        )
    }

    //pink
    if (color === '#C10D7E' && isLeverDown) {
        return (
            <>
                <Image source={require('../../assets/images/cans/square/square_pink.png')} style={[styles.lever_container]} />
            </>
        )
    }

    //coffee
     
    if (color === '#C78660' && isLeverDown) {
        return (
            <>
                <Image source={require('../../assets/images/cans/square/square_coffee.png')} style={[styles.lever_container]} />
            </>
        )
    }

    return (
        <>
            <Image source={require('../../assets/images/lever/container.png')} style={[styles.lever_container]} />
        </>
    )



}
const styles = StyleSheet.create({

    
    lever_container: {
      width: 325,
      height: 325,

    },

  


  
  });

export default LeverSquare