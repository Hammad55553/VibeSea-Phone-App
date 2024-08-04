import {useState} from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import {AuthHeading} from '../../components/auth/AuthHeading';
import {AuthFooter} from '../../components/auth/AuthFooter';
import {Button} from '../../components/Button';
import {InputFieldPassword} from '../../components/InputFieldPassword';

export default function ResetPassword() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckmark = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerChild}>
        <AuthHeading
          firstText="Reset password"
          secondText=""
          isHelloWaveVisible={false}
          containerHeight={75}
          isLoginPage={false}
        />
        <Text style={styles.descriptionText}>
          Please type something you'll remember
        </Text>
        <InputFieldPassword
          label="New password"
          placeholder="must be 8 characters"
        />
        <InputFieldPassword
          label="Confirm new password"
          placeholder="repeat password"
        />
        <Button label={`Reset password`} />
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
  descriptionText: {
    marginTop: 95,
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
