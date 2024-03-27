import {Dimensions, StatusBar, StyleSheet} from "react-native";

export const getWindowHeight = (): number => {
  return Dimensions.get("window").height;
};

export const getWindowWidth = (): number => {
  return Dimensions.get("window").width;
};

export const getDeviceHeight = (): number => {
  return Dimensions.get("screen").height;
};

export const getScreenWidth = (): number => {
  return Dimensions.get("screen").width;
};

export const getWindowHeightStatusBar = (): number => {
  return StatusBar.currentHeight || 24;
};

export const getWindowHeightByPercentage = (percentage: number): number => {
  return Dimensions.get("window").width * percentage;
};

export const Layout = StyleSheet.create({
  /* Row Layouts */
  row: {
    flexDirection: "row",
  },
  rowAlignCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  /* Column Layouts */
  column: {
    flexDirection: "column",
  },
  columnReverse: {
    flexDirection: "column-reverse",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
  },
});
