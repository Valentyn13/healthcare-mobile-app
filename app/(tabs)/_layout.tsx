import { Redirect, Tabs } from 'expo-router';
import CustomTabbar from 'src/shared/ui/custom-tabbar/custom-tabbar';

import { useAppSelector } from '../../src/shared/lib/hooks/use-app-selector.hook.ts';

const TabsLayout = () => {
    const { authData } = useAppSelector((state) => state.user);

    if (!authData) return <Redirect href={'/auth'} />;

    return (
        <Tabs
            tabBar={(props) => {
                if (
                    props.state.routeNames[props.state.index] ===
                        'profile/index' ||
                    props.state.routeNames[props.state.index] ===
                        'settings/index'
                ) {
                    return null;
                }
                return <CustomTabbar {...props} />;
            }}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name="chats/index" />
            <Tabs.Screen name="settings/index" />
            <Tabs.Screen name="profile/index" />
        </Tabs>
    );
};

export default TabsLayout;
