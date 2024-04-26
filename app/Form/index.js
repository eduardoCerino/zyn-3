import React, { useState, useEffect } from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Audio } from 'expo-av';
import Form from '../../components/Form';
import TemplateBluLinear from '../../templates/TemplateBluLinear';


const FormScreen = ({ navigation }) => {

  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/button_pressed.mp3') );
    setSound(sound);
    await sound.playAsync();
}

  useEffect(() => {
    return sound
        ? () => {
            sound.unloadAsync();
        }
        : undefined;
}, [sound]);


  return (

  <KeyboardAvoidingView
  behavior='padding'
  style={styles.container}
>
    <TemplateBluLinear>
      <Form navigation={navigation}  playSound = {playSound} />
      <StatusBar style="auto" />

      </TemplateBluLinear>
  </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    padding: 20,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
 
})


export default FormScreen