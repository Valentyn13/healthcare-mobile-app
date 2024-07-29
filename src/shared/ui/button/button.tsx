import { ReactNode } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

import { ButtonTypes } from '../../constants/enums/button-types.enum';

interface ButtonProps extends PressableProps {
    type?: ButtonTypes;
    feedbackColor?: string;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
    children: ReactNode;
}

const baseStyles: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#009FFA',
};

const getStylesByType = (type: ButtonTypes): StyleProp<ViewStyle> => {
    switch (type) {
        case ButtonTypes.FULLSCREEN:
            return {
                ...baseStyles,
                gap: 15,
                width: '100%',
                padding: 14,
                borderRadius: 12,
            };
        case ButtonTypes.ROUNDED:
            return {
                ...baseStyles,
                borderRadius: 100,
                width: 41,
                height: 41,
            };
        case ButtonTypes.ELIPSE:
            return {
                ...baseStyles,
                width: 'auto',
                paddingVertical: 8,
                paddingHorizontal: 30,
                borderRadius: 120,
            };
        case ButtonTypes.OUTLINE:
            return {
                ...baseStyles,
                backgroundColor: 'transparent',
                paddingVertical: 8,
                paddingHorizontal: 30,
                width: 'auto',
                borderRadius: 120,
                borderWidth: 1,
                borderColor: '#009FFA',
            };
        case ButtonTypes.TRANSPARENT:
            return {
                ...baseStyles,
                backgroundColor: 'transparent',
                padding: 16,
            };
        case ButtonTypes.EMPTY:
            return {
                ...baseStyles,
                backgroundColor: 'transparent',
            };
        default:
            return {
                backgroundColor: 'red',
            };
    }
};

const Button = ({
    type = ButtonTypes.FULLSCREEN,
    children,
    feedbackColor,
    style,
    onPress,
    ...props
}: ButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                getStylesByType(type),
                style,
                pressed &&
                    (feedbackColor
                        ? { backgroundColor: feedbackColor }
                        : { opacity: 0.8 }),
            ]}
            {...props}
        >
            {children}
        </Pressable>
    );
};

export { Button };
