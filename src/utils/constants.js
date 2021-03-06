import { Platform } from "react-native";

export const DrawerHeight = undefined; // this was resolved to `undefined`
export const NavBarMargin = Platform.OS === "ios" ? 44 : 44;
export const NavBarHeight = Platform.OS === "ios" ? 64 : 44;
export const StatusBarHeight = Platform.OS === "ios" ? 20 : 0;

// Font size
export const HeaderFontSize = 19;
export const BodyTextHeaderFontSize = 16;
export const ButtonFontSize = 15;
export const SmallFontSize = 11;

// Color
export const LIGHT_GRAY = "#F4F9FC";
export const BLUE = "#11ACF9";
export const GREEN = "#11ACF9";
export const LIGHT_PURPLE = "#274762";
export const DARK_GRAY = "#5A5A5A";
export const GRAY = "#A3A3A3";
export const MAIN_BG = "#f4f9fc";
export const MAIN_COLOR = "#75e2d1";

// Error Message
const constant = {
  SERVER_ERROR_MESSAGE: "The request failed due to an internal error.",
  OFFLINE_TITLE: "No Internet Connection",
  OFFLINE_MESSAGE: "Please check your internet connection.",
  EMPTY_RECORD_MESSAGE: "Record Not Found."
};

export default constant;
