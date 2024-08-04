import {useState} from 'react';

import {
  StyleSheet,
  TextProps,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {ThemedText} from './ThemedText';

export type ThemedTextProps = TextProps & {
  label?: string;
  placeholder?: string;
};

export function InputFieldPassword({label, placeholder}: ThemedTextProps) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.containerRoot}>
      <ThemedText type="default" style={styles.text}>
        {label}
      </ThemedText>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={{...styles.input, ...styles.placeholder}}
          placeholderTextColor={'#808080'}
        />
        <TouchableOpacity
          onPress={toggleSecureTextEntry}
          style={styles.eyeIcon}>
          <Icon
            name={secureTextEntry ? 'eye-off' : 'eye'}
            size={24}
            color="#999999"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRoot: {
    paddingBottom: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: '#000000B2',
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
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
});
