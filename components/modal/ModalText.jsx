import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Text, View, Animated, Modal, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { database } from '../../firebaseConfig';
import {  doc, getDoc } from 'firebase/firestore';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function ModalText({
  isModalOpen,
  setIsModalOpen,
  title = "Titulo",
}) {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [descriptionText, setDescriptionText] = useState('')

  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
      completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp'
  });



  const getTermsAndCondition = async () =>{
  
    try {
      setLoading(true)
      const docRef = doc(database, 'legal', 'OQ1pf5BqS3Zlt4aqqtHa')
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        const data = docSnap.data()
        setDescriptionText(data.terms_and_conditions)
        setLoading(false)
      }
      else {
        setLoading(false)
      }
    }
    catch (error) {
      setLoading(false)
    }

  }


  useEffect(() => {
    getTermsAndCondition()
  }
  , []);

  return (
    <>
      <Modal
        visible={isModalOpen}
        animationType='fade'
        transparent={true}
        onRequestClose={() => setIsModalOpen(!isModalOpen)}
      >

        <View style={styles.viewContainer}>
          <View style={styles.modalStyle} >

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
              <Icon name="close" size={30} color={Colors.NEUTRAL_SOFT} onPress={() => setIsModalOpen(!isModalOpen)} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
              <Image source={require('../../assets/images/Vector-small.png')} />
              <Text style={styles.title}> {title}  </Text>
            </View>

            <View style={{ marginVertical: 20 }}>
              <View
                style={{ flexDirection: 'row', borderWidth: 1, borderColor: Colors.NEUTRAL_SOFT, borderRadius: 16, paddingVertical: 16, paddingLeft: 16, marginBottom: 30 }}
              >
                <ScrollView
                  contentContainerStyle={{ paddingRight: 14 }}
                  showsVerticalScrollIndicator={false}
                  scrollEventThrottle={16}
                  onContentSizeChange={(_, height) => {
                    setCompleteScrollBarHeight(height);
                  }}
                  onLayout={({
                    nativeEvent: {
                      layout: { height }
                    }
                  }) => {
                    setVisibleScrollBarHeight(height);
                  }}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
                    { useNativeDriver: false }
                  )}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: Colors.ZYN_DARK,
                      fontFamily: 'GothamNarrow-Light',

                    }}
                  >
                    { descriptionText !== '' ? descriptionText :
                    "Cargando..."
                    }
                  </Text>
                </ScrollView>
                <View
                  style={{
                    height: '100%',
                    width: 8,
                    borderRadius: 8,

                  }}
                >
                  <Animated.View
                    style={{
                      width: 8,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: Colors.ZYN_CORE,
                      backgroundColor: Colors.ZYN_SOFT,
                      height: scrollIndicatorSize,
                      transform: [{ translateY: scrollIndicatorPosition }]
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ flex: 4 }} />
          </View>
        </View>
      </Modal>
    </>
  );
}


const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
  },
  modalStyle: {
    backgroundColor: Colors.NEUTRAL_WHITE,
    width: '80%',
    height: '65%',
    borderRadius: 20,
    padding: 30,
    paddingBottom: 80,
    borderRadius: 40,
  },
  viewText: {

  },

  containerText: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_SOFT,
    borderRadius: 16,
  },
  title: {
    fontSize: 20,
    color: Colors.ZYN_DARK,
    fontFamily: 'GothamNarrow-Medium',
  },


})
