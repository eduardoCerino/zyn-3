import React, { useState, useEffect } from 'react';
import {  View, StyleSheet, ImageBackground } from 'react-native';
import { database } from '../../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import Colors from '../../constants/Colors';
import LottieView from 'lottie-react-native';
import TemplateBluLinear from '../../templates/TemplateBluLinear';
import { TIME_TO_SHOW_INITIAL_SCREEN , ANIMATION_DURATION } from '../../constants/Time';

const CellPhone3 = () => {
    const [dbValue, setDbValue] = useState();
    const [lottieWinner, setLottieWinner] = useState("");
    const [showInitialScreen, setShowInitialScreen] = useState(false);
    const image = require('../../assets/images/mobile/bg_cellphone3.png')
    const imageJackpot = require('../../assets/images/mobile/jackpot_right.png')

    useEffect(() => {
        setShowInitialScreen(false);
        const notificationRef = collection(database, "cellphone-rewards");
        const unsubscribe = onSnapshot(notificationRef, snapshot => {
            const data = snapshot.docs.map(doc => doc.data());
            setDbValue(data);
            setLottieWinner(data[0]?.imageName);
            setShowInitialScreen(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const onAnimationCompleted = () => {
        setTimeout(() => {
            setShowInitialScreen(true);
        }, TIME_TO_SHOW_INITIAL_SCREEN);
    }

    const InitialScreen = () => {
        return (
            <TemplateBluLinear>
                   <ImageBackground source={image} resizeMode="cover" style={styles.container2}>
                    </ImageBackground>
            </TemplateBluLinear>
        );
    }

    const LottieLataAzul = () => {
        return (
            <LottieView
                autoPlay = {true}
                style={{
                    width: 400,
                    height: 712,
                }}
                source={require('../../assets/lotties/Lata_azul.json')}
                loop={false}
                duration={ANIMATION_DURATION}
                onAnimationFinish={onAnimationCompleted}
            />
        );
    }


    const LottieLataVerde = () => {
        return (
            <LottieView
                autoPlay = {true}
                style={{
                    width: 400,
                    height: 712,
                }}
                source={require('../../assets/lotties/Lata_verde.json')}
                loop={false}
                duration={ANIMATION_DURATION}
                onAnimationFinish={onAnimationCompleted}
            />
        );
    }

    const LottieLataRosa = () => {
        return (
            <LottieView
                autoPlay = {true}
                style={{
                    width: 400,
                    height: 712,
                }}
                source={require('../../assets/lotties/Lata_rosa.json')}
                loop={false}
                duration={ANIMATION_DURATION}
                onAnimationFinish={onAnimationCompleted}
            />
        );
    }

    const LottieLataCafe = () => {
        return (
            <LottieView
                autoPlay = {true}
                style={{
                    width: 400,
                    height: 712,
                }}
                source={require('../../assets/lotties/Lata_cafe.json')}
                loop={false}
                duration={ANIMATION_DURATION}
                onAnimationFinish={onAnimationCompleted}
            />
        );
    }

    const LottieLogoAzul = () => {
        return (
            <LottieView
                autoPlay = {true}
                style={{
                    width: 400,
                    height: 712,
                }}
                source={require('../../assets/lotties/Logo_azul.json')}
                loop={false}
                duration={ANIMATION_DURATION}
                onAnimationFinish={onAnimationCompleted}
            />
        );
    }

    const LottieLogoVerde = () => {
        return (
            <LottieView
                autoPlay = {true}
                style={{
                    width: 400,
                    height: 712,
                }}
                source={require('../../assets/lotties/Logo_verde.json')}
                loop={false}
                duration={ANIMATION_DURATION}
                onAnimationFinish={onAnimationCompleted}
            />
        );
    }

    const LottieLogoRosa = () => {
        return (
            <LottieView
                autoPlay = {true}
                style={{
                    width: 400,
                    height: 712,
                }}
                source={require('../../assets/lotties/Logo_rosa.json')}
                loop={false}
                duration={ANIMATION_DURATION}
                onAnimationFinish={onAnimationCompleted}
            />
        );
    }

    const LottieLogoCafe = () => {
        return (
            <LottieView
                autoPlay = {true}
                style={{
                    width: 400,
                    height: 712,
                }}
                source={require('../../assets/lotties/Logo_cafe.json')}
                loop={false}
                duration={ANIMATION_DURATION}
                onAnimationFinish={onAnimationCompleted}
            />
        );
    }

    return (
        <>
             {dbValue?.length > 0 ?
                <View style={styles.container}>
                    {showInitialScreen ? (
                        <InitialScreen />    
                    ) : (
                        <ImageBackground source={imageJackpot} resizeMode="cover" style={styles.container3}>
                            <View style={styles.container4}>
                                {lottieWinner === 'Lata_azul' ? <LottieLataAzul /> : null}
                                {lottieWinner === 'Lata_verde' ? <LottieLataVerde /> : null}
                                {lottieWinner === 'Lata_rosa' ? <LottieLataRosa /> : null}
                                {lottieWinner === 'Lata_cafe' ? <LottieLataCafe /> : null}
                                {lottieWinner === 'Logo_azul' ? <LottieLogoAzul /> : null}
                                {lottieWinner === 'Logo_verde' ? <LottieLogoVerde /> : null}
                                {lottieWinner === 'Logo_rosa' ? <LottieLogoRosa /> : null}
                                {lottieWinner === 'Logo_cafe' ? <LottieLogoCafe /> : null}
                            </View>
                         </ImageBackground>
                    )}
   
                </View>
                :
                <InitialScreen />
            }                   
        </>
    );
};

const styles = StyleSheet.create({

    container4: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ZYN_CORE,

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
    container3: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: Colors.ZYN_CORE,
        // backgroundColor: 'background: rgba(0, 59, 94, 0.80);',
        // opacity: 0.3,
    },
    slot_bg: {
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    slot_machine: {
        position: 'absolute', // Para colocar encima de SlotBg
        zIndex: 1, // Asegura que está encima de SlotBg
        height: "10vh"
    },
});

export default CellPhone3;
