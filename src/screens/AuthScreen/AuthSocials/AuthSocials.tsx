import React from 'react';
import { View } from 'react-native';
import useTheme from 'src/shared/lib/useTheme.ts';

import {
    Button,
    FontColors,
    FontSize,
    LineHeight,
    RobotoFontFamily,
    Text,
} from '../../../shared';

import { styles } from './AuthSocials.styles.ts';

import Apple from '../../../../assets/svg-icons/social/apple.svg';
import Facebook from '../../../../assets/svg-icons/social/facebook.svg';
import Google from '../../../../assets/svg-icons/social/google.svg';
import GoogleWhite from '../../../../assets/svg-icons/social/google-white.svg';

const AuthSocial = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const authStyle = styles(isDark);

    return (
        <View style={authStyle.socialContainer}>
            <View style={authStyle.orContainer}>
                <View style={authStyle.line} />
                <Text
                    color={FontColors.GRAY_LIGHT}
                    fontSize={FontSize.fz14}
                    lineHeight={LineHeight.lh20}
                    fontFamily={RobotoFontFamily.ff400}
                >
                    Or
                </Text>
                <View style={authStyle.line} />
            </View>
            <View style={authStyle.socialButtons}>
                <Button style={authStyle.socialButton} onPress={() => {}}>
                    {isDark ? (
                        <GoogleWhite width={23} height={23} />
                    ) : (
                        <Google width={23} height={23} />
                    )}
                    <Text
                        color={isDark ? FontColors.WHITE : FontColors.DARK}
                        style={authStyle.socialText}
                    >
                        Continue with Google
                    </Text>
                </Button>
                <Button
                    style={[authStyle.socialButton, authStyle.facebookButton]}
                    onPress={() => {}}
                >
                    <Facebook width={23} height={23} />
                    <Text color={FontColors.WHITE} style={authStyle.socialText}>
                        Continue with Facebook
                    </Text>
                </Button>
                <Button
                    style={[authStyle.socialButton, authStyle.appleButton]}
                    onPress={() => {}}
                >
                    <Apple width={23} height={23} />
                    <Text color={FontColors.WHITE} style={authStyle.socialText}>
                        Continue with Apple
                    </Text>
                </Button>
            </View>
        </View>
    );
};

export default AuthSocial;
