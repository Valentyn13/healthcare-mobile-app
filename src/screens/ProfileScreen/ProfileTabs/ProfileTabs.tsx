import { FC, useState } from 'react';
import {
    StyleSheet,
    Switch,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { useRouter } from 'expo-router';
import useTheme from 'src/shared/lib/useTheme';

import {
    FontColors,
    FontSize,
    InterFontFamily,
    LineHeight,
    RobotoFontFamily,
    Text,
} from '../../../shared';

const icons = {
    Profile: require('../../../../assets/svg-icons/settings/account.svg')
        .default,
    Arrow: require('../../../../assets/svg-icons/settings/chevron-right.svg')
        .default,
    Notification:
        require('../../../../assets/svg-icons/settings/notification.svg')
            .default,
    Settings: require('../../../../assets/svg-icons/settings/settings-icon.svg')
        .default,
};

interface SubTab {
    id: string;
    subTabTitle: string;
    link?: string;
    isSwitcher?: boolean;
}

interface Tab {
    tabTitle: string;
    tabIcon: keyof typeof icons;
    subTabs: SubTab[];
}

const tabs: Tab[] = [
    {
        tabTitle: 'Account',
        tabIcon: 'Profile',
        subTabs: [
            {
                id: '1',
                subTabTitle: 'Personal information',
                link: '/personalInfo',
            },
            {
                id: '2',
                subTabTitle: 'Change plan',
                link: '/selectSubscription',
            },
            {
                id: '3',
                subTabTitle: 'Change password',
                link: '/changePassword',
            },
        ],
    },
    {
        tabTitle: 'Notifications',
        tabIcon: 'Notification',
        subTabs: [
            {
                id: '1',
                subTabTitle: 'New for you',
                isSwitcher: true,
            },
            {
                id: '2',
                subTabTitle: 'Account activity',
                isSwitcher: true,
            },
        ],
    },
    {
        tabTitle: 'More',
        tabIcon: 'Settings',
        subTabs: [
            { id: '1', subTabTitle: 'Languages', link: '/changeLanguage' },
            { id: '2', subTabTitle: 'Resources', link: '/settings' },
            {
                id: '3',
                subTabTitle: 'Night mode',
                isSwitcher: true,
            },
        ],
    },
];

const ProfileTabs: FC = () => {
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const isDark = theme === 'dark';

    const [switchStates, setSwitchStates] = useState<{
        [key: string]: boolean;
    }>({
        'Notifications|1': false, // Handle New Notification
        'Notifications|2': false, // Handle Activity Notification
        'More|3': isDark, // Handle Theme Toggling
    });

    const handleToggle =
        (tabTitle: string, subTabId: string) => (value: boolean) => {
            const key = `${tabTitle}|${subTabId}`;
            setSwitchStates((prevState) => ({
                ...prevState,
                [key]: value,
            }));

            if (tabTitle === 'Notifications' && subTabId === '1') {
                // Handle New Notification toggle
            } else if (tabTitle === 'Notifications' && subTabId === '2') {
                // Handle Activity Notification toggle
            } else if (tabTitle === 'More' && subTabId === '3') {
                // Handle Theme Toggling
                const newTheme = value ? 'dark' : 'light';
                toggleTheme(newTheme);
            }
        };

    return (
        <View style={{ gap: 16, marginTop: 24 }}>
            {tabs.map((tab, tabIndex) => (
                <View key={tabIndex}>
                    <View
                        style={[
                            styles.titleContainer,
                            {
                                borderColor: isDark
                                    ? FontColors.DARK_2
                                    : FontColors.GRAY_DARK,
                            },
                        ]}
                    >
                        {icons[tab.tabIcon]({
                            width: 22,
                            height: 22,
                            color: isDark ? FontColors.WHITE : FontColors.DARK,
                        })}
                        <Text
                            color={isDark ? FontColors.WHITE : FontColors.DARK}
                            fontFamily={RobotoFontFamily.ff500}
                            fontSize={FontSize.fz16}
                            lineHeight={LineHeight.lh18}
                        >
                            {tab.tabTitle}
                        </Text>
                    </View>
                    <View>
                        {tab.subTabs.map((subTab) => {
                            const subTabContent = (
                                <View
                                    key={subTab.id}
                                    style={styles.subTabContainer}
                                >
                                    <Text
                                        lineHeight={LineHeight.lh17}
                                        fontFamily={InterFontFamily.ff400}
                                        color={FontColors.GRAY_LIGHT}
                                    >
                                        {subTab.subTabTitle}
                                    </Text>
                                    {subTab.isSwitcher ? (
                                        <Switch
                                            trackColor={{
                                                true: isDark
                                                    ? FontColors.DARK_2
                                                    : FontColors.BLUE_LIGHT,
                                                false: isDark
                                                    ? FontColors.DARK_2
                                                    : '#E0E0E0',
                                            }}
                                            thumbColor={'#fff'}
                                            value={
                                                switchStates[
                                                    `${tab.tabTitle}|${subTab.id}`
                                                ]
                                            }
                                            onValueChange={handleToggle(
                                                tab.tabTitle,
                                                subTab.id,
                                            )}
                                        />
                                    ) : (
                                        <icons.Arrow width={12} height={12} />
                                    )}
                                </View>
                            );

                            return subTab.link ? (
                                <TouchableWithoutFeedback
                                    key={subTab.id}
                                    onPress={() => {
                                        router.push(subTab.link!);
                                    }}
                                >
                                    {subTabContent}
                                </TouchableWithoutFeedback>
                            ) : (
                                subTabContent
                            );
                        })}
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
        borderBottomWidth: 1,
        paddingBottom: 6,
        paddingTop: 3,
    },
    subTabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 36,
    },
});

export default ProfileTabs;
