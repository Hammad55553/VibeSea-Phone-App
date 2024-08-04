import {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthHeading} from '../../components/auth/AuthHeading';
import {AuthFooter} from '../../components/auth/AuthFooter';
import {InputFieldEmail} from '../../components/InputFieldEmail';
import {InputFieldPassword} from '../../components/InputFieldPassword';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components/Button';
import {GoogleButton} from '../../components/GoogleButton';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function Login() {
  const navigation = useNavigation();
  const [text, setText] = useState('Hi');
  const [isChecked, setIsChecked] = useState(false);

  const handleNavigateToForgotPassword = () => {
    navigation.navigate('Auth/ForgotPassword' as never);
  };

  const toggleCheckmark = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    GoogleSignin.configure({
      //   webClientId:
      //     "621558975147-ff53hnc64qli47la27h0astti1i2mn6h.apps.googleusercontent.com",
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerChild}>
        <AuthHeading
          firstText={text}
          secondText="Welcome to VibeSea!"
          isHelloWaveVisible={true}
          containerHeight={75}
          isLoginPage={true}
        />
        <InputFieldEmail
          label="Email address"
          placeholder="Your email"
          marginTop={120}
        />
        <InputFieldPassword label="Password" placeholder="Password" />
        <View style={styles.subContainer}>
          <View style={styles.rememberMeContainer}>
            <TouchableOpacity onPress={toggleCheckmark}>
              <View style={styles.tickIcon}>
                <Icon
                  name={
                    isChecked ? 'checkmark-circle' : 'checkmark-circle-outline'
                  }
                  size={24}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <View style={styles.rememberMeContainer}>
            <Text
              onPress={() => {
                handleNavigateToForgotPassword();
              }}
              style={styles.rememberMeText}>
              Forgot password?
            </Text>
          </View>
        </View>
        <Button label={`Log In`} />
        <Text style={styles.orText}>Or</Text>
        <GoogleButton />
      </View>
      <AuthFooter
        greyText="Don't have an account?"
        boldText="Sign up"
        pushRoute="Auth/Signup"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerChild: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 40,
    width: '100%',
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
