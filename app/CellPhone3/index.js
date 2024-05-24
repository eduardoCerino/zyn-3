import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Animated, ImageBackground } from 'react-native';
import { database } from '../../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { Image } from 'expo-image';
import LottieView from 'lottie-react-native';
import TemplateBluLinear from '../../templates/TemplateBluLinear';
import Colors from '../../constants/Colors';
import { Audio } from 'expo-av';
import { ANIMATION_DURATION, TIME_TO_SHOW_INITIAL_SCREEN } from '../../constants/Time';


const CellPhone3 = () => {
    const bigRewardImages = ['Logo_azul', 'Logo_verde', 'Logo_rosa', 'Logo_cafe'];
    const [dbValue, setDbValue] = useState(); 
    const [lottieWinner, setLottieWinner] = useState();
    const [showWinnerScreen, setShowWinnerScreen] = useState(false);
    const [showInitialScreen, setShowInitialScreen] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);
    const imageLogo = require('../../assets/images/Logo-ZYN-White.png')
    const imageCan = require('../../assets/images/Lata-full.png')
    const imageJackpot = require('../../assets/images/mobile/jackpot_right.png')
    const imageJackpotBigWinner = require('../../assets/images/mobile/jackpot_big_winner.png')
    const imageJackpotNormalWinner = require('../../assets/images/mobile/jackpot_normal_winner.png')
    const showBigReward =  dbValue?.some(item => bigRewardImages.includes(item.imageName));
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [showFirstImage, setShowFirstImage] = React.useState(true);

    useEffect(() => {
        setShowWinnerScreen(false);
        setShowInitialScreen(false);
        const notificationRef = collection(database, "cellphone-rewards-3");
        const unsubscribe = onSnapshot(notificationRef, snapshot => {
            const data = snapshot.docs.map(doc => doc.data());
            setDbValue(data);
            setLottieWinner(data[0]?.imageName);
            setAnimationFinished(false);
            setShowInitialScreen(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

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

  const onAnimationFinish = () => {
    setTimeout(() => {
        setAnimationFinished(true);
    }, TIME_TO_SHOW_INITIAL_SCREEN); // Despues del tiempo mostrar la UI ganadora

    // setTimeout(() => {
    //     setShowInitialScreen(true);
    // }, TIME_TO_SHOW_INITIAL_SCREEN);  //Despues del tiempo mostrar la pantalla inicial
  };

  
    const lottiesSrc = {
        'Lata_azul': require('../../assets/lotties/Lata_azul.json'),
        'Lata_verde': require('../../assets/lotties/Lata_verde.json'),
        'Lata_rosa': require('../../assets/lotties/Lata_rosa.json'),
        'Lata_cafe': require('../../assets/lotties/Lata_cafe.json'),
        'Logo_azul': require('../../assets/lotties/Logo_azul.json'),
        'Logo_verde': require('../../assets/lotties/Logo_verde.json'),
        'Logo_rosa': require('../../assets/lotties/Logo_rosa.json'),
        'Logo_cafe': require('../../assets/lotties/Logo_cafe.json'),
    };

    const WinnerScreen = () => {
        return (
            <View style={{flex: 1, backgroundColor: Colors.ZYN_CORE}}>
              {
                showBigReward ?  
                (
                    <ImageBackground source={imageJackpotBigWinner} style={styles.container2}/>
                )
                : (
                    <ImageBackground source={imageJackpotNormalWinner}  style={styles.container2}/>
                )
              }
            </View>
        
        );
    }

    const image = require('../../assets/images/mobile/bg_cellphone3.png')

    const InitialScreen = () => {
        return (
            <TemplateBluLinear>
                 <ImageBackground source={image}  style={styles.containerInitial}/>
          
            </TemplateBluLinear>
        );
    }
  
    
    

    return (
        <>
            {dbValue?.length > 0  ?
            <>
               { 
                    !animationFinished ? (
                        <ImageBackground source={imageJackpot} resizeMode="cover" style={styles.container3}>
                        <View style={styles.container4}>
                            {
                            lottieWinner !== undefined ? (
                                <LottieView
                                    autoPlay = {true}
                                    style={{
                                        width: 400,
                                        height: 718,
                                    }}
                                    // source={require('../assets/lotties/Jackpot-coffee.json')}
                                    //source dinamico en base a lottieWinner.json, dont use concatenation
                                    source={lottiesSrc[lottieWinner]}
                                    loop={false}
                                    duration={ANIMATION_DURATION}
                                    onAnimationFinish={onAnimationFinish}
                                />
                            ) : null
                            }
                        </View>
                     </ImageBackground>
                    ) : null
                }
                {
                    animationFinished ? (
                        <>
                          {/* {  showInitialScreen ? ( <InitialScreen /> ) : <WinnerScreen /> } */}
                          <InitialScreen />
                          
                        </>
                    ) : null
                }

                  
            </>
                
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
    
    imageContainer: {
        height: 200,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

        
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
    image: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

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

    containerInitial: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    }
    ,
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

    logo: {
        width: 330,
        minHeight: 200,
        contentFit: 'contain',
        padding: 0,
        margin: 0,

    },
    logo2: {
        width: 450,
        height: 200,
        contentFit: 'contain',
    },
});

export default CellPhone3;
