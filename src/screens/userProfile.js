import { StyleSheet, View, Button } from "react-native";

import UserForm from "../components/userForm";

// import styles
import { GlobalStyles } from "../constants/styles";

export default function UserProfilePage({ navigation }) {
  return (
    <View style={styles.container}>
      <UserForm />
      <View>
        <Button
          title="Save"
          onPress={() => navigation.navigate("Listing")}
          color={GlobalStyles.colors.primary1}
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
});
