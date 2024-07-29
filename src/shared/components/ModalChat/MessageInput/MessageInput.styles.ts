import { StyleSheet } from 'react-native';
import { FontSize, InterFontFamily, LineHeight } from 'src/shared';

export const style = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 25,
    },
    input: {
        flex: 1,
        borderWidth: 0.5,
        borderRadius: 120,
        paddingHorizontal: 20,
        fontSize: FontSize.fz14,
        lineHeight: LineHeight.lh18,
        fontFamily: InterFontFamily.ff400,
    },
    wrapperSend: {
        borderColor: '#DCDCDC',
        borderWidth: 0.5,
        borderRadius: 50,
        width: 33,
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
