import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/reducers/index";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
