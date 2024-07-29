import { ScrollView, StyleSheet, View } from 'react-native';
import {
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    Text,
} from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import { useAppSelector } from 'src/shared/lib/hooks/use-app-selector.hook';
import useTheme from 'src/shared/lib/useTheme';

import { Slider } from './Slider/Slider';

import LogoIcon from '../../../assets/svg-icons/other/brain.svg';

export const MainScreen = () => {
    const { theme } = useTheme();
    const userName = useAppSelector((state) => state.user.authData?.firstName);

    return (
        <ScrollView
            style={{
                ...styles.wrapper,
                backgroundColor: Colors[theme].background,
            }}
        >
            <View style={styles.mainContent}>
                <Text
                    color={Colors[theme].mainPage.primary}
                    fontFamily={InterFontFamily.ff600}
                    fontSize={FontSize.fz16}
                    lineHeight={LineHeight.lh20}
                    style={{ textAlign: 'center' }}
                >
                    AI Psy Help
                </Text>
                <LogoIcon width={93} height={95} />
                <View style={styles.wrapperText}>
                    <View style={styles.wrapperMainText}>
                        <Text
                            style={styles.mainText}
                            color={Colors[theme].mainPage.primary}
                        >
                            Hello, {userName}!
                        </Text>
                        <Text
                            style={styles.mainText}
                            color={Colors[theme].mainPage.primary}
                        >
                            I’m here to help you
                        </Text>
                    </View>
                    <Text style={styles.descriptionText}>
                        Ask me anything what’s are on your mind. I will provide
                        you professional help
                    </Text>
                </View>
            </View>
            <View style={{ marginBottom: 40 }}>
                <Slider />
            </View>
        </ScrollView>
    );
};

export const styles = StyleSheet.create({
    wrapper: { flex: 1, flexDirection: 'column', gap: 40 },
    mainText: {
        fontFamily: InterFontFamily.ff700,
        fontSize: FontSize.fz24,
        lineHeight: LineHeight.lh30,
        textAlign: 'center',
    },
    descriptionText: {
        fontFamily: InterFontFamily.ff400,
        fontSize: FontSize.fz14,
        lineHeight: LineHeight.lh16,
        color: FontColors.GRAY_LIGHT,
        textAlign: 'center',
    },
    wrapperMainText: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    wrapperText: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        marginTop: 12,
        marginLeft: 42,
        marginRight: 42,
    },
});
