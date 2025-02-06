import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import ReserveStack from './stacks/ReserveStack.tsx';
import EventsStack from './stacks/EventsStack.tsx';
import ProfileStack from './stacks/ProfileStack.tsx';
import BonusStack from './stacks/BonusStack.tsx';
import MenuStack from './stacks/MenuStack.tsx';
import COLORS from '../styles/colors.ts';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.activeTabColor,
          tabBarInactiveTintColor: COLORS.inActiveTabColor,
          tabBarStyle: {
            backgroundColor: COLORS.tabBarBg,
            paddingBottom: 8,
          },
        }}>
        <Tab.Screen
          name="MenuTab"
          component={MenuStack}
          options={{
            tabBarLabel: 'MENU',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/pizza.png')}
                style={{width: 24, height: 24, tintColor: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="EventsTab"
          component={EventsStack}
          options={{
            tabBarLabel: 'EVENTS',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/serve.png')}
                style={{width: 24, height: 24, tintColor: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ReserveTab"
          component={ReserveStack}
          options={{
            tabBarLabel: 'RESERVE',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/reserve.png')}
                style={{width: 24, height: 24, tintColor: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="BroadcastsTab"
          component={BonusStack}
          options={{
            tabBarLabel: 'BONUSES',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/bonus.png')}
                style={{width: 24, height: 24, tintColor: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}
          options={{
            tabBarLabel: 'CONTACTS',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/contact.png')}
                style={{width: 24, height: 24, tintColor: color}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
