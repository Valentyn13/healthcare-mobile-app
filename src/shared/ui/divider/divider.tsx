import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Text } from '../text/text';
type DividerProps = {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
};

const Divider = ({ children, style }: DividerProps) => {
    return (
        <View style={[styles.divider, style]}>
            <View style={styles.line} />
            {children && (
                <View>
                    <Text style={styles.text}>{children}</Text>
                </View>
            )}
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#EFF1F5',
    },
    text: {
        width: 'auto',
        paddingHorizontal: 8,
        textAlign: 'center',
    },
});

export { Divider };
