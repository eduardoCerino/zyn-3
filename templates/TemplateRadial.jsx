import React from 'react'
import { View, StyleSheet } from 'react-native';
import { RadialGradient } from 'react-native-gradients';

const TemplateRadial = ({ children }) => {

    const colorList = [
        { offset: '0%', color: '#00A9E0', opacity: '1' },
        { offset: '100%', color: '#041D75', opacity: '1' }
    ]

    return (
        <View style={[styles.gradientBg]}>
            <RadialGradient colorList={colorList} angle={90} >
            </RadialGradient>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    gradientBg: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,


    },
});

export default TemplateRadial