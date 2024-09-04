import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius:15,
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    padding: 12,
  },
});
