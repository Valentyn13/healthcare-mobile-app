import { FC } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FontSize, InterFontFamily, LineHeight, Text } from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import { MessageHumanType } from '../types';

interface MessageHumanProps {
    message: MessageHumanType;
}

export const MessageHuman: FC<MessageHumanProps> = ({ message }) => {
    const { theme } = useTheme();

    return (
        <View
            style={{
                backgroundColor: Colors[theme].chat.bgHumanMessage,
                ...style.wrapper,
            }}
        >
            <Text
                fontFamily={InterFontFamily.ff500}
                fontSize={FontSize.fz14}
                lineHeight={LineHeight.lh22}
                color={Colors[theme].chat.textHumanMessage}
            >
                {message.description}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    wrapper: {
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        maxWidth: Dimensions.get('screen').width * 0.67,
        alignSelf: 'flex-end',
        marginRight: 15,
    },
});
