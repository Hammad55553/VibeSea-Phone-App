import {StyleSheet, TextProps, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ThemedText} from '../ThemedText';
import {HelloWave} from '../HelloWave';
import ChevronLeftIcon from '../ChevronLeftIcon';

export type ThemedTextProps = TextProps & {
  firstText?: string;
  secondText?: string;
  pushRoute?: string;
  isHelloWaveVisible?: boolean;
  containerHeight?: number;
  isLoginPage: boolean;
};

export function AuthHeading({
  firstText,
  secondText,
  isHelloWaveVisible,
  containerHeight,
  isLoginPage,
}: ThemedTextProps) {
  const navigation = useNavigation();
  const [goBackStatus, setGoBackStatus] = useState<boolean>(
    navigation.canGoBack(),
  );

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View
      style={
        containerHeight === 75 ? styles.containerRoot75 : styles.containerRoot50
      }>
      {!isLoginPage && (
        <TouchableOpacity
          onPress={() => {
            handleGoBack();
          }}>
          <ChevronLeftIcon />
        </TouchableOpacity>
      )}
      <ThemedText
        type="title"
        style={
          isLoginPage
            ? {...styles.text, ...styles.marginTop120}
            : {...styles.text, ...styles.marginTop90}
        }>
        {firstText}
        {'\n'}
        {secondText}
        {isHelloWaveVisible && (
          <View style={styles.helloWaveContainer}>
            <HelloWave />
          </View>
        )}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRoot75: {
    height: 75,
  },
  containerRoot50: {
    height: 50,
  },
  text: {
    fontSize: 30,
    height: 90,
  },
  marginTop90: {
    marginTop: 90,
  },
  marginTop120: {
    marginTop: 120,
  },
  containerOne: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    width: '100%',
  },
  helloWaveContainer: {
    width: 'auto',
  },
});
