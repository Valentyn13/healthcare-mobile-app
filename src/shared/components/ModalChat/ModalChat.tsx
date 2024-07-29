import { forwardRef, useEffect, useRef, useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    Text,
} from 'src/shared';
import { INITIAL_MESSAGE } from 'src/shared/constants/chatScreen';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import { tabBarActions } from '../../../model/store/slices/tabBar/slice.ts';
import { useAppDispatch } from '../../lib/hooks/use-app-dispatch.hook.ts';

import { MessageInput } from './MessageInput/MessageInput';
import { MessageList } from './MessageList/MessageList';
import { chatBotMessageList } from './chatBotMessageList';
import { MessageAiType, MessageType } from './types';

import ArrowBackIcon from '../../../../assets/svg-icons/controll/arrow-back-auth-icon.svg';

const SNAP_POINTS = [10, '100%'];

const AI_RESPONSES = [
    "Hello! How can I assist you today? I'm here to help with any questions",
    "I'm here to help you with any questions you have. Whether it's about technology.",
    'What would you like to talk about? There are so many interesting topics we can discuss',
    "How are you feeling today? It's always good to take a moment to check in with yourself",
];

interface ModalChatProps {
    onModalClose: () => void;
    openFromTabbar?: boolean;
}

export const ModalChat = forwardRef<any, ModalChatProps>(
    ({ onModalClose, openFromTabbar = false }, ref) => {
        const insets = useSafeAreaInsets();
        const { theme } = useTheme();
        const messageListRef = useRef<any>(null);

        const [messages, setMessages] = useState<MessageType[]>([
            INITIAL_MESSAGE,
        ]);
        const [isWritingChat, setIsWritingChat] = useState(false);
        const [isNewMessage, setIsNewMessage] = useState(false);

        const dispatch = useAppDispatch();

        const scrollToEnd = () => {
            messageListRef.current?.scrollToEnd({
                animated: true,
            });
        };

        const handleMessageSend = (message: MessageType) => {
            setMessages((prev) => [...prev, message]);
            setIsWritingChat(true);
            setIsNewMessage(true);
        };

        const handleChangeModalChat = (index: number) => {
            if (index === 1) {
                scrollToEnd();
            }

            if (index === 0) {
                onModalClose();
            }
        };

        const addNewMessage = (message: MessageType) => {
            scrollToEnd();
            setMessages((prev) => [...prev, message]);

            if (message.type === 'hint') {
                const hint = chatBotMessageList.find(
                    (chat) => chat.value === message.value,
                );

                if (hint) {
                    setMessages((prev) => [
                        ...prev,
                        { ...hint, id: `${hint.id}-${new Date().getTime()}` },
                    ]);
                }
            }
        };

        useEffect(() => {
            let timeout: NodeJS.Timeout;

            if (isWritingChat) {
                timeout = setTimeout(() => {
                    const aiResponse: MessageAiType = {
                        id: new Date().getTime().toString(),
                        type: 'ai',
                        header: 'AI',
                        description:
                            AI_RESPONSES[
                                Math.floor(Math.random() * AI_RESPONSES.length)
                            ],
                    };
                    setMessages((prev) => [...prev, aiResponse]);
                    setIsWritingChat(false);
                }, 3000);
            }

            return () => clearTimeout(timeout);
        }, [isWritingChat]);

        useEffect(() => {
            setTimeout(() => {
                scrollToEnd();
            }, 100);
        }, [messages]);

        useEffect(() => {
            const keyboardDidShowListener = Keyboard.addListener(
                'keyboardDidShow',
                () => {
                    scrollToEnd();
                },
            );
            return () => keyboardDidShowListener.remove();
        }, []);

        return (
            <GestureHandlerRootView
                style={{
                    flex: 1,
                    backgroundColor: Colors[theme].background,
                }}
            >
                <View
                    style={{
                        backgroundColor: Colors[theme].background,
                        marginBottom: insets.bottom,
                        ...styles.container,
                    }}
                >
                    <BottomSheetModalProvider>
                        <BottomSheetModal
                            ref={ref}
                            snapPoints={SNAP_POINTS}
                            enablePanDownToClose
                            index={1}
                            backgroundStyle={{
                                backgroundColor: Colors[theme].background,
                                shadowColor: theme === 'dark' ? '#fff' : '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: -4,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: 25,
                                elevation: 60,
                                borderRadius: 0,
                            }}
                            handleIndicatorStyle={{
                                backgroundColor: '#A09CAB',
                                width: 80,
                                height: 4,
                            }}
                            enableOverDrag={false}
                            enableContentPanningGesture={false}
                            enableHandlePanningGesture={true}
                            onDismiss={onModalClose}
                            onChange={handleChangeModalChat}
                        >
                            <View
                                style={{
                                    ...styles.sheetView,
                                    backgroundColor: Colors[theme].background,
                                }}
                            >
                                <View style={styles.headerContainer}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            onModalClose();
                                            dispatch(
                                                tabBarActions.visibleTabBar(),
                                            );
                                        }}
                                        style={{
                                            paddingVertical: 11.5,
                                            position: 'absolute',
                                            top: 0,
                                            left: openFromTabbar ? 24 : 0,
                                        }}
                                    >
                                        <ArrowBackIcon
                                            color={
                                                theme === 'dark'
                                                    ? FontColors.WHITE
                                                    : FontColors.DARK
                                            }
                                        />
                                    </TouchableOpacity>
                                    <Text
                                        fontFamily={InterFontFamily.ff600}
                                        fontSize={FontSize.fz16}
                                        lineHeight={LineHeight.lh20}
                                        color={Colors[theme].mainPage.primary}
                                        style={{
                                            paddingVertical: 12,
                                            textAlign: 'center',
                                        }}
                                    >
                                        AI PSY HELP
                                    </Text>
                                </View>

                                <MessageList
                                    messages={messages}
                                    isWritingChat={isWritingChat}
                                    ref={messageListRef}
                                    addNewMessage={addNewMessage}
                                    disableNewMessage={() =>
                                        setIsNewMessage(false)
                                    }
                                    isNewMessage={isNewMessage}
                                    scrollToEnd={scrollToEnd}
                                />
                                <KeyboardAvoidingView
                                    behavior={
                                        Platform.OS === 'ios'
                                            ? 'padding'
                                            : 'height'
                                    }
                                    keyboardVerticalOffset={
                                        insets.bottom + 34 + 15
                                    }
                                >
                                    <MessageInput
                                        onMessageSend={handleMessageSend}
                                    />
                                </KeyboardAvoidingView>
                            </View>
                        </BottomSheetModal>
                    </BottomSheetModalProvider>
                </View>
            </GestureHandlerRootView>
        );
    },
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    sheetView: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
    },
});
