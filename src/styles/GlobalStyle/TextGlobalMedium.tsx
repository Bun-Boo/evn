import React, {ReactElement} from "react";
import {Text, TextProps, StyleSheet} from "react-native";

export default function TextGlobalMedium(props: TextProps): ReactElement {
  return (
    <Text {...props} style={[props.style, styles.customText]}>
      {props.children}
    </Text>
  );
}

export const styles = StyleSheet.create({
  customText: {
    fontFamily: "SFProDisplay-Medium",
    letterSpacing: 0.5,
  },
});
