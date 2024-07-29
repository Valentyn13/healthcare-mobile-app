import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import {
    Button,
    ButtonTypes,
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    Text,
} from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import LogoIcon from '../../../../assets/svg-icons/other/brain_dark.svg';

interface SlideItemProps {
    header: string;
    description: string;
}

export const SliderItem: FC<SlideItemProps> = ({ description, header }) => {
    const router = useRouter();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const colorSchema = isDark ? 'dark' : 'light';

    const handleReturnChat = () => {
        router.push('/');
    };

    return (
        <View style={style.wrapper}>
            <View style={style.main}>
                <LogoIcon width={30} height={30} />
                <View style={style.wrapperText}>
                    <Text
                        fontFamily={InterFontFamily.ff600}
                        fontSize={FontSize.fz20}
                        lineHeight={LineHeight.lh24}
                        color={Colors[colorSchema].mainPage.primary}
                    >
                        {header}
                    </Text>
                    <Text
                        fontFamily={InterFontFamily.ff400}
                        fontSize={FontSize.fz14}
                        lineHeight={LineHeight.lh16}
                        color={FontColors.GRAY_LIGHT}
                    >
                        {description}
                    </Text>
                </View>
                <View style={style.wrapperButton}>
                    <Button
                        onPress={handleReturnChat}
                        type={ButtonTypes.ELIPSE}
                        style={{
                            backgroundColor:
                                colorSchema === 'dark'
                                    ? FontColors.WHITE
                                    : FontColors.BLUE,
                        }}
                    >
                        <Text
                            color={
                                colorSchema === 'dark'
                                    ? FontColors.BLACK
                                    : FontColors.WHITE
                            }
                            style={{ padding: 2 }}
                        >
                            Return to chat
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    wrapper: {
        borderColor: '#F1F1F1',
        borderWidth: 0.5,
        borderRadius: 12,
        padding: 12,
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
    },
    wrapperText: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    wrapperButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
