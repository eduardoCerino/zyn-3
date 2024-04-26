import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/Colors';

const PrimaryButton = ({
  onPress,
  title,
  disabled = false,
  buttonType = 'primary',
  style
}) => {
  let buttonStyle, textStyle, gradientColors, bgColor;

  switch (buttonType) {
    case 'secondary':
      buttonStyle = [styles.button, styles.secondaryButton];
      textStyle = styles.darkText;
      bgColor = '#CDEAFF';
      break;
    case 'outlined':
      buttonStyle = [styles.button, styles.outlinedButton];
      textStyle = styles.darkText;
      bgColor = colors.NEUTRAL_WHITE;
      break;
    case 'disabled':
      buttonStyle = [styles.button, styles.disabledButton];
      textStyle = styles.disabledText;
      bgColor = '#003B5E';
      break;
    default:
      buttonStyle = [styles.button];
      textStyle = styles.appButtonText;
      bgColor = '#00A9E0';
  }

  return (

    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.buttonContainer, style, buttonStyle, { backgroundColor: bgColor }]}>
     
        <Text style={textStyle}>{title}</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60',
    zIndex: 10,

  },
  button: {
    elevation: 8,
    borderRadius: 48,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '100%',
    height: 70,
    boxShadow: '0px -4px 5px 0px rgba(0, 59, 94, 0.56) inset, 0px 4px 5px 0px #97D3FF inset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  secondaryButton: {
    backgroundColor: colors.ZYN_DARK,
    border: '0.5px solid #00A9E0',
  },
  outlinedButton: {
    backgroundColor: colors.NEUTRAL_WHITE, 
    borderWidth: 3,
    borderColor: colors.ZYN_CORE,
  },
  disabledButton: {
    backgroundColor: 'transparent',
    border: '0.5px solid #00A9E0',
  },
  appButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'GothamNarrow-Medium',
    textAlign: 'center',
  },
  darkText: {
    fontSize: 20,
    color:  colors.ZYN_CORE,
    alignSelf: 'center',
    fontFamily: 'GothamNarrow-Medium',
    textAlign: 'center',
  },
  disabledText: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.30)',
    alignSelf: 'center',
    fontFamily: 'GothamNarrow-Medium',
    textAlign: 'center',
  },
});

export default PrimaryButton;
