import { StyleSheet } from 'react-native';
import { FontColors } from 'src/shared/constants/enums/colors.enum';
import { FontSize } from 'src/shared/constants/enums/font-size.enum';
import { InterFontFamily } from 'src/shared/constants/enums/fontFamilies';
import { LineHeight } from 'src/shared/constants/enums/line-height.enum';

const focusStyles = {
    focusStyle: {
        elevation: 0,
    },
    focusDarkStyle: {
        borderColor: FontColors.WHITE,
        borderWidth: 1,
        elevation: 0,
    },
};

export const stylesInput = StyleSheet.create({
    input: {
        borderRadius: 12,
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: FontSize.fz16,
        color: FontColors.GRAY,
        letterSpacing: 0.5,
        justifyContent: 'center',
        lineHeight: LineHeight.lh20,
        fontFamily: InterFontFamily.ff400,
    },
    border: {
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#F1F1F1',
    },
    shadowProps: {
        shadowColor: '#00000080',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 1.3,
    },
    darkThemeStyle: {
        backgroundColor: '#151515',
        color: FontColors.WHITE,
        elevation: 0,
    },
    ...focusStyles,
});

export const dropDownStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    ...stylesInput,
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: FontColors.BLACK,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    darkThemeStyle: {
        backgroundColor: '#151515',
        color: FontColors.WHITE,
        elevation: 0,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
