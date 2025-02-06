import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EventMenuScreen from '../../screens/EventOptionsScreen';
import EventScreen from '../../screens/EventDetailsScreen';
import MyHeader from '../../components/MyHeader';

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
        header: () => <MyHeader title={'Events'} />,
      }}>
      <Stack.Screen name="EventMenu" component={EventMenuScreen} />
      <Stack.Screen
        options={{
          header: () => <MyHeader showBack title={'Events'} />,
        }}
        name="EventDetail"
        component={EventScreen}
      />
    </Stack.Navigator>
  );
};

export default EventsStack;
