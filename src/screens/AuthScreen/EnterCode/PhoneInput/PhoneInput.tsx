import { forwardRef, useState } from 'react';
import { TextInput } from 'react-native-paper';
import parsePhoneNumber from 'libphonenumber-js';
import { FontColors, FontSize, InterFontFamily } from 'src/shared';

import { getParsePhoneNumber } from './helpers/getParsedPhoneNumber';

interface PhoneInputProps {
    isEditable: boolean;
    value: string;
}

export const PhoneInput = forwardRef<any, PhoneInputProps>(
    ({ isEditable, value }, ref) => {
        const [phone, setPhone] = useState(value);

        const handlePhoneNumber = (value: string) => {
            value = !value.startsWith('+') ? `+${value}` : value;
            const clearValue = value.replace(/ /g, '');
            const prevValue = phone.replace(/ /g, '');
            const regex = /^\+(\d*)$/;
            const isValid = regex.test(clearValue);

            if (clearValue === '+') {
                return setPhone('+');
            }

            if (isValid) {
                const compriseValue =
                    clearValue.length > prevValue.length
                        ? prevValue
                        : clearValue;

                const isMaxLength =
                    parsePhoneNumber(compriseValue)?.isPossible() || false;

                if (!isMaxLength) {
                    setPhone(clearValue);
                }
            }
        };

        return (
            <TextInput
                ref={ref}
                editable={isEditable}
                value={getParsePhoneNumber(phone)}
                onChangeText={handlePhoneNumber}
                mode="outlined"
                selectionColor={FontColors.GRAY}
                keyboardType="number-pad"
                contentStyle={{
                    color: FontColors.GRAY,
                    fontFamily: InterFontFamily.ff400,
                    fontSize: FontSize.fz12,
                }}
                outlineStyle={{
                    borderWidth: 1,
                    borderColor: FontColors.GRAY,
                    borderRadius: 30,
                    backgroundColor: 'transparent',
                }}
                style={{
                    height: 26,
                    width: 145,
                }}
            />
        );
    },
);
