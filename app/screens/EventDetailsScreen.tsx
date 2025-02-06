import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import ScreenBg from '../components/ScreenBg.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Event} from '../types';
import BackToMenuBtn from '../components/BacktoMenuBtn.tsx';

interface MenuScreenProps {
  navigation: any;
  route: any;
}

const eventImages: any = {
  1: require('../assets/event1.png'),
  2: require('../assets/event2.png'),
};

const EventDetailsScreen: React.FC<MenuScreenProps> = props => {
  const {params} = props.route;
  // @ts-ignore
  const event: Event = params?.event;

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <Image
          source={eventImages[event.image]}
          style={{width: '100%', height: 210}}
        />
        <View style={styles.titleBg}>
          <Text style={styles.title}>{event.title}</Text>
        </View>
        <Text style={styles.desc}>{event.desc}</Text>
        <View style={styles.dateContainer}>
          <Image
            source={require('../assets/calendar.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={styles.date}>Date: {event.date}</Text>
        </View>
      </SafeAreaView>
      <BackToMenuBtn title={'Close events'} />
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
  },
  backBtn: {
    paddingTop: 60,
    paddingLeft: 20,
  },
  titleBg: {
    backgroundColor: 'rgba(255, 186, 186, 0.48)',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 800,
    color: '#4E0404',
  },
  desc: {
    fontWeight: 500,
    color: COLORS.white,
    width: '90%',
  },
  date: {
    color: '#FFA3A3',
    fontSize: 20,
    fontWeight: 800,
    marginLeft: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default observer(EventDetailsScreen);
