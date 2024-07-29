import { StyleSheet } from 'react-native';

import { FontColors } from '../../../shared';

export const styles = (isDark: boolean) =>
    StyleSheet.create({
        selectPlanWrapper: {
            alignItems: 'center',
            marginTop: 69,
            gap: 15,
        },
        planBox: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            backgroundColor: isDark ? '#090909' : FontColors.WHITE,
            paddingHorizontal: 15,
            paddingVertical: 18,
            borderWidth: 0.5,
            borderColor: isDark ? FontColors.DARK_2 : FontColors.GRAY_DARK,
            borderRadius: 12,
            shadowColor: 'rgba(0, 0, 0, 0.05)',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            elevation: 6,
        },
        planBoxSelected: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 20,
            backgroundColor: isDark ? FontColors.DARK_2 : FontColors.WHITE,
            paddingTop: 14,
            paddingBottom: 15,
            borderRadius: 12,
            borderWidth: 1.5,
            borderColor: isDark ? FontColors.DARK_2 : FontColors.BLUE_LIGHT,
        },
        freePlanButton: {
            alignItems: 'center',
        },
        checkboxWrapper: {
            width: 14,
            height: 14,
            borderWidth: 2,
            borderRadius: 200,
            borderColor: FontColors.GRAY_LIGHT,
        },
    });
