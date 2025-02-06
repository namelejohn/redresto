import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import {BORDER_RADIUS} from '../styles/constants.ts';
import FastImage from 'react-native-fast-image';

const ProductItemView = ({item}: {item: Product}) => {
  const {productStore} = useStore();
  const {handlePlus} = productStore;

  const handleAddToCart = () => {
    handlePlus(item);
  };

  return (
    <View style={styles.card}>
      <FastImage source={{uri: item.image}} style={styles.image} />
      <View style={styles.titleContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: width * 0.55,
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.inputBg,
    alignItems: 'center',
  },
  image: {
    width: 152,
    height: 114,
    resizeMode: 'cover',
    borderRadius: 12,
    marginTop: 2,
  },
  header: {
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textColor,
  },
  name: {
    color: COLORS.textColor,
    fontSize: 15,
    fontWeight: '500',
  },
  desc: {
    color: COLORS.grayText,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 4,
  },
  details: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  counterContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  addButton: {
    padding: 10,
    paddingVertical: 4,
    margin: 12,
    borderRadius: 9,
    alignItems: 'center',
    backgroundColor: COLORS.red,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: COLORS.white,
  },
  icon: {
    width: 18,
    height: 18,
  },
  cart: {
    width: 52,
    height: 52,
  },
  weight: {
    color: COLORS.grayText,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    padding: 4,
  },
  priceContainer: {
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS,
  },
});

export default observer(ProductItemView);
