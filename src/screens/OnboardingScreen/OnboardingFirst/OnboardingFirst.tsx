import { View } from 'react-native';
import {
    FontColors,
    FontSize,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    Text,
} from 'src/shared';
import useTheme from 'src/shared/lib/useTheme';

import { styles } from './OnboardingFirst.styles';

import LogoLight from 'assets/svg-icons/other/brain.svg';
import LogoDark from 'assets/svg-icons/other/brain-white.svg';

export const OnboardingFirst = () => {
    const { theme } = useTheme();

    return (
        <View style={styles.wrapper}>
            {theme === 'light' ? (
                <LogoLight width={183} height={181} style={styles.logo} />
            ) : (
                <LogoDark width={183} height={181} style={styles.logo} />
            )}
            <View style={styles.content}>
                <View style={styles.headerWrapper}>
                    <Text
                        color={
                            theme === 'light'
                                ? FontColors.BLUE
                                : FontColors.WHITE
                        }
                        fontSize={FontSize.fz30}
                        lineHeight={LineHeight.lh36}
                        style={styles.mainText}
                        fontFamily={InterFontFamily.ff800}
                        letterSpacing={LetterSpacing.ls_075}
                    >
                        Welcome to AI Psy Help
                    </Text>
                </View>

                <Text
                    fontSize={FontSize.fz12}
                    fontFamily={InterFontFamily.ff300}
                    lineHeight={LineHeight.lh15}
                    color={
                        theme === 'light' ? FontColors.DARK : FontColors.WHITE
                    }
                    style={styles.subText}
                >
                    We're here to support you on your journey to better mental
                    health. Let's get started!
                </Text>
            </View>
        </View>
    );
};
