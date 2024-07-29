import { useState } from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native';
import { FontColors } from 'src/shared/constants/enums/colors.enum';
import {
    InterFontFamily,
    RobotoFontFamily,
} from 'src/shared/constants/enums/fontFamilies';

import { stylesInput } from '../input-filed-styles';
interface InputProps extends TextInputProps {
    style?: StyleProp<TextStyle>;
    placeholderTextColor?: string;
    isDark?: boolean;
    cursorColor?: string;
    font: InterFontFamily | RobotoFontFamily;
}

const Input = ({
    style,
    isDark = false,
    placeholderTextColor = FontColors.GRAY,
    cursorColor = FontColors.GRAY,
    font,
    value,
    ...props
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <TextInput
            value={value}
            placeholderTextColor={placeholderTextColor}
            cursorColor={cursorColor}
            {...props}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            style={[
                stylesInput.input,
                stylesInput.shadowProps,
                { fontFamily: font },
                style,
                isDark && {
                    ...stylesInput.darkThemeStyle,
                    borderColor: '#151515',
                },
                isFocused &&
                    (isDark
                        ? stylesInput.focusDarkStyle
                        : stylesInput.focusStyle),
            ]}
        />
    );
};

export { Input };
