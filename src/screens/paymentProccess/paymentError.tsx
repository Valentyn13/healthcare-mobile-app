import { StyleSheet, View } from 'react-native';
import {
    Button,
    FontColors,
    FontSize,
    InterFontFamily,
    LetterSpacing,
    RobotoFontFamily,
} from 'src/shared/index.ts';
import { Text } from 'src/shared/index.ts';
import useTheme from 'src/shared/lib/useTheme';

import ErrorIcon from '../../../assets/svg-icons/action/solid-red-cross.svg';

const PaymentError = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: isDark ? FontColors.BLACK : FontColors.WHITE,
            }}
        >
            <View style={styles.container}>
                <View style={styles.outCircle}>
                    <View style={styles.innerCircle}>
                        <ErrorIcon
                            color={isDark ? FontColors.BLACK : FontColors.WHITE}
                        />
                    </View>
                </View>

                <Text
                    color={isDark ? FontColors.WHITE : FontColors.DARK}
                    fontFamily={RobotoFontFamily.ff700}
                    letterSpacing={LetterSpacing.ls_024}
                    fontSize={FontSize.fz24}
                    style={styles.textPayment}
                >
                    Payment failed
                </Text>
                <Text style={styles.textYouHave}>
                    Seems like you entered incorrect information.
                </Text>
                <Text style={styles.textYouHave2}>Please try again</Text>
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
                        fontSize={FontSize.fz16}
                        letterSpacing={LetterSpacing.ls_017}
                    >
                        Try again
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
        fontSize: 12,
    },
    textYouHave2: {
        fontSize: 12,
    },
    button: {
        marginTop: 32,
        width: 312,
    },
    outCircle: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: 'rgba(255, 117, 123, 0.10)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: 'rgba(255, 117, 123, 0.25)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PaymentError;
