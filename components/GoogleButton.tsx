import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

export function GoogleButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={require('../assets/images/Google.png')}
        style={styles.googleImage}
      />
      <Text style={styles.text}>Log In with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    height: 56,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D8DADC',
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  googleImage: {
    width: 20,
    height: 20,
  },
});
