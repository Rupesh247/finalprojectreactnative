import React from "react";

import { Text, StyleSheet, TouchableOpacity } from "react-native";

import Spacer from "./Spacer";

import { useNavigation } from "@react-navigation/native";

const NavLink = ({ text, routeName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#e44f50",
    textDecorationStyle: "solid",
    textDecorationLine: "underline"
  },
});

export default NavLink;
