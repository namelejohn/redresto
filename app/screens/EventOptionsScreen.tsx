import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../components/ScreenBg.tsx';
import KorzinaButton from '../components/KorzinaButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {eventData} from '../data/data.ts';
import {Event} from '../types';

interface MenuScreenProps {
  navigation: any;
}

const EventOptionsScreen: React.FC<MenuScreenProps> = props => {
  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <View style={styles.menuContainer}>
          <View style={styles.menuItemContainer}>
            {eventData.map(event => (
              <ItemButton key={event.id} event={event} />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScreenBg>
  );
};

const ItemButton = ({event}: {event: Event}) => {
  const navigation: any = useNavigation();
  const [isActive, setIsActive] = React.useState(false);

  function handlePress() {
    navigation.navigate('EventDetail', {event: event});
  }

  function handleHeartPress() {
    setIsActive(!isActive);
  }

  return (
    <Pressable style={styles.menuItem} onPress={handlePress}>
      <TouchableOpacity
        style={{zIndex: 999999, position: 'absolute', top: 25, right: 25}}
        onPress={handleHeartPress}>
        <Image
          source={
            isActive
              ? require('../assets/heart_active.png')
              : require('../assets/heart.png')
          }
        />
      </TouchableOpacity>
      <Image source={event.image} style={styles.img} />
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuText}>{event.title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../assets/calendar.png')} />
          <Text style={styles.menuText}>Date: {event.date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.white,
    textAlign: 'center',
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  menuItem: {
    backgroundColor: '#511414',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
  },
  menuTextContainer: {
    backgroundColor: '#FFA3A3',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    paddingRight: 40,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  menuText: {
    color: '#4E0404',
    fontWeight: 500,
    marginLeft: 4,
  },
  icon: {
    width: 90,
    height: 90,
  },
  iconContainer: {
    alignItems: 'flex-end',
    marginBottom: 60,
    marginRight: 20,
  },
  emptyContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  profileTitleContainer: {
    backgroundColor: COLORS.transparentBg,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  editBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 30,
    alignSelf: 'flex-end',
  },
  emptyText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
  goBasketContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  goBasketButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  goBasketTitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  emptyText1: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 700,
    opacity: 0.5,
  },
  emptyText2: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
  },
  emptyTextContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  menuItemContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  eventTextIcon: {
    width: 150,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -60,
    right: 0,
  },
  appLogo: {
    width: width / 2,
    height: height / 4,
    resizeMode: 'contain',
    marginTop: 60,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  backIconContainer: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 99999,
  },
  img: {
    width: 330,
    height: 165,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default observer(EventOptionsScreen);
