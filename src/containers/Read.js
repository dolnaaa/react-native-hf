import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export class Read extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Read</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Read;
