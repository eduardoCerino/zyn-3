import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Easing, Image } from 'react-native';

const startRotationAnimation = (durationMs, rotationDegree) => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
};

const LoadingSpinner = ({
  durationMs = 2200,
}) => {
  const rotationDegree = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree);
  }, [durationMs, rotationDegree]);

  return (
    <View style={styles.container} accessibilityRole='progressbar'>
      <View style={[styles.background]}>
        <Image
          source={require('../assets/images/Logo-ZYN-White.png')}
          style={styles.logoImage}
        />
      </View>
      <Animated.View
        style={[
          styles.progress,
          {
            transform: [{
              rotateZ: rotationDegree.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg']
              })
            }]
          }
        ]}
      >
        <Image
          source={require('../assets/images/Loader.png')}
          style={styles.loaderImage}
        />
      </Animated.View>
    </View>
  );
};

const height = 250;

const styles = StyleSheet.create({
  container: {
    width: height,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: height / 2,
    borderWidth: 0,
    position: 'relative',
  },
  progress: {
    width: '100%',
    height: '100%',
    borderRadius: height / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderWidth: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderImage: {
    position: 'absolute',
  },
  logoImage: {
    width: '50%',
    height: '50%',
    top: '25%',
    left: '25%',
    resizeMode: 'contain',
  },
});

export default LoadingSpinner;
