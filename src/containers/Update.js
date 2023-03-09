import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export class Update extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Update</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Update;
