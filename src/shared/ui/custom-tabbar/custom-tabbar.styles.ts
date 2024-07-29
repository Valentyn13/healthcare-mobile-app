import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    myTabBarContainer: {
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: width,
    },
    plusBUtton: {
        width: 72,
        height: 72,
        borderRadius: 72 / 2,
        position: 'absolute',
        top: -27,
        left: width / 2 - 28,
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 26,
    },
    buttonsLayout: {
        flexDirection: 'row',
        height: 80,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    bluePlusButton: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'lightblue',
        opacity: 0.8,
        top: '50%',
        left: '50%',

        transform: [{ translateX: -44 }, { translateY: -44 }],
        borderRadius: 72 / 2,
    },
    icon: {
        width: 56,
        height: 56,
        borderRadius: 56 / 2,
        backgroundColor: '#249CF3',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
    },
    buttonDark: {
        backgroundColor: 'white',
        opacity: 0.2,
    },
    iconDark: {
        backgroundColor: '#FCFCFC',
    },
});
