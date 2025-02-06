import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../components/ScreenBg.tsx';
import {INPUT_BORDER_RADIUS} from '../styles/constants.ts';
import CustomInput from '../components/CustomInput.tsx';

const dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
const GetInTouchScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('MenuTab');
  };

  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <Formik
          initialValues={{
            phone: '',
            address: '',
            index: '',
            date: '',
            comments: '',
          }}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View style={styles.formContainer}>
              <CustomInput
                label={'Phone number'}
                style={styles.input}
                placeholder="Phone number"
                placeholderTextColor={COLORS.grayText}
                value={values.phone}
                onChangeText={handleChange('phone')}
              />
              <CustomInput
                label={'Index'}
                style={styles.input}
                placeholder="Index"
                placeholderTextColor={COLORS.grayText}
                value={values.index}
                onChangeText={handleChange('index')}
              />
              <CustomInput
                label={'Address'}
                style={styles.input}
                placeholder="Address"
                placeholderTextColor={COLORS.grayText}
                value={values.address}
                onChangeText={handleChange('address')}
              />
              <CustomInput
                label={'Date'}
                style={styles.input}
                placeholder="Date"
                placeholderTextColor={COLORS.grayText}
                value={values.date}
                onChangeText={handleChange('date')}
              />
              <CustomInput
                label={'Comments'}
                style={styles.input}
                placeholder="Comments"
                placeholderTextColor={COLORS.grayText}
                value={values.comments}
                onChangeText={handleChange('comments')}
              />
            </View>
          )}
        </Formik>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={handleSubmit} style={styles.btnContainer}>
            <Text style={styles.btnTitle}>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.white,
    marginLeft: 20,
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 6,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  inputContainer: {
    height: 55,
    borderRadius: INPUT_BORDER_RADIUS,
    borderColor: COLORS.secondary,
    overflow: 'hidden',
    paddingHorizontal: 10,
    backgroundColor: COLORS.inputBg,
  },
  input: {
    flex: 1,
    color: COLORS.black,
    paddingHorizontal: 20,
    fontStyle: 'italic',
  },
  topTitle: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 20,
  },
  icon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  iconContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    zIndex: -1,
  },
  btnContainer: {
    backgroundColor: COLORS.inputBg,
    marginBottom: 40,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 13,
  },
  btnTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4E0404',
  },
});

export default GetInTouchScreen;
