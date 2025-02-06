import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import COLORS from '../styles/colors.ts';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  secondTitle?: string;
  containerStyle?: ViewStyle;
  outline?: boolean;
  isDisabled?: boolean;
  iconUrl?: any;
}

const MyButton = ({
  onPress,
  title,
  secondTitle,
  containerStyle,
  outline,
  isDisabled,
  iconUrl,
}: CustomButtonProps) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[
        styles.button,
        outline && styles.outline,
        isDisabled && styles.disabled,
        containerStyle,
      ]}
      onPress={onPress}>
      <View style={styles.titleContainer}>
        {iconUrl ? <Image source={iconUrl} style={styles.icon} /> : null}
        <Text style={[styles.buttonText, outline && styles.outlineText]}>
          {title}
        </Text>
      </View>
      {secondTitle && (
        <Text style={[styles.buttonText, outline && styles.outlineText]}>
          {secondTitle}
        </Text>
      )}
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.buttonBg,
    borderRadius: 32,
    paddingVertical: 18,
    paddingHorizontal: 8,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 20,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  outlineText: {
    color: COLORS.primary,
    fontWeight: '300',
  },
  disabled: {
    opacity: 0.5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
