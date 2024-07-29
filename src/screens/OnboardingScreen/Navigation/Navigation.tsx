import { FC } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, ButtonTypes, FontColors, InterFontFamily } from 'src/shared';
import { Text } from 'src/shared';
import useTheme from 'src/shared/lib/useTheme';

import { Indicator } from '../Indicator/Indicator';

import { styles } from './Navigation.styles';

import ChevronRight from 'assets/svg-icons/controll/chevron-right.svg';

interface NavigationProps {
    current: number;
    total: number;
    onNextStage: () => void;
}

export const Navigation: FC<NavigationProps> = ({
    onNextStage,
    current,
    total,
}) => {
    const router = useRouter();
    const { theme } = useTheme();

    const handleClickSkip = () => {
        router.replace('/auth');
    };

    return (
        <View style={styles.navigation}>
            <Button onPress={handleClickSkip} type={ButtonTypes.EMPTY}>
                <Text
                    color={
                        theme === 'light' ? FontColors.BLUE : FontColors.WHITE
                    }
                    fontFamily={InterFontFamily.ff400}
                >
                    Skip
                </Text>
            </Button>
            <Indicator current={current} total={total} />
            <Button
                onPress={onNextStage}
                type={ButtonTypes.ROUNDED}
                style={{
                    backgroundColor:
                        theme === 'light' ? FontColors.BLUE : FontColors.WHITE,
                }}
            >
                <ChevronRight
                    width={12}
                    height={12}
                    color={
                        theme === 'light' ? FontColors.WHITE : FontColors.BLACK
                    }
                />
            </Button>
        </View>
    );
};
