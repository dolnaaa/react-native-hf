import { View, StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import Card from "../components/Card";

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
          {dummyData?.map((item) => (
            <Card
              key={item?.id}
              id={item?.id}
              name={item?.name}
              shortDescription={item?.shortDescription}
              count={item?.count}
            />
          ))}
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

export default Read;
