import { StyleSheet } from 'react-native';
import { FontColors, FontSize, FontWeight, LineHeight } from 'src/shared';

export const styles = StyleSheet.create({
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,
    },
    nextButton: {
        backgroundColor: '#249CF3',
        width: 41,
        height: 41,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkSkip: {
        color: FontColors.BLUE,
        fontSize: FontSize.fz14,
        fontWeight: FontWeight.fw400,
        lineHeight: LineHeight.lh15,
    },
});
