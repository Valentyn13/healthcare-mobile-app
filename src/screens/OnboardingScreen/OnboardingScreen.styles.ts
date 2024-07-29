import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    safeArea: { flex: 1 },
    wrapper: {
        padding: 24,
        flex: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
});
