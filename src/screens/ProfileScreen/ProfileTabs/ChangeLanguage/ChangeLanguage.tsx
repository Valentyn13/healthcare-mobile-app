import React, { FC } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

import {
    FontColors,
    FontSize,
    FontWeight,
    LetterSpacing,
    RobotoFontFamily,
    Text,
} from '../../../../shared';
import useTheme from '../../../../shared/lib/useTheme.ts';

import ArrowBackIcon from '../../../../../assets/svg-icons/controll/arrow-back-auth-icon.svg';

interface Language {
    id: string;
    name: string;
}

const ChangeLanguage: FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const languages: Language[] = [
        { id: 'en', name: 'English' },
        { id: 'es', name: 'Spanish' },
        { id: 'fr', name: 'French' },
        { id: 'de', name: 'German' },
        { id: 'it', name: 'Italian' },
        { id: 'ja', name: 'Japanese' },
        { id: 'ko', name: 'Korean' },
        { id: 'zh', name: 'Chinese' },
        { id: 'pt', name: 'Portuguese' },
    ];

    const renderItem = ({ item }: { item: Language }) => (
        <TouchableOpacity
            activeOpacity={0.6}
            style={[
                styles.languageButton,
                { borderColor: isDark ? '#fff' : FontColors.GRAY_DARK_2 },
            ]}
            onPress={() => {
                // Implement language selection logic here
                console.log('Selected language:', item.name);
            }}
        >
            <Text
                style={styles.languageText}
                color={isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 24,
                paddingTop: 12,
                backgroundColor: isDark ? '#000' : '#fff',
            }}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => {
                        router.back();
                    }}
                    style={{
                        paddingVertical: 11.5,
                        justifyContent: 'center',
                    }}
                >
                    <ArrowBackIcon
                        color={isDark ? FontColors.WHITE : FontColors.DARK}
                    />
                </TouchableOpacity>
                <Text
                    fontSize={FontSize.fz20}
                    fontWeight={FontWeight.fw600}
                    color={isDark ? FontColors.WHITE : FontColors.DARK}
                    letterSpacing={LetterSpacing.ls02}
                    fontFamily={RobotoFontFamily.ff500}
                    style={{ marginHorizontal: 'auto' }}
                >
                    Languages
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={languages}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 8 }} />
                    )}
                />
            </View>
        </View>
    );
};

export default ChangeLanguage;
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    languageButton: {
        width: '100%', // Full width
        paddingVertical: 16,
        borderWidth: 1,
        justifyContent: 'center', // Center the text vertically
        alignItems: 'center', // Center the text horizontally
        borderRadius: 8,
    },
    languageText: {
        textAlign: 'center', // Center text
    },
});
