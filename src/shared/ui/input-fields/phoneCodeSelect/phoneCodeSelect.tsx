import { useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontColors } from 'src/shared/constants/enums/colors.enum';
import { Country } from 'src/shared/constants/types/country.type';
import { getFlagEmoji } from 'src/shared/lib/getEmoji';

import Countries from '../../../constants/countries/countries.json';
import { Text } from '../../text/text';
import { dropDownStyles, stylesInput } from '../input-filed-styles';

import FlagIcon from '../../../../../assets/svg-icons/other/flag.svg';
import PhoneDownIcon from '../../../../../assets/svg-icons/other/number-dropdown-icon.svg';
const RenderListElement = (item: Country, isDark: boolean) => {
    return (
        <View
            style={[
                styles.listElement,
                isDark && {
                    backgroundColor: FontColors.DARK_2,
                },
            ]}
        >
            <Text>{getFlagEmoji(item.iso)}</Text>
            <Text>+{item.code}</Text>
        </View>
    );
};

const RenderLeftIcon = (value: Country, isDark: boolean) => {
    return (
        <View style={styles.iconContainer}>
            <Text>{value.iso ? getFlagEmoji(value.iso) : <FlagIcon />}</Text>
            <Text>
                {value.iso && (
                    <Text color={isDark ? FontColors.WHITE : FontColors.BLACK}>
                        +
                    </Text>
                )}
            </Text>
        </View>
    );
};

type PhoneCodeSelectProps = {
    style?: StyleProp<ViewStyle>;
    isDark?: boolean;
    onSelect: (code: string) => void;
};

const PhoneCodeSelect = ({
    style,
    isDark = false,
    onSelect,
}: PhoneCodeSelectProps) => {
    const [value, setValue] = useState<Country>({} as Country);
    const [isFocused, setIsFocused] = useState(false);
    return (
        <Dropdown
            style={[
                dropDownStyles.input,
                dropDownStyles.shadowProps,
                isDark ? dropDownStyles.darkThemeStyle : dropDownStyles.border,
                isFocused &&
                    (isDark
                        ? stylesInput.focusDarkStyle
                        : stylesInput.focusStyle),
                style,
            ]}
            placeholderStyle={{
                ...dropDownStyles.placeholderStyle,
                color: isDark ? FontColors.WHITE : undefined,
            }}
            selectedTextStyle={{
                ...dropDownStyles.selectedTextStyle,
                color: isDark ? FontColors.WHITE : undefined,
            }}
            containerStyle={{
                borderWidth: 0,
                borderRadius: 10,
            }}
            inputSearchStyle={dropDownStyles.inputSearchStyle}
            iconStyle={dropDownStyles.iconStyle}
            data={Countries}
            maxHeight={230}
            labelField="code"
            valueField="code"
            placeholder={'+ 000'}
            value={value}
            onChange={(item) => {
                setValue(item);
                onSelect(item.code);
            }}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            renderItem={(item: Country) => RenderListElement(item, isDark)}
            renderLeftIcon={() => RenderLeftIcon(value, isDark)}
            renderRightIcon={() => <PhoneDownIcon />}
        />
    );
};

const styles = StyleSheet.create({
    listElement: {
        flexDirection: 'row',
        padding: 4,
        gap: 8,
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 6,
    },
});

export { PhoneCodeSelect };
