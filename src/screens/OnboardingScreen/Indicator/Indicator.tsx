import { FC } from 'react';
import { View } from 'react-native';
import { FontColors } from 'src/shared';
import useTheme from 'src/shared/lib/useTheme';

import { styles } from './Indicator.styles';

interface IndicatorProps {
    current: number;
    total: number;
}

export const Indicator: FC<IndicatorProps> = ({ current, total }) => {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            {new Array(total).fill(null).map((_, index) => (
                <View key={index}>
                    {index + 1 === current ? (
                        <View
                            style={[
                                styles.active,
                                {
                                    backgroundColor:
                                        theme === 'light'
                                            ? '#249CF3'
                                            : FontColors.WHITE,
                                },
                            ]}
                        />
                    ) : (
                        <View
                            style={[
                                styles.passive,
                                {
                                    backgroundColor:
                                        theme === 'light'
                                            ? '#222222'
                                            : FontColors.GRAY_DARK,
                                },
                            ]}
                        />
                    )}
                </View>
            ))}
        </View>
    );
};
