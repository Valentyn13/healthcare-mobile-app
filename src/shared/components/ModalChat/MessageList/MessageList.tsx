import { forwardRef, useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import useTheme from '../../../lib/useTheme.ts';
import { MessageAi } from '../MessageAi/MessageAi';
import { MessageChat } from '../MessageChat/MessageChat';
import { MessageChatWriting } from '../MessageChatWriting/MessageChatWriting';
import { MessageHuman } from '../MessageHuman/MessageHuman';
import { SelectedHint } from '../SelectedHint/SelectedHint';
import { MessageType } from '../types';

interface MessageListProps {
    messages: MessageType[];
    isWritingChat: boolean;
    addNewMessage: (message: MessageType) => void;
    scrollToEnd: () => void;
    isNewMessage: boolean;
    disableNewMessage: () => void;
}

export const MessageList = forwardRef<any, MessageListProps>(
    (
        {
            messages,
            isWritingChat,
            scrollToEnd,
            isNewMessage,
            disableNewMessage,
            addNewMessage,
        },
        ref,
    ) => {
        const { theme } = useTheme();
        const displayedMessages: MessageType[] = useMemo(
            () =>
                isWritingChat
                    ? [...messages, { type: 'loading', id: 'loading' }]
                    : messages,
            [messages, isWritingChat],
        );

        const renderItem: ListRenderItem<MessageType> = useCallback(
            ({ item, index }) => {
                switch (item.type) {
                    case 'ai':
                        return (
                            <MessageAi
                                message={item}
                                scrollToEnd={scrollToEnd}
                                isFirstMessage={index === 0}
                                isNewMessage={isNewMessage}
                                disableNewMessage={disableNewMessage}
                            />
                        );
                    case 'chat':
                        return (
                            <MessageChat
                                message={item}
                                scrollToEnd={scrollToEnd}
                                isFirstMessage={index === 0}
                                isNewMessage={isNewMessage}
                                disableNewMessage={disableNewMessage}
                                addNewMessage={addNewMessage}
                            />
                        );
                    case 'human':
                        return <MessageHuman message={item} />;
                    case 'hint':
                        return <SelectedHint message={item} />;
                    case 'loading':
                        return <MessageChatWriting />;
                    default:
                        return null;
                }
            },
            [scrollToEnd, isNewMessage, disableNewMessage, addNewMessage],
        );

        const keyExtractor = useCallback((item: MessageType) => item.id, []);

        return (
            <FlatList
                ref={ref}
                data={displayedMessages}
                keyExtractor={keyExtractor}
                contentContainerStyle={{ gap: 25 }}
                onContentSizeChange={scrollToEnd}
                showsVerticalScrollIndicator={true}
                indicatorStyle={theme === 'dark' ? 'white' : 'black'}
                renderItem={renderItem}
            />
        );
    },
);
