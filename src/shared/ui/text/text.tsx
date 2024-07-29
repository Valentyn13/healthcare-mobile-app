import { ReactNode } from 'react';
import {
    StyleProp,
    Text as DefaultText,
    TextProps,
    TextStyle,
} from 'react-native';

import {
    FontColors,
    FontSize,
    FontWeight,
    LetterSpacing,
    LineHeight,
} from '../../constants/enums/enums';
import {
    InterFontFamily,
    RobotoFontFamily,
} from '../../constants/enums/fontFamilies.ts';

interface CustomTextProps extends TextProps {
    color?: FontColors | string;
    fontSize?: FontSize;
    fontWeight?: FontWeight;
    letterSpacing?: LetterSpacing;
    lineHeight?: LineHeight;
    fontFamily?: RobotoFontFamily | InterFontFamily;
    children: ReactNode;
    style?: StyleProp<TextStyle>;
}

const Text = ({
    color = FontColors.GRAY,
    fontSize = FontSize.fz14,
    fontWeight = FontWeight.fw400,
    fontFamily,
    letterSpacing,
    lineHeight,
    children,
    style,
    ...props
}: CustomTextProps) => {
    return (
        <DefaultText
            style={[
                {
                    color,
                    fontSize,
                    fontWeight,
                    letterSpacing,
                    lineHeight,
                    fontFamily,
                },
                style,
            ]}
            {...props}
        >
            {children}
        </DefaultText>
    );
};

export { Text };
