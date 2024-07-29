import { FC } from 'react';
import { Dimensions, View } from 'react-native';
import {
    Button,
    ButtonTypes,
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    RobotoFontFamily,
    Text,
} from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import { MessageChatType, MessageType } from '../types';

import LogoIconWhite from 'assets/svg-icons/other/brain.svg';
import LogoIconDark from 'assets/svg-icons/other/brain-white.svg';

interface MessageChatProps {
    message: MessageChatType;
    isFirstMessage: boolean;
    addNewMessage: (message: MessageType) => void;
    scrollToEnd: () => void;
    isNewMessage: boolean;
    disableNewMessage: () => void;
}

export const MessageChat: FC<MessageChatProps> = ({
    message,
    isFirstMessage,
    addNewMessage,
    scrollToEnd,
    isNewMessage,
    disableNewMessage,
}) => {
    const { theme } = useTheme();

    return (
        <>
            {isFirstMessage && (
                <>
                    {theme === 'dark' ? (
                        <LogoIconDark
                            width={55}
                            height={55}
                            style={{ alignSelf: 'center', marginVertical: 95 }}
                        />
                    ) : (
                        <LogoIconWhite
                            width={55}
                            height={55}
                            style={{ alignSelf: 'center', marginVertical: 95 }}
                        />
                    )}
                </>
            )}
            <View
                style={{
                    marginLeft: 15,
                    marginRight: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                    gap: 10,
                }}
            >
                <View
                    style={{
                        width: 27,
                        height: 27,
                        borderColor:
                            theme === 'dark'
                                ? Colors[theme].background
                                : FontColors.GRAY_DARK,
                        borderWidth: 1,
                        borderRadius: 50,
                        backgroundColor:
                            theme === 'dark' ? '#151515' : '#FBFBFB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {theme === 'dark' ? (
                        <LogoIconDark
                            width={15}
                            height={15}
                            style={{ alignSelf: 'center', marginVertical: 95 }}
                        />
                    ) : (
                        <LogoIconWhite
                            width={15}
                            height={15}
                            style={{ alignSelf: 'center', marginVertical: 95 }}
                        />
                    )}
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 15,
                        width: Dimensions.get('screen').width * 0.67,
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                            marginTop: 6,
                        }}
                    >
                        {message.header && (
                            <Text
                                style={{
                                    fontFamily: RobotoFontFamily.ff500,
                                    fontSize: FontSize.fz14,
                                    lineHeight: LineHeight.lh16,
                                    color: Colors[theme].chat.text,
                                }}
                            >
                                {message.header}
                            </Text>
                        )}
                        <Text
                            style={{
                                width: 200,
                                fontFamily: InterFontFamily.ff400,
                                fontSize: FontSize.fz14,
                                lineHeight: LineHeight.lh18,
                                color: Colors[theme].chat.text,
                            }}
                        >
                            {message.description}
                        </Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                        }}
                    >
                        {message.hintList?.map((hint, index) => (
                            <Button
                                key={index}
                                onPress={() => {
                                    addNewMessage({
                                        id: `${hint.id}-${new Date().getTime()}`,
                                        type: 'hint',
                                        description: hint.title,
                                        value: hint.value,
                                    });
                                }}
                                type={ButtonTypes.OUTLINE}
                                style={{
                                    borderColor: Colors[theme].chat.border,
                                    paddingVertical: 12,
                                    paddingHorizontal: 14,
                                    borderRadius: 14,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: InterFontFamily.ff500,
                                        fontSize: FontSize.fz14,
                                        lineHeight: LineHeight.lh18,
                                        color: Colors[theme].chat.text,
                                    }}
                                >
                                    {hint.title}
                                </Text>
                            </Button>
                        ))}
                    </View>
                </View>
            </View>
        </>
    );
};
