import {useState} from 'react';

import {StyleSheet, TextProps, TextInput, View} from 'react-native';

import {ThemedText} from './ThemedText';
import Icon from 'react-native-vector-icons/Ionicons';

export type ThemedTextProps = TextProps & {
  label?: string;
  placeholder?: string;
  marginTop: number;
  onEmailChange?: (email: string) => void;
};

export function InputFieldEmail({
  label,
  placeholder,
  marginTop,
  onEmailChange,
}: ThemedTextProps) {
  const [email, setEmail] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (onEmailChange) {
      onEmailChange(text);
    }
  };

  return (
    <View
      style={
        marginTop === 120
          ? {...styles.containerRoot, ...styles.marginTop120}
          : {...styles.containerRoot, ...styles.marginTop20}
      }>
      <ThemedText type="default" style={styles.text}>
        {label}
      </ThemedText>
      <View style={styles.inputContainer}>
        <TextInput
          textContentType="emailAddress"
          placeholder={placeholder}
          placeholderTextColor={'#808080'}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{...styles.input, ...styles.placeholder}}
          onChangeText={handleEmailChange}
          value={email}
        />
        <View style={[styles.tickIcon]}>
          <Icon name="checkmark" size={20} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRoot: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5,
  },
  marginTop120: {
    marginTop: 120,
  },
  marginTop20: {
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  input: {
    height: 56,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 40,
    borderColor: '#D8DADC',
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    fontSize: 16,
  },
  placeholder: {
    fontSize: 16,
  },
  tickIcon: {
    position: 'absolute',
    right: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
