import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#942B2B", //maroon
    secondary: 'rgba(128,0,0,0.5)',
    white: '#FFFFFF',
    black: "#000000",
    lightMaroon: "#b76767",
    green: "#27AE60",
    red: "#FF1717",
    blue: '#0064C0',
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#FAFAFA',
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    transparent: 'transparent',
    darkColor:"#242526"
    

};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    radius2:30,
    padding: 24,
    padding2:40,
    

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 15,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Black", fontSize: SIZES.h1 },
  


}
const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
