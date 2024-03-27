import {StyleSheet} from "react-native";
import Config from "../../config";

const {NEUTRALS_1, NEUTRALS_6, NEUTRALS_4, WHITE} = Config.COLOR_CONFIG;

export const styles = StyleSheet.create({
  root: {
    marginTop: 15,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: WHITE,
    borderColor: NEUTRALS_6,
    borderRadius: 12,
    borderWidth: 2,
    color: NEUTRALS_4,
    flexDirection: "row",
    height: 48,
    paddingRight: 16,
    paddingLeft: 8,
    width: "100%",
  },
  inputField: {
    color: NEUTRALS_4,
    width: "90%",
    height: 48,
  },
  labelInput: {
    color: NEUTRALS_1,
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  label: {
    color: NEUTRALS_1,
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 30,
    textTransform: "uppercase",
  },
  emailIcon: {
    color: NEUTRALS_4,
    marginLeft: 5,
  },
});
