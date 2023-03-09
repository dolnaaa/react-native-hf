import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export class Create extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Create</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Create;
