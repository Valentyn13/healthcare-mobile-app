/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

interface ColorType {
    text: string;
    background: string;
    tint: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
    logo: string;
    mainPage: { primary: string };
    chat: {
        text: string;
        border: string;
        input: string;
        sendIcon: string;
        sendIconActive: string;
        bgHumanMessage: string;
        textHumanMessage: string;
        textHintMessage: string;
    };
}

type ColorsType = {
    [key in 'light' | 'dark']: ColorType;
};

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors: ColorsType = {
    light: {
        text: '#11181C',
        background: '#fff',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
        logo: '#249CF3',
        mainPage: { primary: '#222222' },
        chat: {
            text: '#222222',
            border: '#DCDCDC',
            input: '#FFFFFF',
            sendIcon: '#DCDCDC',
            sendIconActive: '#249CF3',
            bgHumanMessage: '#F2F2F2',
            textHumanMessage: '#222222',
            textHintMessage: '#DCDCDC',
        },
    },
    dark: {
        text: '#ECEDEE',
        background: '#000',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
        logo: '#FFFFFF',
        mainPage: {
            primary: '#FFFFFF',
        },
        chat: {
            text: '#FFFFFF',
            border: '#373737',
            input: '#000000',
            sendIcon: '#717171',
            sendIconActive: '#FFFFFF',
            bgHumanMessage: '#151515',
            textHumanMessage: '#FFFFFF',
            textHintMessage: '#8D8D8D',
        },
    },
};
