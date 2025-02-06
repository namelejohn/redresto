import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import KorzinaButton from './KorzinaButton.tsx';
import COLORS from '../styles/colors.ts';
import {isAndroid} from '../styles/constants.ts';

const MyHeader = ({
  title,
  showCart = false,
  showMenu = false,
  showBack = false,
}: {
  title: string;
  showCart?: boolean;
  showMenu?: boolean;
  showBack?: boolean;
}) => {
  const navigation: any = useNavigation();

  function navToMenu() {
    navigation.navigate('Menu');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {showBack && (
            <Pressable onPress={navigation.goBack} style={styles.backBtn}>
              <Image
                source={require('../assets/back.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  marginLeft: 10,
                }}
              />
              <Text
                style={{
                  color: '#FFA3A3',
                  fontWeight: 500,
                  fontSize: 15,
                  marginLeft: 2,
                }}>
                BACK
              </Text>
            </Pressable>
          )}
          {showMenu && (
            <Pressable onPress={navToMenu}>
              <Image
                source={require('../assets/menu.png')}
                style={{
                  width: 26,
                  height: 26,
                  resizeMode: 'contain',
                  marginLeft: 10,
                }}
              />
            </Pressable>
          )}
        </View>
        <Text style={styles.headerTitle}>{title}</Text>
        <View
          style={[
            styles.cartContainer,
            !showBack && {marginLeft: -width * 0.2},
          ]}>
          {showCart && <KorzinaButton iconSize={30} />}
        </View>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.headerBg,
    width: width,
    height: width * (isAndroid ? 0.24 : 0.28),
    justifyContent: 'flex-end',
    paddingBottom: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
  backIcon: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: COLORS.headerText,
    marginLeft: -width * 0.2,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FF00FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 18,
    height: 18,
    backgroundColor: 'orange',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnTitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyHeader;
