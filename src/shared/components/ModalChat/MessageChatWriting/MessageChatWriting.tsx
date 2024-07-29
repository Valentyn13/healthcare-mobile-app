import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontColors } from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';

import LogoIconWhite from 'assets/svg-icons/other/brain.svg';
import LogoIconDark from 'assets/svg-icons/other/brain-white.svg';

export const MessageChatWriting = () => {
    const { theme } = useTheme();

    return (
        <View
            style={{
                marginLeft: 15,
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
                    backgroundColor: theme === 'dark' ? '#151515' : '#FBFBFB',
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
            <View>
                <LottieView
                    style={{
                        flex: 1,
                        width: 40,
                        height: 27,
                    }}
                    source={require('assets/lottie/chat-writing.json')}
                    autoPlay
                    loop
                />
            </View>
        </View>
    );
};
