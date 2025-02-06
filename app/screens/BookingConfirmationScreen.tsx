import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyButton from '../components/MyButton.tsx';
import COLORS from '../styles/colors.ts';
import ScreenBg from '../components/ScreenBg.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';
import QRCode from 'react-native-qrcode-svg';
import BackToMenuBtn from '../components/BacktoMenuBtn.tsx';

const BookingConfirmationScreen = ({navigation, route}: any) => {
  const navToMain = () => {
    navigation.navigate('Shop');
  };

  const table = route.params?.table ?? '';

  return (
    <ScreenBg showBg>
      <Image source={require('../assets/reserve.png')} style={styles.catImg} />
      <SafeAreaView edges={['top']} style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Done!</Text>
          <Text
            style={
              styles.subtitle
            }>{`Table number ${table} has been\nsuccessfully reserved.`}</Text>
          <View style={styles.qrContainer}>
            <QRCode
              backgroundColor={'transparent'}
              value={`Table number ${table} has been\nsuccessfully reserved.`}
              size={160}
              color={'#FFA3A3'}
            />
          </View>
          <Text style={styles.bottomTitle}>
            Present the qr code at the entrance
          </Text>
        </View>
      </SafeAreaView>
      <BackToMenuBtn />
    </ScreenBg>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    zIndex: 99999,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 80,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 800,
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 20,
    marginBottom: 20,
  },
  bottomTitle: {
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 20,
    opacity: 0.7,
  },
  icon: {
    width: 280,
    height: 200,
    position: 'absolute',
    top: height / 5,
    left: width / 8,
  },
  buttonContainer: {
    marginBottom: 40,
    marginTop: 10,
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  linearContainer: {
    alignItems: 'center',
  },
  imgContainer: {
    alignSelf: 'center',
  },
  catImg: {
    width: 400,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -60,
    left: -180,
    opacity: 0.3,
    zIndex: 0,
  },
  qrContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default BookingConfirmationScreen;
