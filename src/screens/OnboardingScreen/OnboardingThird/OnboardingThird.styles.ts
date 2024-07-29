import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: { flexDirection: 'column', gap: 90 },
    top: {
        flexDirection: 'column',
        gap: 50,
        alignItems: 'center',
    },
    content: { flexDirection: 'column', gap: 8 },
    wrapperMainText: { alignItems: 'center' },
    mainText: { width: '60%', textAlign: 'center' },
    subText: {
        textAlign: 'center',
        paddingHorizontal: 16,
    },
});
