import {
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react';
import { View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import {
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    Text,
} from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import { styles } from './CodeInput.styles';

import ErrorIcon from 'assets/svg-icons/action/error-chevron-circle.svg';

interface CodeInputProps {
    isReset: boolean;
    setIsResetError: Dispatch<SetStateAction<boolean>>;
    setIsValidCode: Dispatch<SetStateAction<boolean>>;
}

export const CodeInput: FC<CodeInputProps> = ({
    isReset,
    setIsResetError,
    setIsValidCode,
}) => {
    const ref = useRef<any>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [isError, setIsError] = useState(false);

    const validateCode = (code: string) => {
        if (code === '1234') {
            setIsValidCode(false);
            setIsError(true);
        } else {
            setIsError(false);
            setIsValidCode(true);
        }
    };

    useEffect(() => {
        if (isReset) {
            setIsResetError(false);
            setIsError(false);
            ref.current.clear();
            ref.current.focus();
        }
    }, [isReset, setIsError, setIsResetError]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.optInputWrapper}>
                <OtpInput
                    ref={ref}
                    numberOfDigits={4}
                    onFilled={validateCode}
                    focusColor={FontColors.BLUE}
                    blurOnFilled
                    theme={{
                        focusedPinCodeContainerStyle: {
                            borderWidth: 1,
                        },
                        disabledPinCodeContainerStyle: {
                            borderWidth: 0.5,
                            borderColor: FontColors.GRAY_DARK,
                        },
                        pinCodeContainerStyle: {
                            borderWidth: 0.5,
                            borderColor: isError
                                ? FontColors.RED
                                : FontColors.GRAY_DARK,
                            height: 44,
                            width: 72,
                        },
                        pinCodeTextStyle: {
                            color: isDark
                                ? Colors.dark.text
                                : Colors.light.text,
                        },
                    }}
                />
            </View>
            {isError && (
                <View style={styles.errorWrapper}>
                    <ErrorIcon width={24} height={24} />
                    <Text
                        color={FontColors.RED}
                        fontFamily={InterFontFamily.ff400}
                        fontSize={FontSize.fz12}
                        lineHeight={LineHeight.lh20}
                    >
                        The code doesn’t match
                    </Text>
                </View>
            )}
        </View>
    );
};
