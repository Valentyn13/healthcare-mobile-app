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

import { styles } from './OnboardingSecond.styles';

import LogoLight from 'assets/svg-icons/other/brain.svg';
import LogoDark from 'assets/svg-icons/other/brain-white.svg';

export const OnboardingSecond = () => {
    const { theme } = useTheme();

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                {theme === 'light' ? (
                    <LogoLight width={52} height={52} />
                ) : (
                    <LogoDark width={52} height={52} />
                )}
                <Image
                    source={require('assets/onboarding-example-chat.jpg')}
                    style={{ width: 268, height: 236 }}
                />
            </View>

            <View style={styles.content}>
                <View style={{ alignItems: 'center' }}>
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
                        Meet Your AI Therapist
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
                    Our AI therapist is trained to understand and support you
                    through life's challenges.
                </Text>
            </View>
        </View>
    );
};
