import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          {this.props.name ? this.props.name : "err"}
        </Text>
        <Text style={styles.shortDescription}>
          {this.props.shortDescription ? this.props.shortDescription : "err"}
        </Text>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.editAction(this.props.id ? this.props.id : 0)
            }
          >
            <Ionicons name="pencil" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.count}>
            {this.props.count
              ? `${this.props.count} ${
                  this.props.count > 1 ? "pieces" : "piece"
                }`
              : "err"}
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.props.removeAction(this.props.id ? this.props.id : 0)
            }
          >
            <Ionicons name="trash" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 20,
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "column",
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  shortDescription: {
    fontSize: 14,
    marginVertical: 8,
  },
  count: {
    fontSize: 14,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Card;
