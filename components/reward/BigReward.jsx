import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Image } from 'expo-image';

const BigReward = () => {


  return (
    <View style={styles.container}>

        <View style={styles.mainContainer}>
            {/* <View style={styles.header}>
                <Image source={require('../../assets/images/Logo-ZYN-White.png')} style={styles.logo} />
                <Text style={styles.text}>
                SIN HUMO, SIN TABACO ¡ZYN RESTRICCIONES!
                </Text>    
            </View> */}


            <View style={styles.textContainer}>
             {/* <TextReward  /> */}
             <Image source={require('../../assets/images/rewards/text_big_reward.png')}  style={{ width: 700, height: 300 }} />
            </View>


        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center',

    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        
    },
    logo: {
        width: 160,
        height: 56,
    },
    image_reward: {
        width: 300,
        height: 300,
        marginTop: 60,
    },
    text: {
        fontFamily: 'GothamNarrow-Medium',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
})

export default BigReward