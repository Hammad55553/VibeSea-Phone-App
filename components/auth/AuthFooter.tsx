import {StyleSheet, TextProps, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ThemedText} from '../ThemedText';

export type ThemedTextProps = TextProps & {
  greyText?: string;
  boldText?: string;
  pushRoute?: string;
};

export function AuthFooter({greyText, boldText, pushRoute}: ThemedTextProps) {
  const navigation = useNavigation();

  const handleNavigation = () => {
    if (pushRoute !== undefined) {
      navigation.navigate(pushRoute as never);
    }
  };
  return (
    <View style={styles.containerRoot}>
      <View>
        <ThemedText type="default" style={styles.text}>
          {greyText}
        </ThemedText>
      </View>
      <View>
        <ThemedText
          onPress={() => {
            handleNavigation();
          }}
          type="defaultSemiBold"
          style={styles.linkText}>
          {boldText}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRoot: {
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 14,
    color: '#000000B2',
  },
  linkText: {
    fontSize: 14,
    color: 'black',
  },
  containerOne: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    width: '100%',
    marginTop: 10,
  },
  containerChild: {
    width: 'auto',
  },
});
