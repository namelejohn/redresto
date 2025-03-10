import React from 'react';
import {TextInput, View, Text, StyleSheet, TextInputProps} from 'react-native';
import COLORS from '../styles/colors.ts';

interface CustomInputProps extends TextInputProps {
  label: string;
}

const CustomInput: React.FC<CustomInputProps> = ({label, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor="#9C6262" // Цвет плейсхолдера
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: 600,
    color: COLORS.white,
    marginLeft: 2,
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: '#FFCCCC', // Розовый фон
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10, // Для Android
    paddingHorizontal: 16,
  },
  input: {
    height: 47,
    fontSize: 16,
    color: '#8E5A5A', // Цвет текста
  },
});

export default CustomInput;
