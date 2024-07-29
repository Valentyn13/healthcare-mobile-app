import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

import { FontColors, Text } from '../../../../shared';
import useTheme from '../../../../shared/lib/useTheme.ts';

import CloseIcon from '../../../../../assets/svg-icons/controll/close-circle-gray.svg';

const ChangePassword: FC = () => {
    const { theme } = useTheme();

    const isDark = theme === 'dark';

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 24,
                paddingTop: 12,
                backgroundColor: isDark ? '#000' : '#fff',
            }}
        >
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    router.back();
                }}
            >
                <CloseIcon
                    width={35}
                    height={35}
                    color={
                        isDark ? FontColors.GRAY_DARK_2 : FontColors.GRAY_LIGHT
                    }
                />
            </TouchableOpacity>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text color={isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT}>
                    Change Password will be later
                </Text>
            </View>
        </View>
    );
};

export default ChangePassword;
