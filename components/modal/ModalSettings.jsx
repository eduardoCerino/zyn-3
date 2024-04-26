import React, { useState, useContext } from 'react';
import { Text, View, Animated, Modal, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Image } from 'expo-image';
import PrimaryButton from '../PrimaryButton';
import MySwitch from '../../components/MySwitch';
import { RewardContext } from '../../context/rewardContext';
import { router } from 'expo-router';


export default function ModalSettings({
  isModalOpen,
  setIsModalOpen,
  title = "Titulo",
  navigation,
}) {

  const [buttonSelected, setButtonSelected] = useState('Tablet');
  const { toggleReward, showBigReward } = useContext(RewardContext);

  const handleIzquierda = () => {
    setButtonSelected('Izquierda');
    router.push('/CellPhone1');
  }

  const handleCentro = () => {
    setButtonSelected('Centro');
    router.push('/CellPhone2');

  }

  const handleDerecha = () => {
    setButtonSelected('Derecha');
    router.push('/CellPhone3');
  }

  const handleTablet = () => {
    setButtonSelected('Tablet');
    router.push('/');

  }


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
                style={{ flexDirection: 'row', borderWidth: 1, borderColor: Colors.NEUTRAL_SOFT, borderRadius: 16, paddingVertical: 18, paddingLeft: 18, marginBottom: 30 }}
              >
                
                <View
                  style={{
                    height: '100%',
                    borderRadius: 8,

                  }}
                >

                  <Text
                    style={{
                      fontSize: 16,
                      color: Colors.ZYN_DARK,
                      fontFamily: 'GothamNarrow-Light',

                    }}
                  >
                    Escoge con que dispositivo quieres jugar:

                  </Text>

                  <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 20, gap:10 }}>
                    <PrimaryButton title="Celular izquierdo" style={{ width: '100%' }} buttonType = {buttonSelected === 'Izquierda' ? 'primary' : 'outlined'} onPress={ handleIzquierda } />
                    <PrimaryButton title="Celular centro" style={{ width: '100%' }} buttonType = {buttonSelected === 'Centro' ? 'primary' : 'outlined'} onPress={ handleCentro } />
                    <PrimaryButton title="Celular derecha" style={{ width: '100%' }} buttonType = {buttonSelected === 'Derecha' ? 'primary' : 'outlined'} onPress={ handleDerecha } />
                    <PrimaryButton title="Tablet" style={{ width: '100%' }} buttonType = {buttonSelected === 'Tablet' ? 'primary' : 'outlined'} onPress={ handleTablet } />
                  </View> 

                  <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: "flex-start", marginTop: 20 }}>
                   <Text
                    style={{
                      fontSize: 16,
                      marginTop: 20,
                      color: Colors.ZYN_DARK,
                      fontFamily: 'GothamNarrow-Light',

                    }}
                  >
                    Activar base de datos:
                   </Text>

                   <MySwitch
                      showBigReward={showBigReward}
                      toggleReward={toggleReward}
                    />
                  </View>            
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
    width: '95%',
    height: '98%',
    borderRadius: 20,
    padding: 30,
    paddingBottom: 180,
    borderRadius: 40,
  },
  title: {
    fontSize: 20,
    color: Colors.ZYN_DARK,
    fontFamily: 'GothamNarrow-Medium',
  },


})
