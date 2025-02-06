import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GetInTouchScreen from '../../screens/GetInTouchScreen';
import MyHeader from '../../components/MyHeader';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name="Profile"
        component={GetInTouchScreen}
        options={{
          header: () => <MyHeader title={'Contacts'} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
