import { useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { FontColors } from 'src/shared/constants/enums/colors.enum';

import { stylesInput } from '../input-filed-styles';
type PhoneInputProps = {
    value: string;
    maskAutoComplete?: boolean;
    isDark?: boolean;
    style?: StyleProp<TextStyle>;
    placeholderFillCharacter?: string;
    onPhoneCange: (phone: string) => void;
};

const PhoneInput = ({
    onPhoneCange,
    style,
    value,
    isDark = false,
    placeholderFillCharacter,
}: PhoneInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <MaskInput
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            inputMode="numeric"
            value={value}
            placeholderTextColor={isDark ? FontColors.WHITE : FontColors.GRAY}
            maskAutoComplete={true}
            style={[
                stylesInput.input,
                stylesInput.shadowProps,
                isFocused &&
                    (isDark
                        ? stylesInput.focusDarkStyle
                        : stylesInput.focusStyle),
                style,
                isDark && stylesInput.darkThemeStyle,
            ]}
            placeholderFillCharacter={placeholderFillCharacter}
            onChangeText={(masked: string, unmasked: string) =>
                onPhoneCange(unmasked)
            }
            mask={[
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
            ]}
        />
    );
};

export { PhoneInput };
