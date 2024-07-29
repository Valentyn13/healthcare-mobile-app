import { StyleSheet } from 'react-native';

import { FontColors } from '../../shared';

export const styles = (isDark: boolean) =>
    StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: 10,
            paddingBottom: 10,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        titleWrapper: {
            marginTop: 38,
            gap: 10,
        },
        tryFreeBtn: {
            position: 'absolute',
            bottom: 30,
            paddingVertical: 8,
            alignSelf: 'center',
            borderRadius: 120,
            width: 148,
            backgroundColor: isDark ? FontColors.DARK_2 : FontColors.BLUE_LIGHT,
        },
    });
