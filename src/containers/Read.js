import { View, StyleSheet, ScrollView, Text } from "react-native";
import React, { Component } from "react";

import Card from "../components/Card";

import { connect } from "react-redux";
import { remove_item } from "../actions/listActions";

const dummyData = [
  { id: 1, name: "A item", shortDescription: "This is the item A", count: 3 },
  { id: 2, name: "B item", shortDescription: "This is the item B", count: 2 },
  { id: 3, name: "C item", shortDescription: "This is the item C", count: 8 },
  { id: 4, name: "D item", shortDescription: "This is the item D", count: 6 },
];

export class Read extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.mainScrollContainer}>
          {this.props.items ? (
            this.props.items?.length > 0 ? (
              this.props.items?.map((item) => (
                <Card
                  key={item?.id}
                  id={item?.id}
                  name={item?.name}
                  shortDescription={item?.shortDescription}
                  count={item?.count}
                  removeAction={this.props.dispatchRemoveItem}
                  editAction={(id) => console.log("edit_action")}
                />
              ))
            ) : (
              <Text>No items yet</Text>
            )
          ) : (
            <Text>Error loading items</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainScrollContainer: {
    flex: 1,
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  items: state.listReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRemoveItem: (id) => dispatch(remove_item(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Read);
