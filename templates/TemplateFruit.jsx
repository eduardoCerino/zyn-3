import React, { useEffect, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Animated } from 'react-native';
import colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';


const TemplateFruit = ({ children }) => {

    const bounceValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const startAnimation = () => {
          Animated.spring(bounceValue, {
            toValue: 1,
            duration: 3000,
            friction: 4,
            useNativeDriver: true
          }).start(() => {
            Animated.timing(bounceValue, {
              toValue: 0,
              duration:3000,
              useNativeDriver: true
            }).start(startAnimation);
          });
        };
    
        startAnimation();
    
        return () => {
          bounceValue.setValue(0);
        };
      }, [bounceValue]);


    return (
        <>
            <LinearGradient
                colors={['#00A9E0', '#041D75']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}>

            
                <View style={{ position: 'absolute', width: 100, height: 100, top: 80, left: 40 }} >
                    <Animated.Image
                        source={require('../assets/images/fruits/pillow.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />

                </View>
                <View style={{ position: 'absolute', top: 200, left: 60, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/cherry.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>
                <View style={{ position: 'absolute', top: 320, left: 120, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/orange.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>
                <View style={{ position: 'absolute', top: 400, left: 20, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/pillow.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />  
                </View>
                <View style={{ position: 'absolute', top: 520, left: 90, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/coffe.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>
                <View style={{ position: 'absolute', top: 620, left: 30, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/Mint.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>

                {children}

                <View style={{ position: 'absolute', bottom: 80, right: 120, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/pillow.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>
                <View style={{ position: 'absolute', bottom: 200, right: 60, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/cherry.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>
                <View style={{ position: 'absolute', bottom: 320, right: 120, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/orange.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>
                <View style={{ position: 'absolute', bottom: 400, right: 20, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/pillow.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>
                <View style={{ position: 'absolute', bottom: 520, right: 90, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/coffe.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>
                <View style={{ position: 'absolute', bottom: 620, right: 30, width: 100, height: 100 }}>
                    <Animated.Image
                        source={require('../assets/images/fruits/Mint.png')}
                        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
                    />
                </View>



                <StatusBar style="auto" />
            </LinearGradient>

        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        zIndex: -1,

    },
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        marginBottom: 50,
        fontFamily: 'GothamNarrow-Medium',
        color: colors.NEUTRAL_WHITE,
        width: '45%',
        textAlign: 'center',
    },
    logo: {
        width: 350,
        height: 120,
        marginBottom: 20,
        resizeMode: 'contain',
    },

    box: {
        marginTop: 32,
        borderRadius: 4,
        backgroundColor: 'red',
    },
});

export default TemplateFruit