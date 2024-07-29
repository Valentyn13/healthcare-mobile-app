import { ScrollView, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import {
    Button,
    FontColors,
    FontSize,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    RobotoFontFamily,
    Text,
} from 'src/shared/index.ts';
import useTheme from 'src/shared/lib/useTheme';

import Group_1685 from './paymentProcess/group_1685.tsx';

import Logo from '../../../assets/svg-icons/controll/arrow-back-auth-icon.svg';

const Confirmation = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <ScrollView
            style={{
                flex: 1,
                padding: 24,
                backgroundColor: isDark ? FontColors.BLACK : FontColors.WHITE,
            }}
        >
            <View style={styles.container}>
                <Link href={'/'}>
                    <Logo color={isDark ? FontColors.WHITE : FontColors.DARK} />
                </Link>

                <Text
                    color={isDark ? FontColors.WHITE : FontColors.DARK}
                    fontSize={FontSize.fz20}
                    fontFamily={RobotoFontFamily.ff700}
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                >
                    Payment
                </Text>
            </View>
            <View>
                <Text
                    color={isDark ? FontColors.WHITE : FontColors.DARK}
                    fontSize={FontSize.fz34}
                    fontFamily={RobotoFontFamily.ff700}
                    letterSpacing={LetterSpacing.ls_034}
                    style={styles.textCenter}
                >
                    $40.00
                </Text>
                <Text
                    color={FontColors.GRAY_LIGHT}
                    fontFamily={InterFontFamily.ff400}
                    lineHeight={LineHeight.lh22}
                    fontSize={FontSize.fz12}
                    style={styles.textCenter}
                >
                    monthly
                </Text>
            </View>
            <View style={{ marginTop: 40 }}>
                <Text
                    color={FontColors.GRAY_LIGHT}
                    fontFamily={InterFontFamily.ff400}
                    lineHeight={LineHeight.lh18}
                    style={styles.textCenter}
                >
                    Subscribe to Family Plan
                </Text>
                <Text
                    color={FontColors.GRAY_LIGHT}
                    fontFamily={InterFontFamily.ff400}
                    lineHeight={LineHeight.lh18}
                    style={styles.textCenter}
                >
                    AI PSY HELP
                </Text>
            </View>
            <Group_1685 />
            <Button style={styles.button} onPress={() => {}}>
                <Text
                    color={FontColors.WHITE}
                    lineHeight={LineHeight.lh22}
                    letterSpacing={LetterSpacing.ls02}
                    fontSize={FontSize.fz16}
                    fontFamily={InterFontFamily.ff600}
                >
                    Pay $40.00
                </Text>
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 56,
    },
    textCenter: {
        textAlign: 'center',
    },
    button: {
        width: 312,
        marginTop: 85,
    },
});

export default Confirmation;
