import { Image, View } from 'react-native';
import {
    FontColors,
    FontSize,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    Text,
} from 'src/shared';
import useTheme from 'src/shared/lib/useTheme';

import { styles } from './OnboardingThird.styles';

export const OnboardingThird = () => {
    const { theme } = useTheme();

    return (
        <View style={styles.wrapper}>
            <View style={styles.top}>
                <Image
                    source={require('assets/world-health-organization.png')}
                    style={{ width: 245, height: 80 }}
                />
                <Image
                    source={require('assets/international-media-corps.png')}
                    style={{ width: 245, height: 64 }}
                />
                <Image
                    source={require('assets/min-reintegration.png')}
                    style={{ width: 245, height: 55 }}
                />
            </View>

            <View style={styles.content}>
                <View style={styles.wrapperMainText}>
                    <Text
                        color={
                            theme === 'light'
                                ? FontColors.BLUE
                                : FontColors.WHITE
                        }
                        fontSize={FontSize.fz30}
                        fontFamily={InterFontFamily.ff800}
                        lineHeight={LineHeight.lh36}
                        letterSpacing={LetterSpacing.ls_075}
                        style={styles.mainText}
                    >
                        Let's Get Started
                    </Text>
                </View>
                <Text
                    fontSize={FontSize.fz12}
                    lineHeight={LineHeight.lh15}
                    fontFamily={InterFontFamily.ff300}
                    color={
                        theme === 'light'
                            ? FontColors.DARK
                            : FontColors.GRAY_DARK
                    }
                    style={styles.subText}
                >
                    To begin your journey with Psy Help, we just need a few
                    details to personalize your experience.
                </Text>
            </View>
        </View>
    );
};
