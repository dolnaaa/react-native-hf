import { View, StyleSheet, TextInput, Button } from "react-native";
import React, { Component } from "react";

import { connect } from "react-redux";
import { edit_item } from "../actions/listActions";

export class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldName: "",
      fieldDesc: "",
      fieldCount: "",

      focusedListener: null,
    };
  }

  updateFields() {
    const { idToUpdate } = this.props.route.params;
    const { items } = this.props;
    if (items && idToUpdate && idToUpdate != 0) {
      const item = items.find((x) => x?.id == idToUpdate);
      if (item) {
        this.setState({
          fieldName: item.name,
          fieldDesc: item.shortDescription,
          fieldCount: item.count,
        });
      }
    }
  }

  componentDidMount() {
    this.setState({
      focusedListener: this.props.navigation.addListener("focus", () => {
        this.updateFields();
      }),
    });
  }

  componentWillUnmount() {
    this.state.focusedListener();
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
          onPress={() => {
            this.props.dispatchEditItem(this.props.route.params.idToUpdate, {
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

const mapStateToProps = (state) => ({
  items: state.listReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchEditItem: (id, edited_data) => dispatch(edit_item(id, edited_data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
