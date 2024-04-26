import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Pressable, PanResponder, Animated } from 'react-native';
import Draggable from 'react-native-draggable';
import { Image } from 'expo-image';

const LeverPuller = ({
    onPressFunction,
    isInserted,
    isBoxOpen,
    isLeverDown,
    setIsLeverDown,
}) => {

    

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [maxY, setMaxY] = useState(200);
    const [initialDegree, setInitialDegree] = useState("0deg");

    // console.log("isInserted", isInserted)
    //  console.log("isBoxOpen", isBoxOpen)
    //  console.log("isLeverDown", isLeverDown)


    const handleRelease = (event, gestureState, bounds) => {
            if ( isInserted) {
                setIsLeverDown(true);
                onPressFunction();
            }
                 
            // if ( isInserted && !isLeverDown ) {
            //     onPressFunction();

            // }       
    }

    const handleMove = (event, gestureState, bounds) => {
        if (isLeverDown) { 
            setMaxY(0);
        }
            
    }

   
    return (
        <>
            <View style={[styles.lever_lever]}>
              {isBoxOpen ? (
                 
                  <Animated.Image
                      source={require('../../assets/images/lever/lever.png')}
                      style={[
                          styles.lever_lever,
                          {
                              transform: [{ rotate: isLeverDown ? '150deg' : initialDegree }],
                              top: isLeverDown ? 200 : 30,
                          }
                      ]}
                  />
              ) : (
                <Draggable
                x={position.x}
                y={position.y}
                minX={0}
                maxX={0}
                minY={0}
                maxY={ isInserted ? maxY : 0}
                onDragRelease={handleRelease}
                onDragMove={handleMove}
            >
                <Animated.Image
                    source={require('../../assets/images/lever/lever.png')}
                    style={[
                        styles.lever_lever,
                        {
                            transform: [{ rotate: isLeverDown ? '150deg' : initialDegree }],
                            top: isLeverDown ? 140 : 30,
                        }
                    ]}
                />
            </Draggable>
              )
            }
            </View>
            <Image source={require('../../assets/images/lever/body.png')} style={styles.lever_body} />
        </>
    );
};

const styles = StyleSheet.create({
    lever_body: {
        width: 80,
        height: 150,
    },
    lever_lever: {
        width: 55,
        height: 120,
        position: 'relative',
        left: 10,
        zIndex: 10,
    },
});

export default LeverPuller;
