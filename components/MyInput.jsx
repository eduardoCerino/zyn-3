import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import colors from '../constants/Colors'
import { Image } from 'expo-image';

const MyInput = ({
    placeholder,
    style,
    value,
    onChangeText,
    inputType = "user"
}) => {

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    
    <View style={{ flexDirection:'row' , alignItems:'center'}}>
          <TextInput
              placeholder={placeholder}
              placeholderTextColor={colors.NEUTRAL_MEDIUM}
              style={[styles.input, style, isFocused && styles.focused]}
              value={value}
              onChangeText={onChangeText}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
        
            {
                inputType === 'user' && (
                    <Image
                    source={require('../assets/images/icons/icon-user.png')}
                    style={{width: 20, height: 20, position: 'absolute', left: 15}}
                    />
                )
                }
                {
                inputType === 'email' && (
                    <Image
                    source={require('../assets/images/icons/icon-email.png')}
                    style={{width: 20, height: 20, position: 'absolute', left: 15}}
                    />
                )
               }

{
                inputType === 'date' && (
                    <Image
                    source={require('../assets/images/icons/icon-calendar.png')}
                    style={{width: 20, height: 20, position: 'absolute', left: 15}}
                    />
                )
               }


    </View>     
  )
}

const styles = StyleSheet.create({
    input: {
      width: 200,
      height: 40,
      marginVertical: 12,
      borderWidth: 0.5,
      borderColor: colors.NEUTRAL_SOFT,
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 16,
      paddingLeft: 40,
      color: colors.NEUTRAL_MEDIUM,
    },
    focused: {
      borderColor: colors.ZYN_CORE,
      borderWidth: 1,
    },
});

export default MyInput