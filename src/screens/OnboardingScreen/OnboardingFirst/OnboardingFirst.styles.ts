import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        gap: 145,
    },
    headerWrapper: {
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    logo: { alignSelf: 'center' },
    mainText: { width: '60%', textAlign: 'center' },
    subText: {
        textAlign: 'center',
        paddingHorizontal: 12,
    },
});
