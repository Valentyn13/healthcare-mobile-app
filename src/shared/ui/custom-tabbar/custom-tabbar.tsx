import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    BackHandler,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { selectIsVisibleTabBar } from 'src/model/store/slices/tabBar/selectors.ts';
import { ButtonTypes } from 'src/shared/constants/enums/button-types.enum.ts';
import { FontColors } from 'src/shared/constants/enums/colors.enum.ts';
import { useAppSelector } from 'src/shared/lib/hooks/use-app-selector.hook.ts';
import useTheme from 'src/shared/lib/useTheme';
import TabsShape from 'src/shared/ui/svg-tabbar/svg-tabbar';

import { tabBarActions } from '../../../model/store/slices/tabBar/slice.ts';
import { ModalChat } from '../../components/ModalChat/ModalChat.tsx';
import { useAppDispatch } from '../../lib/hooks/use-app-dispatch.hook.ts';
import { Button } from '../button/button.tsx';

import { styles } from './custom-tabbar.styles.ts';

import NavbarChats from '../../../../assets/svg-icons/controll/navbar-chats-icon.svg';
import NavbarList from '../../../../assets/svg-icons/controll/navbar-document-list.svg';
import PlusIcon from '../../../../assets/svg-icons/controll/navbar-plus-icon.svg';
import NavbarProfile from '../../../../assets/svg-icons/controll/navbar-profile-icon.svg';
import NavbarSettings from '../../../../assets/svg-icons/controll/navbar-settings-icon.svg';

const IconLIst = [NavbarList, NavbarChats, NavbarSettings, NavbarProfile];

const CustomTabbar = ({ state, navigation }: BottomTabBarProps) => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const isDark = theme === 'dark';
    const isVivibleTabBar = useAppSelector(selectIsVisibleTabBar);
    const modalChatRef = useRef<BottomSheetModal>(null);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const [isVisibleModalChat, setIsVisibleModalChat] = useState(false);

    const { toggleTabBar, visibleTabBar } = tabBarActions;

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
            style={{
                position: isVisibleModalChat ? 'absolute' : 'static',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
        >
            {isVivibleTabBar && !isVisibleModalChat ? (
                <Animated.View style={{ opacity: fadeAnim }}>
                    <View style={styles.myTabBarContainer}>
                        <TabsShape />
                        <View style={StyleSheet.absoluteFill}>
                            <View style={styles.buttonsLayout}>
                                <View style={styles.plusBUtton}>
                                    <View
                                        style={[
                                            styles.bluePlusButton,
                                            isDark && styles.buttonDark,
                                        ]}
                                    ></View>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={handleOpenModalChat}
                                    >
                                        <View
                                            style={[
                                                styles.icon,
                                                isDark && styles.iconDark,
                                            ]}
                                        >
                                            <PlusIcon
                                                onPress={handleOpenModalChat}
                                                color={
                                                    isDark
                                                        ? FontColors.BLACK
                                                        : FontColors.WHITE
                                                }
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {state.routes.map((route, index) => {
                                    const isFocused = state.index === index;

                                    const onPress = () => {
                                        const event = navigation.emit({
                                            type: 'tabPress',
                                            target: route.key,
                                            canPreventDefault: true,
                                        });

                                        if (
                                            !isFocused &&
                                            !event.defaultPrevented
                                        ) {
                                            navigation.navigate(route.name);
                                        }
                                    };
                                    const onLongPress = () => {
                                        navigation.emit({
                                            type: 'tabLongPress',
                                            target: route.key,
                                        });
                                    };
                                    const Icon = IconLIst[index];

                                    const iconColor = isDark
                                        ? isFocused
                                            ? '#484848'
                                            : FontColors.WHITE
                                        : isFocused
                                          ? FontColors.BLUE_LIGHT
                                          : FontColors.GRAY_LIGHT;
                                    return (
                                        <Button
                                            type={ButtonTypes.EMPTY}
                                            key={index}
                                            style={[
                                                {
                                                    width: 48,
                                                    height: 55,
                                                },
                                                index === 1 && {
                                                    marginLeft: -65,
                                                },
                                                index === 2 && {
                                                    marginRight: -65,
                                                },
                                            ]}
                                            onPress={onPress}
                                            onLongPress={onLongPress}
                                        >
                                            <Icon color={iconColor} />
                                        </Button>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                </Animated.View>
            ) : null}

            {isVisibleModalChat && (
                <ModalChat
                    ref={modalChatRef}
                    openFromTabbar={true}
                    onModalClose={handleCloseModalChat}
                />
            )}
        </View>
    );
};

export default CustomTabbar;
