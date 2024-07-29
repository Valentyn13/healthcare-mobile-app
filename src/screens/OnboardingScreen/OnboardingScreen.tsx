import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import { Navigation } from './Navigation/Navigation';
import { OnboardingFirst } from './OnboardingFirst/OnboardingFirst';
import { OnboardingSecond } from './OnboardingSecond/OnboardingSecond';
import { OnboardingThird } from './OnboardingThird/OnboardingThird';
import { style } from './OnboardingScreen.styles';

type StageType = 'first' | 'second' | 'third';

export const OnboardingScreen = () => {
    const router = useRouter();
    const { theme } = useTheme();

    const [stage, setStage] = useState<StageType>('first');

    const handleNextStage = () => {
        switch (stage) {
            case 'first':
                return setStage('second');
            case 'second':
                return setStage('third');
            case 'third':
                router.replace('/auth');
        }
    };

    const getStage = (): number => {
        switch (stage) {
            case 'first':
                return 1;
            case 'second':
                return 2;
            case 'third':
                return 3;
        }
    };

    return (
        <SafeAreaView
            style={[
                style.safeArea,
                { backgroundColor: Colors[theme].background },
            ]}
        >
            <View style={style.wrapper}>
                <View style={style.content}>
                    {stage === 'first' && <OnboardingFirst />}
                    {stage === 'second' && <OnboardingSecond />}
                    {stage === 'third' && <OnboardingThird />}
                </View>
                <Navigation
                    onNextStage={handleNextStage}
                    current={getStage()}
                    total={3}
                />
            </View>
        </SafeAreaView>
    );
};
