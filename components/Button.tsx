import { StyleSheet, TextProps, TouchableOpacity, Text } from "react-native";

export type ThemedTextProps = TextProps & {
  label?: string;
};

export function Button({ label }: ThemedTextProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2441D0",
    height: 56,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
