import { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';
import { useFonts as useFontsInter } from '@expo-google-fonts/inter/useFonts';
import {
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { useFonts as useFontsRoboto } from '@expo-google-fonts/roboto/useFonts';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { store } from 'src/model/store/store';

import { ThemeProvider } from '../src/model/context/ThemeContext.tsx';
import useTheme from '../src/shared/lib/useTheme.ts';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const { theme: colorScheme } = useTheme();
    const [isFontsLoaded, setIsFontsLoaded] = useState(false);

    const isDark = colorScheme === 'dark';
    const insets = useSafeAreaInsets();

    const [interFontsLoaded] = useFontsInter({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    const [robotoFontsLoaded] = useFontsRoboto({
        Roboto_100Thin,
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Roboto_900Black,
    });

    useEffect(() => {
        if (interFontsLoaded && robotoFontsLoaded) {
            setIsFontsLoaded(true);
            SplashScreen.hideAsync();
        }
    }, [interFontsLoaded, robotoFontsLoaded]);

    if (!isFontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <View
                style={{
                    flex: 1,
                    backgroundColor: isDark ? '#000' : '#fff',
                }}
            >
                <Stack
                    screenOptions={{
                        contentStyle: {
                            marginTop: insets.top,
                        },
                        headerShown: false,
                        fullScreenGestureEnabled: true,
                    }}
                >
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="(auth)"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="selectSubscription"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="personalInfo"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="changePassword"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="changeLanguage"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="confirm-logout"
                        options={{ headerShown: false }}
                    />
                </Stack>
                <StatusBar
                    backgroundColor={isDark ? 'black' : 'white'}
                    barStyle={isDark ? 'light-content' : 'dark-content'}
                />
            </View>
        </SafeAreaProvider>
    );
};
const TabsLayoutWithTheme = () => (
    <ThemeProvider>
        <Provider store={store.instance}>
            <RootLayout />
        </Provider>
    </ThemeProvider>
);

export default TabsLayoutWithTheme;
