import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/ProductListScreen.tsx';
import OrderScreen from '../../screens/OrderScreen.tsx';
import MyHeader from '../../components/MyHeader.tsx';
import OrderSuccessScreen from '../../screens/OrderSuccessScreen.tsx';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={OrderScreen}
        options={{
          header: () => <MyHeader showBack title={'Cart'} />,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={OrderSuccessScreen}
        options={{
          header: () => <MyHeader showBack title={'Cart'} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
