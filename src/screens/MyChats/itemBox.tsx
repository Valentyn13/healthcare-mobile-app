import { FC, useState } from 'react';
import {
    Animated,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {
    ChatType,
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
} from 'src/shared';
import { Text } from 'src/shared';
import useTheme from 'src/shared/lib/useTheme';

import Logo from '../../../assets/svg-icons/action/trash-bin.svg';
interface ItemBoxProps {
    data: ChatType;
    onClick: () => void;
}

const ItemBox: FC<ItemBoxProps> = ({ data, onClick }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [translateX] = useState(new Animated.Value(85));
    const [opacity] = useState(new Animated.Value(0));
    const [isLeftSwiped, setIsLeftSwiped] = useState(false);

    const onSwipeLeft = () => {
        setIsLeftSwiped(true);
        Animated.timing(translateX, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();

        Animated.timing(opacity, {
            toValue: 1,
            duration: 220,
            useNativeDriver: true,
        }).start();
    };

    const resetSwipe = () => {
        setIsLeftSwiped(false);
        Animated.timing(translateX, {
            toValue: 85,
            duration: 200,
            useNativeDriver: true,
        }).start();

        Animated.timing(opacity, {
            toValue: 0,
            duration: 130,
            useNativeDriver: true,
        }).start();
    };

    const handleChatClick = () => {
        if (isLeftSwiped) {
            resetSwipe();
            return;
        }
        onClick();
    };

    return (
        <GestureRecognizer onSwipeLeft={onSwipeLeft} onSwipeRight={resetSwipe}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={handleChatClick}>
                    <View
                        style={[
                            styles.item,
                            {
                                backgroundColor: isDark ? 'black' : 'white',
                                borderColor: isDark ? '#373737' : '#e0dddd',
                            },
                        ]}
                    >
                        <View
                            style={[
                                styles.itemIcon,
                                {
                                    borderColor: isDark ? '#373737' : '#e0dddd',
                                    backgroundColor: isDark ? 'black' : 'white',
                                },
                            ]}
                        >
                            <data.LogoBlue />
                        </View>
                        <View>
                            <Text
                                color={
                                    isDark ? FontColors.WHITE : FontColors.BLACK
                                }
                                fontFamily={InterFontFamily.ff400}
                                fontSize={FontSize.fz16}
                                lineHeight={LineHeight.lh24}
                            >
                                {data.name}
                            </Text>
                            <Text
                                color={
                                    isDark
                                        ? FontColors.GRAY_LIGHT
                                        : FontColors.BLACK
                                }
                                fontFamily={InterFontFamily.ff400}
                                fontSize={FontSize.fz12}
                                lineHeight={LineHeight.lh20}
                            >
                                Status:{data.status}
                            </Text>
                            <Text
                                color={
                                    isDark
                                        ? FontColors.GRAY_LIGHT
                                        : FontColors.BLACK
                                }
                                fontFamily={InterFontFamily.ff400}
                                fontSize={FontSize.fz12}
                                lineHeight={LineHeight.lh20}
                            >
                                {data.again}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={[
                        styles.trashBox,
                        {
                            backgroundColor: isDark ? 'black' : 'white',
                            transform: [{ translateX }],
                            opacity,
                            borderColor: isDark ? '#373737' : '#e0dddd',
                        },
                    ]}
                >
                    <Logo />
                </Animated.View>
            </View>
        </GestureRecognizer>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 82,
        flex: 1,
        marginBottom: 15,
    },
    item: {
        width: '100%',
        height: 82,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 16,
        borderWidth: 0.5,
    },
    itemIcon: {
        borderRadius: 16,
        borderWidth: 0.5,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trashBox: {
        borderWidth: 0.5,
        position: 'absolute',
        top: 0,
        right: 0,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        width: 82,
        marginRight: 0,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
    },
});

export default ItemBox;
