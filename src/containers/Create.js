import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import React, { Component } from "react";

import { connect } from "react-redux";
import { add_item } from "../actions/listActions";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldName: "",
      fieldDesc: "",
      fieldCount: "",
    };
  }

  createAlert = (title, msg) => Alert.alert(title, msg, [{ text: "OK" }]);

  validation() {
    // CHECK FOR EMPTY FIELDS
    if (
      this.state.fieldName == "" ||
      this.state.fieldDesc == "" ||
      this.state.fieldCount == ""
    ) {
      this.createAlert("Empty field(s)", "Please fill in every field");
      return false;
    }

    // CHECK FOR LETTERS IN COUNT
    if (!/^\d+$/.test(this.state.fieldCount)) {
      this.createAlert(
        "Not valid count format",
        "Please write only digits(0-9) in the last field"
      );
      return false;
    }

    return true;
  }

  submitPressed() {
    if (this.validation()) {
      this.props.dispatchAddItem({
        name: this.state.fieldName,
        shortDescription: this.state.fieldDesc,
        count: this.state.fieldCount,
      });
      this.setState({ fieldName: "", fieldDesc: "", fieldCount: "" });
      this.props.navigation.navigate("Read");
    }
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
          title="Add item to list"
          onPress={() => {
            this.submitPressed();
          }}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddItem: (new_data) => dispatch(add_item(new_data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
