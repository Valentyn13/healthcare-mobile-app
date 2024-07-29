import React from 'react';
import { View } from 'react-native';
import useTheme from 'src/shared/lib/useTheme';

import {
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    Text,
} from '../../../shared';

const AuthHeader = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <View style={{ gap: 8 }}>
            <Text
                color={isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT}
                fontSize={FontSize.fz32}
                lineHeight={LineHeight.lh40}
                fontFamily={InterFontFamily.ff700}
            >
                Authentication
            </Text>
            <Text
                color={FontColors.GRAY_LIGHT}
                fontSize={FontSize.fz12}
                lineHeight={LineHeight.lh24}
                fontFamily={InterFontFamily.ff400}
            >
                Choose your authentication method
            </Text>
        </View>
    );
};

export default AuthHeader;
