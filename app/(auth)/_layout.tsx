import { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect, Stack } from 'expo-router';

import { OnboardingScreen } from '../../src/screens/OnboardingScreen/OnboardingScreen.tsx';
import { useAppSelector } from '../../src/shared/lib/hooks/use-app-selector.hook.ts';
import useTheme from '../../src/shared/lib/useTheme.ts';

const AuthLayout = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [isReady, setIsReady] = useState(false);
    const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(false); // Initialize as false

    const { authData } = useAppSelector((state) => state.user);

    const checkForFirstTimeLoaded = async () => {
        const result = await AsyncStorage.getItem('isFirstTimeOpen');
        if (result === null || result === 'false') {
            setIsFirstTimeLoad(true);
            await AsyncStorage.setItem('isFirstTimeOpen', 'true');
        } else {
            setIsFirstTimeLoad(false);
        }
        setIsReady(true); // Set isReady to true after checking
    };

    useEffect(() => {
        checkForFirstTimeLoaded();
    }, []);

    if (!isReady) {
        return (
            <View
                style={{ flex: 1, backgroundColor: isDark ? '#000' : '#fff' }}
            />
        );
    }

    if (isFirstTimeLoad) return <OnboardingScreen />;

    if (authData)
        return (
            <View
                style={{ flex: 1, backgroundColor: isDark ? '#000' : '#fff' }}
            >
                <Redirect href="/" />
            </View>
        );
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="onboarding"
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="auth" options={{ headerShown: false }} />
                <Stack.Screen
                    name="confirmEmail"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="enterCode"
                    options={{ headerShown: false }}
                />
            </Stack>
        </>
    );
};

export default AuthLayout;
