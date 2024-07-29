import {
    FlatList,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
    FontColors,
    FontSize,
    FontWeight,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    RobotoFontFamily,
    Text,
} from 'src/shared';
import useTheme from 'src/shared/lib/useTheme';

import ArrowBackIcon from '../../../assets/svg-icons/controll/arrow-back-auth-icon.svg';

const Resources = [
    {
        title: 'FAQ',
        description: 'Here you find answers to common questions about our app.',
        redirectPath: '/',
    },
    {
        title: 'Contact us',
        description: 'Feel free to contact us if you have further questions.',
        redirectPath: '/',
    },
    {
        title: 'Guides',
        description: 'Explore more useful information about mental health.',
        redirectPath: '/',
    },
];

const ResoursesScreen = () => {
    const router = useRouter();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <View
            style={[
                styles.container,
                isDark && {
                    backgroundColor: FontColors.BLACK,
                },
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
                    Resources
                </Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={Resources}
                renderItem={({ item }) => (
                    <Pressable
                        style={({ pressed }) => [
                            styles.item,
                            isDark && {
                                borderColor: FontColors.DARK_2,
                            },
                            pressed &&
                                (isDark
                                    ? { backgroundColor: '#2F3135' }
                                    : {
                                          backgroundColor: '#f7f7f7',
                                      }),
                        ]}
                        onPress={() => router.push(item.redirectPath)}
                    >
                        <Text
                            color={isDark ? FontColors.WHITE : FontColors.DARK}
                            fontSize={FontSize.fz16}
                            fontWeight={FontWeight.fw500}
                            letterSpacing={LetterSpacing.ls_016}
                            fontFamily={RobotoFontFamily.ff500}
                        >
                            {item.title}
                        </Text>
                        <Text
                            fontSize={FontSize.fz12}
                            letterSpacing={LetterSpacing.ls02}
                            lineHeight={LineHeight.lh18}
                            fontFamily={InterFontFamily.ff400}
                        >
                            {item.description}
                        </Text>
                    </Pressable>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: FontColors.WHITE,
        padding: 24,
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    item: {
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 12,
        borderColor: FontColors.GRAY_DARK,
        borderWidth: 1,
        marginBottom: 12,
    },
});

export default ResoursesScreen;
