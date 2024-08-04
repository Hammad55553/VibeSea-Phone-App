import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Dimensions, Text as RNText} from 'react-native';
import {Image, Text} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Security = () => {
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  useEffect(() => {
    const windowHeight = Dimensions.get('window').height;

    // Heights of the individual elements (these should be measured accurately)
    const buttonHeight = 39; // Height of the back button container
    const headingHeight = 24; // Height of the heading text (approximate)
    const totalVerticalMargins = 10 + 22 + 22 + 39; // Sum of all vertical margins and paddings (10 + 22 + 22)

    // Calculate the available height for the ScrollView
    const calculatedHeight =
      windowHeight - buttonHeight - headingHeight - totalVerticalMargins - 70; // 70 is the fixed reduction
    setScrollViewHeight(calculatedHeight);
  }, []);

  return (
    <View style={styles.background}>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/icons/chevron.left.png')}
                style={styles.iconLeft}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.headingText}>Privacy policy</Text>
          <View style={styles.contentBox}>
            <ScrollView style={[styles.scrollBox, {height: scrollViewHeight}]}>
              <Text style={styles.contentText}>
                Last Updated: 21-06-2024 Welcome to VibeSea! Your privacy is
                important to us. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our
                mobile application and services. Please read this privacy policy
                carefully. If you do not agree with the terms of this privacy
                policy, please do not use the application. 1. Information We
                Collect Personal Data We may collect personally identifiable
                information, including but not limited to your name, email
                address, phone number, and profile picture, when you voluntarily
                provide it to us. Sublease Ad Information When you create a
                sublease ad, we collect information related to your listing,
                including the property address, rent amount, lease duration, and
                any other details you provide. Usage Data We collect information
                about your interactions with the app, such as the pages or
                screens you view, the features you use, and the time and
                duration of your activities., when you voluntarily provide it to
                us. Sublease Ad Information When you create a sublease ad, we
                collect information related to your listing, including the
                property address, rent amount, lease duration, and any other
                details you provide. Usage Data We collect information about
                your interactions with the app, such as the pages or screens you
                view, the features you use, and the time .
              </Text>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backButton: {
    marginRight: 16,
    marginTop: '5%',
  },
  iconContainer: {
    width: 39,
    height: 39,
    borderWidth: 1,
    borderColor: '#E2E8EE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    width: 9,
    height: 15,
    tintColor: '#000000',
  },
  headingText: {
    marginTop: 22,
    fontSize: 24,
    fontWeight: '700',
  },
  contentBox: {
    marginTop: 22,
  },
  scrollBox: {
    borderWidth: 1,

    borderRadius: 13,
    borderColor: '#E2E8EE',
  },
  contentText:{
    fontSize:14,
    paddingTop:22,
    paddingLeft:24,
    paddingRight:22,
    fontWeight:"400",
    lineHeight: 20.58,
    color: '#000000',

  },
 
});

export default Security;
