import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
    },
    passive: {
        opacity: 0.22,
        height: 6,
        width: 6,
        borderRadius: 50,
    },
    active: {
        height: 6,
        width: 24,
        borderRadius: 50,
    },
});
