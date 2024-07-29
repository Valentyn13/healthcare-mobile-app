import { StyleSheet } from 'react-native';

import {
    FontColors,
    FontSize,
    LetterSpacing,
    LineHeight,
    RobotoFontFamily,
} from '../../../shared';

export const styles = (isDark: boolean) =>
    StyleSheet.create({
        socialContainer: {
            marginVertical: 16,
        },
        orContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
            gap: 8,
        },
        line: {
            flex: 1,
            height: 1,
            backgroundColor: isDark
                ? FontColors.GRAY_LIGHT
                : FontColors.DARK_LIGHT,
        },
        socialButtons: {
            gap: 8,
        },
        socialButton: {
            backgroundColor: isDark ? '#121212' : '#f8f8f8',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 15,
            borderRadius: 8,
            gap: 15,
        },
        facebookButton: {
            backgroundColor: isDark ? '#121212' : '#1877F2',
        },
        appleButton: {
            backgroundColor: isDark ? '#121212' : '#222222',
        },
        socialText: {
            fontSize: FontSize.fz16,
            lineHeight: LineHeight.lh22,
            fontFamily: RobotoFontFamily.ff700,
            letterSpacing: LetterSpacing.ls02,
        },
    });
