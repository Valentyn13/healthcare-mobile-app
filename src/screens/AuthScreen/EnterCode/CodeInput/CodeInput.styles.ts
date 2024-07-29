import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: { display: 'flex', flexDirection: 'column', gap: 8 },
    optInputWrapper: {
        paddingVertical: 6,
    },
    errorWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
});
