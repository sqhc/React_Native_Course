import { Stack } from 'expo-router';
import { useCallback } from 'react' ;
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { BlockEndState } from 'antlr4/src/antlr4/atn/ATNState';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMBMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />
}