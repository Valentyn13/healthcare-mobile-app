import { FC, useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import {
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    RobotoFontFamily,
    Text,
} from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import { MessageAiType } from '../types';

import LogoIconWhite from 'assets/svg-icons/other/brain.svg';
import LogoIconDark from 'assets/svg-icons/other/brain-white.svg';

interface MessageChatProps {
    message: MessageAiType;
    isFirstMessage: boolean;
    scrollToEnd: () => void;
    isNewMessage: boolean;
    disableNewMessage: () => void;
}

export const MessageAi: FC<MessageChatProps> = ({
    message,
    isFirstMessage,
    scrollToEnd,
    isNewMessage,
    disableNewMessage,
}) => {
    const { theme } = useTheme();

    const [displayedMessage, setDisplayedMessage] = useState('');
    const [isMessageWriting, setIsMessageWriting] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isNewMessage && !isFirstMessage) {
            setIsMessageWriting(true);
            const words = message.description.split(' ');
            let index = 0;

            interval = setInterval(() => {
                if (index < words.length) {
                    setDisplayedMessage(
                        (prev) => prev + (prev ? ' ' : '') + words[index],
                    );
                    index++;
                    scrollToEnd();
                } else {
                    setIsMessageWriting(false);
                }
            }, 150);
        } else {
            setDisplayedMessage(message.description);
            scrollToEnd();
            disableNewMessage();
        }

        return () => {
            clearInterval(interval);
            scrollToEnd();
            disableNewMessage();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message.description, isFirstMessage]);

    useEffect(() => {
        scrollToEnd();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMessageWriting]);

    return (
        <>
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
                                marginBottom: isMessageWriting ? 20 : 0,
                                fontFamily: InterFontFamily.ff400,
                                fontSize: FontSize.fz14,
                                lineHeight: LineHeight.lh18,
                                color: Colors[theme].chat.text,
                            }}
                        >
                            {displayedMessage}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
};
