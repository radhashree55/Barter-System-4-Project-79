import React, { Component } from "react";
import { Header, Icon, Badge } from "react-native-elements";
import { View, Text, StyeSheet, Alert } from "react-native";

const MyHeader = (props) => {
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: {
          fontSize: 31,
          fontWeight: "300",
          paddingBottom: 20,
          color: "mediumorchid",
        },
      }}
      backgroundColor="lavender"
    />
  );
};

export default MyHeader;
