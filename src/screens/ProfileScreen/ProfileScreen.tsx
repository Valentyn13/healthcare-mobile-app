import { FC } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import useTheme from 'src/shared/lib/useTheme';

import {
    Button,
    ButtonTypes,
    FontColors,
    FontSize,
    FontWeight,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    RobotoFontFamily,
    Text,
} from '../../shared';

import ProfileInfo from './ProfileInfo/ProfileInfo.tsx';
import ProfileTabs from './ProfileTabs/ProfileTabs.tsx';

import ArrowBackIcon from '../../../assets/svg-icons/controll/arrow-back-auth-icon.svg';

const ProfileScreen: FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const router = useRouter();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={[
                styles.container,
                { backgroundColor: isDark ? '#000' : '#fff' },
            ]}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => {
                        router.back();
                    }}
                    style={{
                        paddingVertical: 11.5,
                        justifyContent: 'center',
                    }}
                >
                    <ArrowBackIcon
                        color={isDark ? FontColors.WHITE : FontColors.DARK}
                    />
                </TouchableOpacity>
                <Text
                    fontSize={FontSize.fz20}
                    fontWeight={FontWeight.fw600}
                    color={isDark ? FontColors.WHITE : FontColors.DARK}
                    letterSpacing={LetterSpacing.ls02}
                    fontFamily={RobotoFontFamily.ff500}
                    style={{ marginHorizontal: 'auto' }}
                >
                    Settings
                </Text>
            </View>

            <ProfileInfo />

            <ProfileTabs />

            <Button
                type={ButtonTypes.EMPTY}
                onPress={() => {
                    router.push('/confirm-logout');
                }}
                style={[
                    styles.logoutBtn,
                    {
                        backgroundColor: isDark
                            ? FontColors.DARK_2
                            : FontColors.BLUE_LIGHT,
                    },
                ]}
            >
                <Text
                    color={FontColors.WHITE}
                    fontFamily={InterFontFamily.ff700}
                    lineHeight={LineHeight.lh22}
                    letterSpacing={LetterSpacing.ls02}
                >
                    Log out
                </Text>
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    logoutBtn: {
        marginTop: 16,
        marginHorizontal: 'auto',
        paddingVertical: 8,
        width: 113,
        borderRadius: 120,
        marginBottom: 8,
    },
});

export default ProfileScreen;
