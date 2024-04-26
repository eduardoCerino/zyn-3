import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
    'GothamNarrow-Light': require('../assets/fonts/GothamNarrow-Light.otf'),
    'GothamNarrow-Medium': require('../assets/fonts/GothamNarrow-Medium.otf'),
    'GothamNarrow-Book': require('../assets/fonts/GothamNarrow-Book.otf'),
    });
};