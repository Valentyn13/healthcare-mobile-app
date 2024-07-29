import { StyleSheet, View } from 'react-native';
import {
    Button,
    FontColors,
    FontSize,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    RobotoFontFamily,
    Text,
} from 'src/shared';
import useTheme from 'src/shared/lib/useTheme';

import ErrorIcon from '../../../assets/svg-icons/action/solid-tick-blue.svg';
const SuccessFullPayment = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: isDark ? FontColors.BLACK : FontColors.WHITE,
            }}
        >
            <View style={[styles.container]}>
                <View style={styles.outCircle}>
                    <View style={styles.innerCircle}>
                        <ErrorIcon
                            color={isDark ? FontColors.BLACK : FontColors.WHITE}
                        />
                    </View>
                </View>

                <Text
                    color={isDark ? FontColors.WHITE : FontColors.DARK}
                    letterSpacing={LetterSpacing.ls02}
                    fontFamily={RobotoFontFamily.ff700}
                    fontSize={FontSize.fz24}
                    style={styles.textPayment}
                >
                    Payment successful!
                </Text>
                <Text style={styles.textYouHave}>
                    You have successfully subscribed
                </Text>
                <Text
                    lineHeight={LineHeight.lh18}
                    letterSpacing={LetterSpacing.ls02}
                    fontSize={FontSize.fz12}
                    fontFamily={InterFontFamily.ff400}
                >
                    to Family Plan AI PSY HELP
                </Text>
                <Button
                    style={[
                        styles.button,
                        isDark && { backgroundColor: FontColors.DARK_2 },
                    ]}
                    onPress={() => {}}
                >
                    <Text
                        color={FontColors.WHITE}
                        fontFamily={InterFontFamily.ff600}
                        letterSpacing={LetterSpacing.ls_017}
                        fontSize={FontSize.fz16}
                    >
                        Back home
                    </Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        width: 312,
        height: 349,
        alignItems: 'center',
    },
    textPayment: {
        marginTop: 32,
    },
    textYouHave: {
        marginTop: 10,
    },
    button: {
        marginTop: 32,
        width: 312,
    },
    outCircle: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: 'rgba(0, 159, 250, 0.10)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: 'rgba(0, 159, 250, 0.25)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default SuccessFullPayment;
