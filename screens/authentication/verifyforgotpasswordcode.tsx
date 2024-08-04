import {useState, useRef} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Keyboard,
} from 'react-native';
import {AuthHeading} from '../../components/auth/AuthHeading';
import {Button} from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../../redux/store';

export default function VerifyForgotPasswordCode() {
  const dispatch: AppDispatch = useDispatch();
  const forgotPasswordEmail = useSelector(
    (state: RootState) => state.auth.forgotPasswordEmail,
  );

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Focus on the next input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Automatically dismiss the keyboard if the last input is filled
    if (index === 3 && text) {
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerChild}>
        <AuthHeading
          firstText="Please check your"
          secondText="email"
          isHelloWaveVisible={false}
          containerHeight={75}
          isLoginPage={false}
        />
        <Text style={styles.descriptionText}>
          We've sent a code to {forgotPasswordEmail}
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              placeholder="-"
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleOtpChange(text, index)}
              autoFocus={index === 0}
            />
          ))}
        </View>
        <Button label={`Verify`} />
        <View style={styles.sendCodeAgain}>
          <Text style={styles.sendCodeAgainText}>Send code again</Text>
          <Text style={styles.timerText}>00:20</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 0,
    width: '100%',
    alignSelf: 'center',
  },
  otpInput: {
    height: 77,
    width: 77,
    borderColor: '#D8DADC',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
  },
  sendCodeAgain: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  sendCodeAgainText: {
    color: '#000000B2',
    fontWeight: 'bold',
    fontSize: 16,
  },
  timerText: {
    color: '#000000B2',
    fontWeight: '400',
    fontSize: 16,
  },
  descriptionText: {
    marginTop: 130,
    fontSize: 16,
    fontWeight: '400',
    color: '#000000B2',
    lineHeight: 20,
  },
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
