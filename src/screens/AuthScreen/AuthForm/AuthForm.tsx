import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from 'src/shared/lib/useTheme.ts';
import { Input } from 'src/shared/ui/input-fields/input/input.tsx';
import { PhoneCodeSelect } from 'src/shared/ui/input-fields/phoneCodeSelect/phoneCodeSelect.tsx';
import { PhoneInput } from 'src/shared/ui/input-fields/phoneInput/phoneInput.tsx';

import {
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    Text,
} from '../../../shared';
import { FormToggleType } from '../types.ts';

interface Props {
    currentForm: FormToggleType;
    onCodeSelect: (code: string) => void;
    onEmailChange: (email: string) => void;
    onPhoneChange: (phone: string) => void;
    phone: string;
}

const AuthForm: FC<Props> = ({
    currentForm,
    phone,
    onCodeSelect,
    onPhoneChange,
    onEmailChange,
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <View>
            <View style={{ marginTop: 16, marginBottom: 32 }}>
                {currentForm === 'email' ? (
                    <Input
                        font={InterFontFamily.ff400}
                        isDark={isDark}
                        onChangeText={onEmailChange}
                        placeholder="Email"
                    />
                ) : (
                    <View style={styles.numberContainer}>
                        <PhoneCodeSelect
                            isDark={isDark}
                            onSelect={onCodeSelect}
                            style={{ flex: 2 }}
                        />
                        <PhoneInput
                            value={phone}
                            isDark={isDark}
                            onPhoneCange={onPhoneChange}
                            maskAutoComplete
                            placeholderFillCharacter=" _ "
                            style={{ flex: 3 }}
                        />
                    </View>
                )}
            </View>
            <Text
                color={FontColors.GRAY_LIGHT}
                fontSize={FontSize.fz12}
                lineHeight={LineHeight.lh24}
                fontFamily={InterFontFamily.ff400}
            >
                {currentForm === 'email'
                    ? 'You will receive an instant email for confirmation.'
                    : 'You will receive instant sms with code.'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    numberContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
});

export default AuthForm;
