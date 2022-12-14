import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// import styles
import { GlobalStyles } from "../constants/styles";

export default function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.fieldUser}>
        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.fieldPassword}>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>

      <View style={styles.button}>
        <Button
          title="LOGIN"
          onPress={() => navigation.navigate("User")}
          color={GlobalStyles.colors.primary1}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="SIGN UP"
          onPress={() => navigation.navigate("User")}
          color={GlobalStyles.colors.secondary1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary3,
    flex: 1,
  },
  fieldUser: {
    padding: 10,
  },
  fieldPassword: {
    padding: 10,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "serif",
    color: GlobalStyles.colors.primary1,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    height: 40,
    textAlign: "center",
  },
  button: {
    padding: 10,
    borderRadius: 14,
  },
});
