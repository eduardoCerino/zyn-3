import React, { useRef } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import colors from '../constants/Colors';

const Checkbox = ({
  onPress,
  isChecked,
  containerStyle,
  checkboxStyle,
}) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    const toValue = isChecked ? 0 : 30;
    Animated.timing(animatedWidth, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          startAnimation();
          onPress();
        }}
        style={[
          styles.checkbox,
          isChecked && styles.checkboxSelected,
          checkboxStyle,
        ]}>
        <Animated.View
          style={[
            { width: animatedWidth },
            styles.iconContainer,
          ]}>
          <Icon name="check" size={15} style={{color: colors.ZYN_CORE}} />
        </Animated.View>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: colors.ZYN_DARK,
    borderWidth: 1.2,
    borderRadius: 5,
    height: 20,
    width: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: colors.NEUTRAL_WHITE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  checkboxText: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'GothamNarrow-Light',
    color: colors.NEUTRAL_MEDIUM,
  },
});

export default Checkbox;