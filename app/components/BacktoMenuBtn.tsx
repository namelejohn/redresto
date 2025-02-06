import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../styles/colors.ts';

const BackToMenuBtn = ({
  title,
  onPress,
}: {
  title?: string;
  onPress?: () => void;
}) => {
  const navigation: any = useNavigation();
  const _title = title ?? 'Back to Menu';
  const _onPress = () => {
    onPress && onPress();
    navigation.canGoBack() ? navigation.popToTop() : null;
    navigation.navigate('MenuTab');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={_onPress} style={styles.btnContainer}>
        <Text style={styles.btnTitle}>{_title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: COLORS.inputBg,
    marginBottom: 40,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 13,
  },
  btnTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4E0404',
  },
});

export default BackToMenuBtn;
