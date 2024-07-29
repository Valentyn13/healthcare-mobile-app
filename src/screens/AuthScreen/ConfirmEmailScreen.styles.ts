import { StyleSheet } from 'react-native';

export const styles = (isDark: boolean) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: 24,
        },
        backBtn: {
            marginBottom: 10,
            justifyContent: 'center',
            width: 58,
            height: 48,
        },
        emailBox: {
            borderRadius: 15,
            borderWidth: 1,
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderColor: isDark ? '#151515' : '#EFF1F5',
        },
    });
