import { useState } from 'react';
import {
    Keyboard,
    NativeSyntheticEvent,
    StyleSheet,
    TextInputChangeEventData,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import useTheme from 'src/shared/lib/useTheme';
import { CountryDropdown } from 'src/shared/ui/input-fields/countryDropdown/countryDropdown';
import { Input } from 'src/shared/ui/input-fields/input/input';
import { PhoneCodeSelect } from 'src/shared/ui/input-fields/phoneCodeSelect/phoneCodeSelect';
import { PhoneInput } from 'src/shared/ui/input-fields/phoneInput/phoneInput';

import {
    Button,
    FontColors,
    FontSize,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    RobotoFontFamily,
    Text,
} from '../../shared';
import { Divider } from '../../shared/ui/divider/divider';

const AllmostDoneScreen = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [country, setCountry] = useState('');
    const [phoneCode, setPhoneCode] = useState('');

    const handlePhoneChange = (phone: string) => {
        setPhone(phone);
    };

    const handleCountrySelect = (country: string) => {
        setCountry(country);
    };

    const handleCodeSelect = (code: string) => {
        setPhoneCode(code);
    };

    const handleFirstNameChange = (
        e: NativeSyntheticEvent<TextInputChangeEventData>,
    ) => {
        setFirstName(e.nativeEvent.text);
    };
    const handleEmailChange = (
        e: NativeSyntheticEvent<TextInputChangeEventData>,
    ) => {
        setEmail(e.nativeEvent.text);
    };

    const handleCreateAccount = () => {
        // LOGIC HERE
        console.log(country, phoneCode, phone, email, firstName);
    };
    return (
        <TouchableWithoutFeedback
            style={{ height: '100%' }}
            onPress={Keyboard.dismiss}
            accessible={false}
        >
            <View
                style={[
                    styles.container,
                    { backgroundColor: isDark ? '#000' : '#fff' },
                ]}
            >
                <Text
                    color={isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT}
                    fontSize={FontSize.fz32}
                    fontFamily={InterFontFamily.ff600}
                    lineHeight={LineHeight.lh40}
                    style={styles.header}
                >
                    Almost done!
                </Text>
                <Text
                    fontSize={FontSize.fz12}
                    lineHeight={LineHeight.lh16}
                    fontFamily={InterFontFamily.ff400}
                    color={isDark ? FontColors.WHITE : FontColors.GRAY}
                    style={styles.info}
                >
                    We need some additional information to finish account
                    creation process
                </Text>
                <Divider style={styles.divider} />
                <View style={styles.inputLayout}>
                    <Input
                        font={InterFontFamily.ff400}
                        placeholderTextColor={
                            isDark ? FontColors.WHITE : FontColors.GRAY
                        }
                        cursorColor={
                            isDark ? FontColors.WHITE : FontColors.GRAY
                        }
                        isDark={isDark}
                        onChange={handleFirstNameChange}
                        value={firstName}
                        placeholder="First name"
                    />
                    <Input
                        font={InterFontFamily.ff400}
                        placeholderTextColor={
                            isDark ? FontColors.WHITE : FontColors.GRAY
                        }
                        cursorColor={
                            isDark ? FontColors.WHITE : FontColors.GRAY
                        }
                        isDark={isDark}
                        onChange={handleEmailChange}
                        value={email}
                        placeholder="example@email.com"
                    />
                    <View>
                        <View style={styles.numberContainer}>
                            <PhoneCodeSelect
                                isDark={isDark}
                                onSelect={handleCodeSelect}
                                style={{ flex: 2 }}
                            />
                            <PhoneInput
                                isDark={isDark}
                                value={phone}
                                onPhoneCange={handlePhoneChange}
                                maskAutoComplete
                                placeholderFillCharacter=" _ "
                                style={{ flex: 3 }}
                            />
                        </View>
                        <Text
                            fontSize={FontSize.fz12}
                            color={isDark ? FontColors.WHITE : FontColors.GRAY}
                            lineHeight={LineHeight.lh20}
                            fontFamily={InterFontFamily.ff400}
                        >
                            *optional
                        </Text>
                    </View>
                    <View>
                        <CountryDropdown
                            isDark={isDark}
                            onSelect={handleCountrySelect}
                        />
                        <Text
                            fontSize={FontSize.fz12}
                            color={isDark ? FontColors.WHITE : FontColors.GRAY}
                            lineHeight={LineHeight.lh20}
                            fontFamily={InterFontFamily.ff400}
                        >
                            *optional
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 32 }}>
                    <Text
                        color={FontColors.GRAY}
                        fontSize={FontSize.fz12}
                        fontFamily={RobotoFontFamily.ff400}
                    >
                        When you click ‘Create Account’, you agree to our
                    </Text>
                    <Text
                        style={{
                            textDecorationLine: 'underline',
                            paddingBottom: 10,
                        }}
                        color={isDark ? FontColors.WHITE : FontColors.DARK}
                        fontSize={FontSize.fz12}
                    >
                        Privacy Policy
                    </Text>
                    <Button
                        style={{
                            backgroundColor: isDark
                                ? FontColors.DARK_2
                                : FontColors.BLUE_LIGHT,
                        }}
                        onPress={handleCreateAccount}
                    >
                        <Text
                            color={FontColors.WHITE}
                            fontSize={FontSize.fz16}
                            fontFamily={InterFontFamily.ff600}
                            lineHeight={LineHeight.lh22}
                            letterSpacing={LetterSpacing.ls02}
                        >
                            Create Account
                        </Text>
                    </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 34,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    header: {
        marginBottom: 8,
    },
    info: {
        width: 230,
    },
    divider: {
        marginVertical: 32,
    },
    inputLayout: {
        display: 'flex',
        flexDirection: 'column',
        gap: 13,
    },
    numberContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
});

export { AllmostDoneScreen };
