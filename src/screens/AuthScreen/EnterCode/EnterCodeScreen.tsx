import { useRef, useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    View,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    Button,
    ButtonTypes,
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    Text,
} from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import { CodeInput } from './CodeInput/CodeInput';
import { PhoneInput } from './PhoneInput/PhoneInput';
import { style } from './EnterCodeScreen.styles';

import ArrowBack from 'assets/svg-icons/controll/arrow-back-auth-icon.svg';

export const EnterCodeScreen = () => {
    const router = useRouter();
    const phoneInputRef = useRef<any>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const { phone } = useLocalSearchParams<{ phone: string }>();
    const [isEditable, setIsEditable] = useState(false);
    const [isResetCodeInput, setIsResetCodeInput] = useState(false);
    const [isValidCode, setIsValidCode] = useState(false);

    const handleClickBack = () => {
        router.back();
    };

    const handleClickSendAgain = () => {
        setIsResetCodeInput(true);
    };

    const handleClickNext = () => {
        router.push('/');
        setIsResetCodeInput(true);
    };

    const handleChangeNumber = () => {
        setIsEditable(true);
        setTimeout(() => {
            phoneInputRef.current?.focus();
        }, 100);
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View
                style={{
                    ...style.wrapper,
                    backgroundColor: isDark
                        ? Colors.dark.background
                        : Colors.light.background,
                }}
            >
                <TouchableOpacity
                    onPress={handleClickBack}
                    style={style.arrowBack}
                >
                    <ArrowBack width={24} height={24} color={FontColors.DARK} />
                </TouchableOpacity>
                <View style={style.main}>
                    <View style={style.content}>
                        <Text
                            fontFamily={InterFontFamily.ff600}
                            color={isDark ? FontColors.WHITE : FontColors.BLUE}
                            fontSize={FontSize.fz32}
                            lineHeight={LineHeight.lh40}
                        >
                            Enter a code
                        </Text>

                        <View style={style.changePhoneNumberWrapper}>
                            <Text
                                fontSize={FontSize.fz12}
                                fontFamily={InterFontFamily.ff400}
                                lineHeight={LineHeight.lh20}
                                color={FontColors.GRAY}
                            >
                                We sent an SMS with one-time code to
                            </Text>
                            <View style={style.changePhoneNumber}>
                                <PhoneInput
                                    isEditable={isEditable}
                                    value={phone as string}
                                    ref={phoneInputRef}
                                />
                                <Button
                                    type={ButtonTypes.EMPTY}
                                    onPress={handleChangeNumber}
                                >
                                    <Text
                                        style={{
                                            ...style.buttonChangeNumber,
                                            color: isDark
                                                ? FontColors.WHITE
                                                : FontColors.BLUE,
                                        }}
                                    >
                                        Change number
                                    </Text>
                                </Button>
                            </View>
                        </View>
                        <CodeInput
                            isReset={isResetCodeInput}
                            setIsResetError={setIsResetCodeInput}
                            setIsValidCode={setIsValidCode}
                        />
                    </View>
                    <View style={style.wrapperButtons}>
                        <Button
                            type={ButtonTypes.FULLSCREEN}
                            onPress={handleClickSendAgain}
                            style={{
                                backgroundColor: isDark
                                    ? FontColors.GRAY_LIGHT
                                    : 'transparent',
                            }}
                        >
                            <Text
                                style={{
                                    ...style.contentButton,
                                    color: isDark
                                        ? FontColors.WHITE
                                        : FontColors.BLUE,
                                }}
                            >
                                Send Again
                            </Text>
                        </Button>
                        <Button
                            type={ButtonTypes.FULLSCREEN}
                            onPress={handleClickNext}
                            disabled={!isValidCode}
                            style={{
                                backgroundColor: isDark
                                    ? isValidCode
                                        ? FontColors.GRAY_LIGHT
                                        : 'transparent'
                                    : isValidCode
                                      ? FontColors.BLUE
                                      : FontColors.DARK_LIGHT,
                            }}
                        >
                            <Text
                                style={{
                                    color: isDark
                                        ? isValidCode
                                            ? FontColors.WHITE
                                            : FontColors.GRAY_LIGHT
                                        : isValidCode
                                          ? FontColors.WHITE
                                          : FontColors.GRAY_LIGHT,
                                    ...style.contentButtonNext,
                                }}
                            >
                                Next
                            </Text>
                        </Button>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};
