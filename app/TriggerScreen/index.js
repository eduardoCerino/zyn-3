import React, { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from 'expo-av';
import { Image } from 'expo-image';
import { database } from "../../firebaseConfig";
import { addDoc, collection, deleteDoc, getCountFromServer, getDocs } from "firebase/firestore";
import { RewardContext } from "../../context/rewardContext";
import DragAndDrop from "../../components/drag/DragAndDrop";
import Parallelogram from "../../components/Parallelogram";
import Colors from "../../constants/Colors";
import LeverPuller from "../../components/lever/LeverPuller";
import LeverSquare from "../../components/lever/LeverSquare";
import { router } from "expo-router";
import { ANIMATION_DURATION } from "../../constants/Time";


export function TriggerScreen({ navigation}) {

  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync( require('../../assets/audio/click.mp3')
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


  const [positionLeft, setPositionLeft] = useState(90);
  const [isInserted, setIsInserted] = useState(false);

  useEffect(() => {
      setIsInserted(false);
      setPositionLeft(90);
  }, []);


  const [items, setItems] = React.useState([
    { id: 1, image: require("../../assets/images/cans/can_mint.png"), style: { position: "relative", left: 0 } },
    { id: 2, image: require("../../assets/images/cans/can_citrus.png"), style: { position: "relative", left: positionLeft } },
    { id: 3, image: require("../../assets/images/cans/can_expressino.png"), style: { position: "relative", left: 0 } },
    { id: 4, image: require("../../assets/images/cans/can_cherry.png"), style: { position: "relative", left: positionLeft } },

  ]);
  const [zones, setZones] = React.useState([
    {
      id: 1,
      items: [{ id: 5, image: require("../../assets/images/cans/can_mint.png") }],
    },
  ]);

  const [colors, setColors] = useState(['#00A9E0', '#041D75']);

  const handleColorChange = (itemId) => {
    if (itemId === 1) {
      setColors(['#00A9E0', '#041D75']);
    }
    if (itemId === 2) {
      setColors(['#B9CF14', '#B9CF14']);
    }
    if (itemId === 3) {
      setColors(['#C78660', '#C78660']);
    }
    if (itemId === 4) {
      setColors(['#C10D7E', '#C10D7E']);
    }
    if (itemId === 5) {
      setColors(['#00A9E0', '#041D75']);
    }
  }

  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const leftValue = useRef(new Animated.Value(85)).current;
  const [loading, setLoading] = useState(false);
  const notificationCollection = collection(database, "cellphone-rewards");
  // const showBigReward = true
  const { showBigReward } = useContext(RewardContext);

    const smallRewardImages = ['Lata_azul', 'Lata_verde', 'Lata_rosa', 'Lata_cafe', 'Lata_azul', 'Lata_verde'];
    const bigRewardImages = ['Logo_azul', 'Logo_verde', 'Logo_rosa', 'Logo_cafe'];
    const imageNames = showBigReward ? bigRewardImages : smallRewardImages;
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    const randomImageName = imageNames[randomIndex];

    const deletAllDocuments = async () => {
      const querySnapshot = await getDocs(collection(database, "cellphone-rewards"));
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    }

    const handleSubmit = () => {
      setLoading(true);
      getCountFromServer(notificationCollection)
        .then(snapshot => {
          console.log(snapshot.data().count);
          if (snapshot.data().count > 0) {
            deletAllDocuments()
              .then(() => {
                addDoc(notificationCollection, { imageName: randomImageName })
                  .then((newDocRef) => { 
                    setTimeout(() => {
                      navigation.navigate('Reward', { documentId: newDocRef.id });
                      router.push({
                        pathname: '/Reward',
                        params: { documentId: newDocRef.id }
                      })
                      
                    }, ANIMATION_DURATION + 1500); // Le añado 1.5 segundos mas por el delay de la base de datos
                  });
              });
          } else {
            addDoc(notificationCollection, { imageName: randomImageName })
              .then((newDocRef) => { 
                setTimeout(() => {
                  router.push({
                    pathname: '/Reward',
                    params: { documentId: newDocRef.id }
                  })
                }, ANIMATION_DURATION + 1500); // Le añado 1.5 segundos mas por el delay de la base de datos
              });
          }
        });
    };
    
    


  const onPressFunction = () => {
    
    if (isInserted) {
      setIsBoxOpen(true);
      const newValue = isBoxOpen ? 85 : 35;
      Animated.timing(leftValue, {
        toValue: newValue,
        duration: 500,
        useNativeDriver: false
      }).start();

      setTimeout(() => {
       handleSubmit();
      }, 1000);
    }
  };


  const [isLeverDown, setIsLeverDown] = useState(false);


    return (
      <LinearGradient
        colors={colors}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.containerMain}
      >
        <DragAndDrop
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}
          itemKeyExtractor={(item) => item.id}
          zoneKeyExtractor={(zone) => zone.id}
          zones={zones}
          items={items}
          onMaj={(zones, items) => {
            zones.forEach(zone => {

              if (zone.items.length > 1) {
                handleColorChange(zone.items[1].id);
                setPositionLeft(0);
                setIsInserted(true);
                playSound()

              } else {
                setColors(['#00A9E0', '#041D75']);
                setPositionLeft(90);
                setIsInserted(false);
                setIsBoxOpen(false);
                setIsLeverDown(false);
                leftValue.setValue(85);
              }
            });
          }}
          itemsInZoneNumCollumns={2}
          maxItemsPerZone={2}
          itemsDisplay="column"
          itemsNumCollumns={3}
          renderItem={(item) => {
            return (
              item.id === 5 ? <View style={{ display: "none" }}></View> :
                <View style={[styles.imageStyle]} >
                  <View style={[styles.imageStyle]}>
                    {item.style.left === 0 ?
                      <Image source={item.image} style={[styles.imageStyle, { position: "relative", left: item.style.left }]} /> :
                      <Image source={item.image} style={[styles.imageStyle, { position: "relative", left: positionLeft }]} />
                    }
                  </View>
                </View>
            );
          }}
          renderZone={(zone, children, hover) => {
            return (

              <View style={styles.dropZoneContainer}>
                <View style={styles.parallelogramContainer}>
              
                  <Parallelogram fill={colors[0]} />
                  <Text style={styles.text}>Arrastra y suelta un sabor para comenzar</Text>
                </View>
                <View style={styles.leverContainer}>
                  <View style={styles.leverContainerChildren}>
                    
                    <LeverSquare color = {colors[0]} isLeverDown ={isLeverDown} />

                    <Animated.View style={[styles.childrenContainer, { left: leftValue }]}>
                      {children}
                    </Animated.View>

                    {/* <Image source={require('../assets/images/cans/open.png')} style={styles.lever_open} /> */}
                    {
                      isInserted && isLeverDown ?
                      <Image source={require('../../assets/images/cans/open.png')} style={styles.lever_open} /> : null
                    }

                  </View>
                  <View style={styles.rightSide}>
                     <LeverPuller onPressFunction={onPressFunction} isInserted={isInserted} isBoxOpen={isBoxOpen} isLeverDown={isLeverDown} setIsLeverDown={setIsLeverDown} />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </LinearGradient>
    );
  }

  export default TriggerScreen;

  const styles = StyleSheet.create({

    childrenContainer: {
      position: 'absolute',
      left: 85,
      top: 85,
      zIndex: 1000,
    },
    lever_open: {
      position: 'absolute',
      left: 85,
      top: 85,
      width: 155,
      height: 155,
    },

    leverContainerChildren: {
      flexDirection: 'row',
      alignItems: 'center',
    },


    containerMain: {
      flex: 1,
      padding: 20,
      paddingTop: 30,
      paddingHorizontal: 65,

    },

    dropZoneContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    parallelogramContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    text: {
      color: Colors.NEUTRAL_WHITE,
      fontFamily: 'GothamNarrow-Medium',
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20,
      width: '70%',
      position: 'absolute',
      top: 30,

    },

    leverContainer: {
      flexDirection: 'row',
      alignItems: 'center',

    },

    rightSide: {
      alignItems: 'center',
      justifyContent: 'center',

    },

    lever_lever: {
      width: 55,
      height: 120,
      position: 'relative',
      left: 10,
      top: 20,
      zIndex: 10,
      // transformOrigin: '45% 105%',
      transformOrigin: ["45%", "105%", 0],

    },

    lever_lever_down: {
      transform: [{ rotate: '180deg' }],
    },


    lever_body: {
      width: 85,
      height: 150,
    },
    imageStyle: {
      width: 155,
      height: 155,
      marginBottom: 0,
      zIndex: 1000,



    },
    container: {
      flex: 1,


    },

    contentContainerStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flex: 1

    },
    dragItemStyle: {
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 5,
      backgroundColor: "red",
      padding: 10,

    },
    dragItemTextStyle: {
      color: "red",
      fontWeight: "700",
      textAlign: "center",
    },
    dragZoneStyle: {
      borderWidth: 1,
      padding: 15,
      backgroundColor: "red",

    },
  });