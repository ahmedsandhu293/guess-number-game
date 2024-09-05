import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    borderRadius: 15,
    color: "white",
    borderColor: "white",
    // borderWidth: Platform.OS === 'android'? 2 : 0,
    borderRadius: Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
