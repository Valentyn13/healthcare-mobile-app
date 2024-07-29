import { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import useTheme from 'src/shared/lib/useTheme';

import { userActions } from '../../model/store/slices/user/slice.ts';
import {
    Button,
    ButtonTypes,
    FontColors,
    FontSize,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    RobotoFontFamily,
    Text,
} from '../../shared';
import { useAppDispatch } from '../../shared/lib/hooks/use-app-dispatch.hook.ts';

const ConfirmLogoutScreen: FC = () => {
    const { theme } = useTheme();

    const isDark = theme === 'dark';

    const router = useRouter();

    const dispatch = useAppDispatch();

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: isDark ? 'black' : 'white',
                },
            ]}
        >
            <View style={styles.imageWrapper}>
                <View style={styles.image}>
                    <Image
                        source={require('../../../assets/svg-icons/other/attention.png')}
                    />
                </View>
            </View>

            <Text
                color={isDark ? FontColors.WHITE : FontColors.DARK}
                fontFamily={RobotoFontFamily.ff700}
                fontSize={FontSize.fz24}
                lineHeight={LineHeight.lh28}
                letterSpacing={LetterSpacing.ls01}
                style={{ textAlign: 'center', maxWidth: 277 }}
            >
                Oh no! You`re leaving... Are you sure?
            </Text>
            <View style={{ gap: 8, width: '100%' }}>
                <Button
                    onPress={() => {
                        dispatch(userActions.logout());
                        router.replace('/auth');
                    }}
                >
                    <Text
                        color={FontColors.WHITE}
                        fontFamily={InterFontFamily.ff600}
                        fontSize={FontSize.fz16}
                        lineHeight={LineHeight.lh20}
                    >
                        Yes, log out
                    </Text>
                </Button>
                <Button
                    style={{
                        height: 50,
                    }}
                    type={ButtonTypes.EMPTY}
                    onPress={() => {
                        router.back();
                    }}
                >
                    <Text
                        color={
                            isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT
                        }
                        fontFamily={InterFontFamily.ff600}
                        fontSize={FontSize.fz16}
                        lineHeight={LineHeight.lh22}
                        letterSpacing={LetterSpacing.ls02}
                    >
                        {' '}
                        Return back
                    </Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        gap: 32,
    },
    imageWrapper: {
        position: 'relative',
        width: 160,
        height: 160,
    },
    image: {
        position: 'absolute',
        left: '-60%',
        top: '-75%',
        width: '100%',
        height: '100%',
    },
});

export default ConfirmLogoutScreen;
