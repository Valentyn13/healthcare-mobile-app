import { useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontColors } from 'src/shared';
import { Country } from 'src/shared/constants/types/country.type';
import { getFlagEmoji } from 'src/shared/lib/getEmoji';

import Countries from '../../../constants/countries/countries.json';
import { Text } from '../../text/text';
import { dropDownStyles, stylesInput } from '../input-filed-styles';

import CountryIcon from '../../../../../assets/svg-icons/other/country-dropdown-icon.svg';
import FlagIcon from '../../../../../assets/svg-icons/other/flag.svg';

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
            <Text
                style={{ color: isDark ? FontColors.WHITE : FontColors.GRAY }}
            >
                {item.country}
            </Text>
        </View>
    );
};

const RenderLeftIcon = (value: Country) => {
    return (
        <Text style={styles.iconContainer}>
            {value.iso ? getFlagEmoji(value.iso) : <FlagIcon />}
        </Text>
    );
};

type CountryDropdownProps = {
    isDark?: boolean;
    onSelect: (country: string) => void;
    style?: StyleProp<ViewStyle>;
};

const CountryDropdown = ({
    isDark = false,
    style,
    onSelect,
}: CountryDropdownProps) => {
    const [value, setValue] = useState<Country>({} as Country);
    const [isFocused, setIsFocused] = useState(false);
    return (
        <Dropdown
            style={[
                stylesInput.input,
                stylesInput.shadowProps,
                isFocused &&
                    (isDark
                        ? stylesInput.focusDarkStyle
                        : stylesInput.focusStyle),
                style,
                isDark && stylesInput.darkThemeStyle,
            ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderStyle={{
                ...dropDownStyles.placeholderStyle,
                color: isDark ? FontColors.WHITE : undefined,
            }}
            containerStyle={{
                borderWidth: 0,
                borderRadius: 10,
            }}
            selectedTextStyle={{
                ...dropDownStyles.selectedTextStyle,
                color: isDark ? FontColors.WHITE : undefined,
            }}
            inputSearchStyle={dropDownStyles.inputSearchStyle}
            iconStyle={dropDownStyles.iconStyle}
            data={Countries}
            search={false}
            maxHeight={200}
            labelField="country"
            valueField="country"
            placeholder={'Country'}
            searchPlaceholder="Search..."
            value={value}
            onChange={(item) => {
                setValue(item);
                onSelect(item.country);
            }}
            renderItem={(item: Country) => RenderListElement(item, isDark)}
            renderLeftIcon={() => RenderLeftIcon(value)}
            renderRightIcon={() => <CountryIcon />}
        />
    );
};

const styles = StyleSheet.create({
    listElement: {
        flexDirection: 'row',
        padding: 6,
        gap: 15,
    },
    iconContainer: {
        marginRight: 8,
    },
});

export { CountryDropdown };
