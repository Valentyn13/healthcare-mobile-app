import { StyleSheet } from 'react-native';
import { FontSize, InterFontFamily, LineHeight } from 'src/shared';

export const style = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        flex: 1,
        paddingBottom: 24,
    },
    main: {
        paddingRight: 24,
        paddingLeft: 24,
        paddingBottom: 24,
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    contentButton: {
        fontSize: FontSize.fz16,
        fontFamily: InterFontFamily.ff600,
        lineHeight: LineHeight.lh22,
    },
    buttonChangeNumber: {
        fontSize: FontSize.fz12,
        textDecorationLine: 'underline',
    },
    arrowBack: {
        width: 48,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
    },
    changePhoneNumberWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    changePhoneNumber: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    contentButtonNext: {
        fontFamily: InterFontFamily.ff600,
        fontSize: FontSize.fz16,
        lineHeight: LineHeight.lh22,
    },
    wrapperButtons: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
});
