import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { database } from '../../firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore'
import { RewardContext } from '../../context/rewardContext'
import { Audio } from 'expo-av';
import PrimaryButton from '../../components/PrimaryButton'
import TemplateRadial from '../../templates/TemplateRadial'
import BigReward from '../../components/reward/BigReward'
import LottieView from 'lottie-react-native';
import NormalReward from '../../components/reward/NormalReward'
import { router, useLocalSearchParams } from 'expo-router';
import { TIME_TO_SHOW_INITIAL_SCREEN } from '../../constants/Time';


const RewardScreen = ({ route, navigation }) => {

    const [sound, setSound] = useState();
    const { showBigReward, setShowBigReward } = useContext(RewardContext);
    const image = require('../../assets/images/rewards/bg_big_reward.png')
    const [showButton, setShowButton] = useState(false);
    const params = useLocalSearchParams();
    const { documentId } = params;

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/big_reward.mp3')
        );
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

    useEffect(() => {
        playSound();
        const timer = setTimeout(() => {
            setShowButton(true);
            handleResetReward()
        }, TIME_TO_SHOW_INITIAL_SCREEN * 2 ); // Depues del tiempo aparecera el boton y en la base de datos no habra nada

        return () => clearTimeout(timer);
    }, []);

    const handleResetReward = () => {
        const docRef = doc(database, "cellphone-rewards", documentId);
        deleteDoc(docRef)
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
    }

    const onPressContinue = () => {
        router.push('/')
        setShowBigReward(false)
    }

    return (
        <TemplateRadial>
            <View style={styles.container2}>

                {showButton ? (
                         <PrimaryButton title="Jugar de nuevo" onPress={onPressContinue} /> 
                ): null}

                {showBigReward ? (
                    <View style={[styles.container2, { opacity: showButton ? 0.1 : 1 }]}>
                        <LottieView
                            source={require('../../assets/lotties/Confetti.json')}
                            autoPlay={true}
                            loop={true}
                            resizeMode='cover'
                            style={{ width: "100%", height: "100%" }}
                        />
                        <ImageBackground source={image}  style={styles.container2}>
                            <BigReward />
                        </ImageBackground>
                    </View>
                ) : (
                    <View style={[styles.container2, { opacity: showButton ? 0.1 : 1 }]}>
                        <LottieView
                            source={require('../../assets/lotties/Confetti.json')}
                            autoPlay={true}
                            loop={true}
                            resizeMode='cover'
                            style={{ width: "100%", height: "100%" }}
                        />
                        <ImageBackground source={image} resizeMode="cover" style={styles.container2}>
                            <NormalReward />
                        </ImageBackground>
                    </View>
                )}
            </View>
        </TemplateRadial>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
    },
    container2: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        // backgroundColor: 'background: rgba(0, 59, 94, 0.80);',
        // opacity: 0.3,
    },
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        fontFamily: 'GothamNarrow-Light',

    },
    errorText: {
        color: 'red',
        fontFamily: 'GothamNarrow-Light',
    },
    checkbox: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
})


export default RewardScreen