import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import Checkbox from './CheckBox';
import PrimaryButton from './PrimaryButton';
import ModalText from './modal/ModalText';
import colors from '../constants/Colors';
import FormHeader from './FormHeader';
import { termsAndConditions, privacyPolicy } from '../data/legal';
import LoadingSpinner from './Loader';
import { horizontalScale, moderateScale } from '../utils/metrics';
import { router } from 'expo-router';



const Form = ({ navigation, playSound }) => {

  const [data, setData] = useState({ isAdult: false, termsAndConditions: false})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const clientsCollection = collection(database, 'clients-3')
  const isFormFilled = data.isAdult && data.termsAndConditions;

  const handleSubmit = async () => {
    if (validate()) {
      try {
        playSound();
        setLoading(true)
        const newDocRef = await addDoc(clientsCollection, data)
        router.push('/TriggerScreen');
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }

      setData({ termsAndConditions: false, isAdult: false })
    }
  }

  const validate = () => {
    let errors = {}

    if (data.termsAndConditions === false) errors.termsAndConditions = 'Debes aceptar los términos y condiciones'
    if (data.isAdult === false) errors.isAdult = 'Debes ser mayor de edad'

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const onChangeText = (key, value) => {
    setData({ ...data, [key]: value })
    // validate()   
  }

  const onOpenModal = (type) => {
    setModalType(type)
    setIsModalOpen(!isModalOpen)
  }

  if (loading) return <LoadingSpinner />

  return (
    <View style={{ alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
      
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FormHeader />
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
          <View style={styles.textContainer}>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap:10, width:320 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Checkbox
                    onPress={() => setData({ ...data, isAdult: !data.isAdult })}
                    isChecked={data.isAdult}
                    style={styles.checkbox}
                  />
                  <Text style={[styles.checkboxText]}>Soy mayor de edad y consumidor de nicotina</Text>
                </View>
                
              </View>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap:10 ,width:320 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Checkbox
                    onPress={() => setData({ ...data, termsAndConditions: !data.termsAndConditions })}
                    isChecked={data.termsAndConditions}
                    style={styles.checkbox}
                  />
                  <Text style={[styles.checkboxText]}>He leído y acepto los</Text>
                  <TouchableOpacity onPress={() => onOpenModal('termsAndConditions')}>
                    <Text style={[styles.checkboxText, { color: colors.ZYN_CORE, textDecorationLine: 'underline', fontFamily: 'GothamNarrow-Medium', marginLeft: 4 }]}>Términos y condiciones</Text>
                  </TouchableOpacity>
                </View>
                </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{width: 400}}>

        <PrimaryButton
            title={isFormFilled ? "Continuar" : "Verifica las casillas para continuar"}
            onPress={handleSubmit}
            disabled={!isFormFilled || loading}
            buttonType={isFormFilled ? 'primary' : 'disabled'}
        />
      </View>

        <ModalText
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title={modalType === 'termsAndConditions' ? 'Términos y condiciones' : 'Aviso de privacidad'}
        />
    </View>
  )
}


const styles = StyleSheet.create({


  textContainer: {
    width: moderateScale(280),
     alignItems: 'center',
      gap: 10
  },
  checkboxText: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'GothamNarrow-Light',
    color: colors.NEUTRAL_MEDIUM,
  },
  errorText: {
    color: 'red',
    fontFamily: 'GothamNarrow-Light',
  },
  checkbox: {
    marginHorizontal: 10,
    marginVertical: 12,
  },
  input: {
    width: "80%",
    height: 40,
    marginVertical: 12,
    borderWidth: 0.5,
    borderColor: colors.NEUTRAL_SOFT,
    color: colors.NEUTRAL_MEDIUM,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  formContainer: {
    backgroundColor: colors.NEUTRAL_WHITE,
    padding: 50,
    width: moderateScale(350),
    borderRadius: 40,
    alignItems: 'flex-start',
    flexDirection : 'column',
    justifyContent: 'center',
    marginBottom: 50,
    flexWrap: 'wrap',
    shadowColor: '#003B5E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.56,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 10,

  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    color: colors.ZYN_DARK,
    fontFamily: 'GothamNarrow-Medium',
    fontSize: 16,
  },
})


export default Form