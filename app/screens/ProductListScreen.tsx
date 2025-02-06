import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, TextInput, View} from 'react-native';
import {Product} from '../types';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from '../components/ProductItemView.tsx';
import ScreenBg from '../components/ScreenBg.tsx';
import Filter from '../components/Filter.tsx';
import KorzinaButton from '../components/KorzinaButton.tsx';

interface HomeScreenProps {
  navigation: any;
}

const ProductListScreen: React.FC<HomeScreenProps> = props => {
  const {productStore} = useStore();
  const {loadProducts, filteredProducts, activeFilter, setFilter} =
    productStore;

  useEffect(() => {
    loadProducts();
  }, []);

  const renderItem = ({item}: {item: Product}) => <ProductCard item={item} />;

  return (
    <ScreenBg showBg>
      <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
        <View
          style={{
            backgroundColor: 'rgba(255, 212, 212, 0.28)',
            borderRadius: 33,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginHorizontal: 12,
            marginBottom: 10,
          }}>
          <TextInput
            placeholderTextColor={'#4E0404'}
            placeholder={'SEARCH'}
            style={{width: '90%', fontSize: 16, fontWeight: 600}}
          />
          <Image
            source={require('../assets/search.png')}
            style={{width: 25, height: 25}}
          />
        </View>
        <Filter activeFilter={activeFilter} onSelect={setFilter} />
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
        <View style={{position: 'absolute', right: 20, bottom: 30}}>
          <KorzinaButton iconSize={75} />
        </View>
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
  },
  container: {
    paddingTop: 16,
    paddingBottom: 400,
  },
  image: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: 'gray',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.white,
    fontWeight: '600',
    margin: 20,
  },
  headerImgContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  cartBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  cartBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 6,
  },
  cartBtnWrapContainer: {
    marginRight: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cartIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default observer(ProductListScreen);
