import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: { flexDirection: 'column', gap: 50 },
    header: {
        flexDirection: 'column',
        gap: 50,
        alignItems: 'center',
    },
    content: { flexDirection: 'column', gap: 8 },
    mainText: { width: '60%', textAlign: 'center' },
    subText: {
        textAlign: 'center',
        paddingHorizontal: 12,
    },
});
