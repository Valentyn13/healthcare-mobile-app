import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import useTheme from 'src/shared/lib/useTheme.ts';

import {
    Button,
    ButtonTypes,
    FontColors,
    FontSize,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    Text,
} from '../../shared';

import { styles } from './ConfirmEmailScreen.styles.ts';

import ErrorCircle from '../../../assets/svg-icons/action/error-chevron-circle.svg';
import ArrowBack from '../../../assets/svg-icons/controll/arrow-back-auth-icon.svg';

const ConfirmEmailScreen = () => {
    const [hasError] = useState(false);
    const router = useRouter();
    const { email } = useLocalSearchParams<{ email: string }>();

    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const confirmEmailStyle = styles(isDark);

    return (
        <View
            style={[
                confirmEmailStyle.container,
                { backgroundColor: isDark ? '#000' : '#fff' },
            ]}
        >
            <View>
                <Pressable
                    style={confirmEmailStyle.backBtn}
                    onPress={() => {
                        router.back();
                    }}
                >
                    <ArrowBack width={23} height={23} color={FontColors.DARK} />
                </Pressable>
                <Text
                    color={isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT}
                    fontSize={FontSize.fz32}
                    lineHeight={LineHeight.lh40}
                    fontFamily={InterFontFamily.ff700}
                >
                    Confirm your email
                </Text>
                <View style={{ gap: 8, marginTop: 32 }}>
                    <Text>We’ve sent a confirmation letter to your email:</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                        }}
                    >
                        <View style={confirmEmailStyle.emailBox}>
                            <Text
                                color={FontColors.GRAY_LIGHT}
                                fontSize={FontSize.fz12}
                                lineHeight={LineHeight.lh20}
                                fontFamily={InterFontFamily.ff400}
                            >
                                {email}
                            </Text>
                        </View>
                        <Button
                            type={ButtonTypes.EMPTY}
                            onPress={() => {
                                router.back();
                            }}
                        >
                            <Text
                                style={{ textDecorationLine: 'underline' }}
                                color={
                                    isDark
                                        ? FontColors.WHITE
                                        : FontColors.BLUE_LIGHT
                                }
                                fontSize={FontSize.fz12}
                                lineHeight={LineHeight.lh20}
                                fontFamily={InterFontFamily.ff400}
                            >
                                Change email
                            </Text>
                        </Button>
                    </View>
                </View>
                {hasError && (
                    <View
                        style={{ flexDirection: 'row', gap: 4, marginTop: 34 }}
                    >
                        <ErrorCircle width={20} height={20} />
                        <Text
                            color={FontColors.RED}
                            fontSize={FontSize.fz12}
                            lineHeight={LineHeight.lh20}
                            fontFamily={InterFontFamily.ff400}
                        >
                            You haven’t confirmed your email yet{' '}
                        </Text>
                    </View>
                )}
            </View>

            <Button
                type={ButtonTypes.EMPTY}
                onPress={() => {}}
                style={{
                    alignSelf: 'center',
                    marginBottom: 20,
                    paddingVertical: 14,
                    width: '100%',
                    borderRadius: 12,
                    backgroundColor: isDark ? FontColors.DARK_2 : '',
                }}
            >
                <Text
                    color={isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT}
                    fontSize={FontSize.fz16}
                    lineHeight={LineHeight.lh22}
                    fontFamily={InterFontFamily.ff600}
                    letterSpacing={LetterSpacing.ls02}
                >
                    Send Again
                </Text>
            </Button>
        </View>
    );
};

export default ConfirmEmailScreen;
