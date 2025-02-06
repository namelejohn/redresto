import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import COLORS from '../styles/colors.ts';
import CustomButton from '../components/MyButton.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/ScreenBg.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import {CartItem} from '../stores/MainStore.ts';
import {BORDER_RADIUS} from '../styles/constants.ts';

function generateOrderSummary(cartItems: CartItem[]) {
  const itemsText = cartItems
    .map(
      (item: any) =>
        `${item.name} - ${item.quantity} шт. - $${item.price * item.quantity}`,
    )
    .join('\n');

  return `${itemsText}`;
}

const OrderSuccessScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, clearCart} = productStore;

  const qrCodeValue = generateOrderSummary(cart);

  function navigateToMenu() {
    navigation.navigate('Shop');
    clearCart();
  }

  return (
    <MyImageBg showBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.successText}>
            {'Your order has been successfully placed!'}
          </Text>

          <View style={styles.qrContainer}>
            <QRCode
              backgroundColor={'transparent'}
              value={qrCodeValue}
              size={120}
              color={COLORS.red}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomButton
              onPress={navigateToMenu}
              title={'To Main'}
              containerStyle={styles.buttonContainer}
            />
          </View>
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 150,
    justifyContent: 'center',
  },
  successText: {
    color: COLORS.secondary,
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  qrContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 60,
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  successIcon: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 100,
    zIndex: 9999,
  },
  catImg: {
    width: 400,
    resizeMode: 'contain',
    position: 'absolute',
    top: -height * 0.15,
    left: -180,
  },
});

export default OrderSuccessScreen;
