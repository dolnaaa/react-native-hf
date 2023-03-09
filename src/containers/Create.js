import { View, StyleSheet, TextInput, Button } from "react-native";
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
            this.props.dispatchAddItem({
              name: this.state.fieldName,
              shortDescription: this.state.fieldDesc,
              count: this.state.fieldCount,
            });
            this.props.navigation.navigate("Read");
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
