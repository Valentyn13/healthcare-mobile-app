import { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import useTheme from 'src/shared/lib/useTheme';

import {
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    RobotoFontFamily,
    Text,
} from '../../../shared';
import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector.hook.ts';

const ProfileInfo: FC = () => {
    const { theme } = useTheme();

    const isDark = theme === 'dark';

    const user = useAppSelector((state) => state.user.authData);

    return (
        <View>
            <Image
                width={96}
                height={96}
                style={styles.avatar}
                source={{ uri: user?.avatar }}
            />
            <Text
                style={styles.username}
                color={isDark ? FontColors.WHITE : FontColors.DARK}
                fontSize={FontSize.fz16}
                lineHeight={LineHeight.lh18}
                fontFamily={RobotoFontFamily.ff700}
            >
                {user?.firstName} {user?.surname}
            </Text>
            <Text
                fontFamily={InterFontFamily.ff500}
                style={styles.plan}
                color={isDark ? FontColors.GRAY_LIGHT : FontColors.BLUE_LIGHT}
                fontSize={FontSize.fz12}
                lineHeight={LineHeight.lh14}
            >
                {user?.plan}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 200,
        marginHorizontal: 'auto',
    },
    username: {
        marginTop: 12,
        marginHorizontal: 'auto',
    },
    plan: {
        marginTop: 1,
        marginHorizontal: 'auto',
    },
});

export default ProfileInfo;
