import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import {AuthHeading} from '../../components/auth/AuthHeading';
import {AuthFooter} from '../../components/auth/AuthFooter';
import {InputFieldEmail} from '../../components/InputFieldEmail';
import {InputFieldPassword} from '../../components/InputFieldPassword';
import {Button} from '../../components/Button';
import {GoogleButton} from '../../components/GoogleButton';

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerChild}>
        <AuthHeading
          firstText="Sign up"
          secondText=""
          isHelloWaveVisible={false}
          containerHeight={50}
          isLoginPage={false}
        />
        <InputFieldEmail
          label="Email"
          placeholder="example@gmail.com"
          marginTop={120}
        />
        <InputFieldPassword
          label="Create a password"
          placeholder="must be 8 characters"
        />
        <InputFieldPassword
          label="Confirm password"
          placeholder="repeat password"
        />
        <Button label="Sign Up" />
        <Text style={styles.orText}>Or</Text>
        <GoogleButton />
      </View>
      <AuthFooter
        greyText="Already have an account?"
        boldText="Log in"
        pushRoute="Auth/Login"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerChild: {
    flexDirection: 'column',
    gap: 10,
    width: '100%',
    paddingHorizontal: 40,
  },
  headerContainer: {
    width: '100%',
  },
  backButton: {
    marginLeft: 10,
    marginRight: 10,
  },
  orText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#b3b3b3',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rememberMeText: {
    fontSize: 14,
  },
  tickIcon: {
    marginRight: -5,
  },
  icon: {
    color: 'black',
    backgroundColor: 'white',
  },
});
