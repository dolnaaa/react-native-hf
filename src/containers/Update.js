import { View, StyleSheet, TextInput, Button } from "react-native";
import React, { Component } from "react";

export class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldName: "",
      fieldDesc: "",
      fieldCount: "",
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(newTxt) => {
            this.setState({ fieldName: newTxt });
          }}
          value={this.state.fieldName}
          placeholder="Item name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(newTxt) => {
            this.setState({ fieldDesc: newTxt });
          }}
          value={this.state.fieldDesc}
          placeholder="Item short description"
        />
        <TextInput
          style={styles.input}
          onChangeText={(newTxt) => {
            this.setState({ fieldCount: newTxt });
          }}
          value={this.state.fieldCount}
          placeholder="Item count"
          keyboardType="numeric"
        />
        <Button
          title="Update item"
          onPress={() => console.log("submit")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
    padding: 10,
  },
});

export default Update;
