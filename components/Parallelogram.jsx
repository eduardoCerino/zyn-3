import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Svg, { Path, Defs, LinearGradient, Stop, G } from 'react-native-svg';


const Parallelogram = ({
  fill = "#00A9E0",
}) => {
    return (

        // <Svg width={582} height={132} viewBox="0 0 832 132" fill="none" >
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={567}
        height={124}
        fill="none"
        //apply box shadow
        style={{
          shadowColor: '#3a3a3a',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.4,
          shadowRadius: 16,
          elevation: 6,
        }}
      >
        <G filter="url(#a)">
          <Path fill={fill} d="M16 138 78.067 6H551l-49.573 132H16Z" />
        </G>
        <Defs></Defs>
      </Svg>


    )
}



export default Parallelogram