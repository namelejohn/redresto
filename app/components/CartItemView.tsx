import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import FastImage from 'react-native-fast-image';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import Counter from './Counter.tsx';
import {BORDER_RADIUS, FONT_WEIGHT} from '../styles/constants.ts';

interface ItemViewProps {
  item: Product;
}

const CartItemView: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus, removeFromCart} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.actionsContainer}>
            <Counter
              isHorizontal
              value={quantity}
              plus={() => handlePlus(item)}
              minus={() => handleMinus(item.id)}
            />
          </View>
        </View>
        <Pressable onPress={() => removeFromCart(item.id)}>
          <Image
            source={require('../assets/remove.png')}
            style={styles.removeIcon}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: COLORS.cardBg,
  },
  imageContainer: {
    width: '30%',
  },
  contentContainer: {
    width: '69%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: 111,
    marginLeft: 3,
    borderRadius: 12,
  },
  infoContainer: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 6,
    marginLeft: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: FONT_WEIGHT,
    color: COLORS.black,
  },
  desc: {
    fontWeight: '400',
    color: COLORS.grayText,
    marginTop: 4,
  },
  price: {
    color: COLORS.textColor,
    fontWeight: FONT_WEIGHT,
    fontSize: 20,
  },
  actionsContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  subTotal: {
    fontWeight: '300',
    color: COLORS.black,
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: BORDER_RADIUS,
  },
  removeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
});

export default observer(CartItemView);
