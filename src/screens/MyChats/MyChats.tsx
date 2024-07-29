import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    BackHandler,
    SectionList,
    StyleSheet,
    View,
} from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { tabBarActions } from 'src/model/store/slices/tabBar/slice.ts';
import { ModalChat } from 'src/shared/components/ModalChat/ModalChat.tsx';
import { Colors } from 'src/shared/constants/Colors.ts';
import {
    ChatListDto,
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    Text,
} from 'src/shared/index.ts';
import { useAppDispatch } from 'src/shared/lib/hooks/use-app-dispatch.hook.ts';
import useTheme from 'src/shared/lib/useTheme';

import ItemBox from './itemBox.tsx';

import LogoRed from '../../../assets/svg-icons/other/abstract-shape_6009714.svg';
import LogoBlue from '../../../assets/svg-icons/other/abstract-shape_6009875.svg';

const data: ChatListDto = [
    {
        title: '',
        data: [
            {
                id: 1,
                name: 'How to start earning money',
                LogoBlue: LogoRed,
                status: 'Not booked',
                again: '22 minutes ago',
            },
            {
                id: 2,
                name: 'How to start earning money',
                LogoBlue: LogoBlue,
                status: 'Completed',
                again: '5 days ago',
            },
            {
                id: 3,
                name: 'How to start earning money',
                LogoBlue: LogoBlue,
                status: 'Uncompleted',
                again: '3 weeks ago',
            },
        ],
    },
    {
        title: 'Last week',
        data: [
            {
                id: 1,
                name: 'How to start earning money',
                LogoBlue: LogoRed,
                status: 'Not booked',
                again: '22 minutes ago',
            },
            {
                id: 2,
                name: 'How to start earning money',
                LogoBlue: LogoBlue,
                status: 'Completed',
                again: '5 days ago',
            },
            {
                id: 3,
                name: 'How to start earning money',
                LogoBlue: LogoBlue,
                status: 'Uncompleted',
                again: '3 weeks ago',
            },
        ],
    },
];
const renderHeader = (theme: 'light' | 'dark') => (
    <Text
        color={theme === 'dark' ? FontColors.WHITE : FontColors.BLUE_LIGHT}
        fontSize={FontSize.fz32}
        fontFamily={InterFontFamily.ff600}
        lineHeight={LineHeight.lh40}
    >
        My chats
    </Text>
);
const Mychats = () => {
    const dispatch = useAppDispatch();
    const { theme } = useTheme();
    const modalChatRef = useRef<BottomSheetModal>(null);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const { toggleTabBar, visibleTabBar } = tabBarActions;

    const [list] = useState<ChatListDto>(data);
    const [isVisibleModalChat, setIsVisibleModalChat] = useState(false);

    const handleOpenModalChat = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            dispatch(toggleTabBar());
            setIsVisibleModalChat(true);
            modalChatRef.current?.present();
        });
    };

    const handleCloseModalChat = () => {
        modalChatRef.current?.close();
        setIsVisibleModalChat(false);
        dispatch(visibleTabBar());
    };

    useEffect(() => {
        if (!isVisibleModalChat) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [isVisibleModalChat, fadeAnim]);

    useEffect(() => {
        const backAction = () => {
            if (isVisibleModalChat) {
                handleCloseModalChat();
                dispatch(toggleTabBar());
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisibleModalChat, handleCloseModalChat]);

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: Colors[theme].background,
                    paddingBottom: isVisibleModalChat ? 15 : 120,
                    paddingTop: isVisibleModalChat ? 0 : 24,
                    position: isVisibleModalChat ? 'absolute' : 'static',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
            ]}
        >
            {!isVisibleModalChat && (
                <Animated.View style={{ opacity: fadeAnim }}>
                    <View
                        style={{
                            backgroundColor: Colors[theme].background,
                            height: '100%',
                        }}
                    >
                        <SectionList
                            ListHeaderComponent={renderHeader(theme)}
                            showsVerticalScrollIndicator={false}
                            sections={list}
                            keyExtractor={(item, index) =>
                                item.id + index.toString()
                            }
                            renderItem={({ item }) => (
                                <ItemBox
                                    data={item}
                                    onClick={handleOpenModalChat}
                                />
                            )}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text
                                    color={FontColors.GRAY_LIGHT}
                                    fontSize={FontSize.fz14}
                                    fontFamily={InterFontFamily.ff400}
                                    style={styles.textLast}
                                >
                                    {title}
                                </Text>
                            )}
                        />
                    </View>
                </Animated.View>
            )}
            {isVisibleModalChat && (
                <ModalChat
                    ref={modalChatRef}
                    onModalClose={handleCloseModalChat}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    textLast: {
        marginBottom: 15,
    },
});
export default Mychats;
