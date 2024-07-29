import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Button,
    ButtonTypes,
    FontSize,
    InterFontFamily,
    LineHeight,
    Text,
} from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import { MessageHintType } from '../types';

interface SelectedHintProps {
    message: MessageHintType;
}

export const SelectedHint: FC<SelectedHintProps> = ({ message }) => {
    const { theme } = useTheme();

    return (
        <View>
            <Button
                type={ButtonTypes.OUTLINE}
                onPress={() => {}}
                style={{
                    borderColor: Colors[theme].chat.border,
                    ...style.button,
                }}
            >
                <Text
                    fontFamily={InterFontFamily.ff500}
                    fontSize={FontSize.fz14}
                    lineHeight={LineHeight.lh18}
                    color={Colors[theme].chat.textHintMessage}
                >
                    {message.description}
                </Text>
            </Button>
        </View>
    );
};

const style = StyleSheet.create({
    button: {
        borderWidth: 0.5,
        borderRadius: 14,
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignSelf: 'center',
    },
});
