import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { moderateScale } from '../utils/metrics';
import { Image } from 'expo-image';
import { Audio } from 'expo-av';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../constants/Colors';
import TemplateBluLinear from '../templates/TemplateBluLinear';
import IconSettings from '../components/IconSettings';
import ModalSettings from '../components/modal/ModalSettings';
import { router } from 'expo-router';
import Initial from '../Initial';

export default function WelcomeScreen({ navigation }) {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [sound, setSound] = useState();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showFirstImage, setShowFirstImage] = React.useState(true);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(!showFirstImage);
      fadeIn();
      setTimeout(fadeOut, 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, [showFirstImage]);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('../assets/audio/button_pressed.mp3') );
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

const onPressContinue = () => {
  playSound();
  router.push('/Form');
};


// useEffect(() => {
//   const notificationRef = collection(database, "cellphone-rewards");
//   const unsubscribe = onSnapshot(notificationRef, snapshot => {
//       snapshot.forEach(doc => {
//           const data = doc.data();
//           if (data) {
//               deleteDoc(doc.ref)
//               .then(() => {
//                 console.log("Home: Document successfully deleted!");
//               })
//               .catch((error) => {
//                 console.error(" Home: Error removing document: ", error);
//               });
//           }
//       });
      
//   });

//   return () => {
//       unsubscribe();
//   };
// }, []);


  return (
    <Initial>
    <View style={styles.container}>
      <TemplateBluLinear>
        <View style={styles.content}>
          <View style={{ position: 'absolute', top: 50, right: 50 }}>
            {/* <MySwitch
              showBigReward={showBigReward}
              toggleReward={toggleReward}
            />
            <PrimaryButton onPress={() => navigation.navigate("CellPhone2")} title="Celular" buttonType='primary' /> */}
            <IconSettings handlePress={() => setIsModalOpen(true)} />
          </View>
          <View style={styles.imageContainer}>
            <Animated.View style={[{ opacity: fadeAnim }, styles.image]}>
              {showFirstImage ? (
                <Image source={require('../assets/images/Lata-full.png')} style={styles.logo2} />
              ) : (
                <Image source={require('../assets/images/Logo-ZYN-White.png')} style={styles.logo} />
              )}
            </Animated.View>
          </View>
          <Text style={styles.text}>
            SIN HUMO, SIN TABACO ¡ZYN LÍMITES!</Text>
            <View style={{width: '55%'}}>
             <PrimaryButton onPress={onPressContinue} title="Comenzar juego" buttonType='primary'  />
            </View>
        </View>

        <ModalSettings
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title={'Ajustes de la aplicación'}
          navigation={navigation}
        />
      </TemplateBluLinear>
    </View>
    </Initial>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 280,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    marginBottom:  moderateScale(60),
    fontFamily: 'GothamNarrow-Medium',
    color: colors.NEUTRAL_WHITE,
    width: moderateScale(250),

    textAlign: 'center',
  },
  logo: {
    width: 350,
    height:  moderateScale(90),
    marginBottom: 20,
    contentFit: 'contain',
  },
  logo2: {
    width: 422,
    height:  moderateScale(160),
    marginBottom: 20,
    contentFit: 'contain',
  },
});
