import { StyleSheet } from 'react-native';

import {
    FontColors,
    InterFontFamily,
    LineHeight,
    RobotoFontFamily,
} from '../../../shared';

export const styles = (isDark: boolean) =>
    StyleSheet.create({
        toggleContainer: {
            flexDirection: 'row',
            borderRadius: 12,
            padding: 2,
            backgroundColor: isDark ? FontColors.DARK_2 : '#F8F8F8',
            overflow: 'hidden',
        },
        toggleButton: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            borderRadius: 11,
        },
        activeButton: {
            backgroundColor: isDark ? FontColors.BLACK : FontColors.WHITE,
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 1,
        },
        defaultText: {
            color: FontColors.GRAY_LIGHT,
            fontFamily: InterFontFamily.ff500,
            lineHeight: LineHeight.lh20,
        },
        activeText: {
            color: isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT,
            fontFamily: RobotoFontFamily.ff700,
            lineHeight: LineHeight.lh20,
        },
    });
