import React, { FC } from 'react';
import { View } from 'react-native';
import useTheme from 'src/shared/lib/useTheme.ts';

import { Button, ButtonTypes, Text } from '../../../shared';
import { FormToggleType } from '../types.ts';

import { styles } from './AuthToggle.styles.ts';

interface Props {
    currentForm: FormToggleType;
    setCurrentForm: (form: FormToggleType) => void;
}

const AuthToggle: FC<Props> = ({ currentForm, setCurrentForm }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const toggleStyles = styles(isDark);
    return (
        <View style={toggleStyles.toggleContainer}>
            <Button
                type={ButtonTypes.EMPTY}
                style={[
                    toggleStyles.toggleButton,
                    currentForm === 'email' && toggleStyles.activeButton,
                ]}
                onPress={() => setCurrentForm('email')}
            >
                <Text
                    style={
                        currentForm === 'email'
                            ? toggleStyles.activeText
                            : toggleStyles.defaultText
                    }
                >
                    Email
                </Text>
            </Button>
            <Button
                type={ButtonTypes.EMPTY}
                style={[
                    toggleStyles.toggleButton,
                    currentForm === 'phone' && toggleStyles.activeButton,
                ]}
                onPress={() => setCurrentForm('phone')}
            >
                <Text
                    style={
                        currentForm === 'phone'
                            ? toggleStyles.activeText
                            : toggleStyles.defaultText
                    }
                >
                    Phone number
                </Text>
            </Button>
        </View>
    );
};

export default AuthToggle;
