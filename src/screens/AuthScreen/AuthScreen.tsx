import React, { FC, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import useTheme from 'src/shared/lib/useTheme.ts';

import { userActions } from '../../model/store/slices/user/slice.ts';
import { User } from '../../model/store/slices/user/types.ts';
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
import { useAppDispatch } from '../../shared/lib/hooks/use-app-dispatch.hook.ts';

import AuthForm from './AuthForm/AuthForm.tsx';
import AuthHeader from './AuthHeader/AuthHeader.tsx';
import AuthSocial from './AuthSocials/AuthSocials.tsx';
import AuthToggle from './AuthToggle/AuthToggle.tsx';
import { styles } from './AuthScreen.styles.ts';
import { FormToggleType } from './types.ts';

const userInit: User = {
    id: '1',
    firstName: 'Oliver',
    surname: ' Skiter',
    plan: 'Free plan',
    avatar: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
};

const AuthScreen: FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [isChecked, setChecked] = useState(false);
    //const router = useRouter();
    const [currentForm, setCurrentForm] = useState<FormToggleType>('email');
    const [email, setEmail] = useState('user@example.com');
    const [phone, setPhone] = useState('');
    const [phoneCode, setPhoneCode] = useState('');

    const dispatch = useAppDispatch();

    const handlePhoneChange = (phone: string) => {
        setPhone(phone);
    };

    const handleCodeSelect = (code: string) => {
        setPhoneCode(code);
    };

    const handleEmailChange = (email: string) => {
        setEmail(email);
    };

    const handleClickNext = () => {
        // OTHER LOGIC HERE
        console.log(email, phone, phoneCode);
        // switch (currentForm) {
        //     case 'email':
        //         return router.push({
        //             pathname: '/confirmEmail',
        //             params: { email },
        //         });
        //     case 'phone':
        //         return router.push({
        //             pathname: '/enterCode',
        //             params: { phone: `+${phoneCode}${phone}` },
        //         });
        // }

        dispatch(userActions.setAuthData(userInit));
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
                style={[
                    styles.container,
                    { backgroundColor: isDark ? '#000' : '#fff' },
                ]}
            >
                <View>
                    <AuthHeader />
                    <View style={{ marginTop: 44 }}>
                        <AuthToggle
                            currentForm={currentForm}
                            setCurrentForm={setCurrentForm}
                        />

                        <AuthForm
                            phone={phone}
                            onPhoneChange={handlePhoneChange}
                            onCodeSelect={handleCodeSelect}
                            onEmailChange={handleEmailChange}
                            currentForm={currentForm}
                        />

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 8,
                                marginVertical: 8,
                            }}
                        >
                            <Checkbox
                                value={isChecked}
                                onValueChange={setChecked}
                                color={
                                    isChecked
                                        ? isDark
                                            ? FontColors.DARK
                                            : FontColors.GRAY_LIGHT
                                        : undefined
                                }
                                style={{
                                    borderColor: isDark
                                        ? FontColors.DARK
                                        : FontColors.GRAY_LIGHT,
                                }}
                            />
                            <Text
                                color={FontColors.GRAY_LIGHT}
                                fontSize={FontSize.fz12}
                                lineHeight={LineHeight.lh15}
                                fontFamily={InterFontFamily.ff400}
                            >
                                I agree agree to our{' '}
                                <Text
                                    color={
                                        isDark
                                            ? FontColors.WHITE
                                            : FontColors.BLACK
                                    }
                                    fontSize={FontSize.fz12}
                                    lineHeight={LineHeight.lh15}
                                    fontFamily={InterFontFamily.ff400}
                                    style={{ textDecorationLine: 'underline' }}
                                >
                                    Privacy Policy
                                </Text>
                            </Text>
                        </View>

                        <Button
                            disabled={!isChecked}
                            style={[
                                {
                                    marginTop: 8,
                                    backgroundColor: isDark
                                        ? FontColors.DARK_2
                                        : FontColors.BLUE_LIGHT,
                                },
                                !isChecked && { opacity: 0.7 },
                            ]}
                            onPress={handleClickNext}
                        >
                            <Text
                                color={FontColors.WHITE}
                                fontSize={FontSize.fz16}
                                lineHeight={LineHeight.lh22}
                                fontFamily={RobotoFontFamily.ff700}
                                letterSpacing={LetterSpacing.ls02}
                            >
                                Next
                            </Text>
                        </Button>
                    </View>
                </View>

                <AuthSocial />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AuthScreen;
