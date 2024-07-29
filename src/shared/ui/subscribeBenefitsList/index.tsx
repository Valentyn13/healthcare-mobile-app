import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from 'src/shared/lib/useTheme';

import { FontColors } from '../../constants/enums/colors.enum.ts';
import { FontSize } from '../../constants/enums/font-size.enum.ts';
import { InterFontFamily } from '../../constants/enums/fontFamilies.ts';
import { LineHeight } from '../../constants/enums/line-height.enum.ts';
import { Text } from '../text/text.tsx';

import CheckIcon from '../../../../assets/svg-icons/action/accept-tick-blue.svg';

interface SubscribeBenefitsItemProps {
    title: string;
    description: string;
}

interface SubscribeBenefitsListProps {
    benefits: SubscribeBenefitsItemProps[];
}

const SubscribeBenefitsList: FC<SubscribeBenefitsListProps> = ({
    benefits,
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <View>
            <Text
                color={isDark ? FontColors.GRAY_DARK_2 : FontColors.GRAY_LIGHT}
                fontSize={FontSize.fz14}
                lineHeight={LineHeight.lh24}
                fontFamily={InterFontFamily.ff400}
            >
                Get full access to:
            </Text>
            <View style={styles.listWrapper}>
                {benefits.map((item, i) => (
                    <SubscribeBenefitsItem
                        key={i.toString()}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </View>
        </View>
    );
};

const SubscribeBenefitsItem: FC<SubscribeBenefitsItemProps> = ({
    title,
    description,
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <View style={styles.benefitItemWrapper}>
            <CheckIcon
                color={isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT}
                width={22}
                height={22}
            />
            <View>
                <Text
                    color={isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT}
                    fontSize={FontSize.fz16}
                    lineHeight={LineHeight.lh24}
                    fontFamily={InterFontFamily.ff400}
                >
                    {title}
                </Text>
                <Text
                    color={
                        isDark ? FontColors.GRAY_DARK_2 : FontColors.GRAY_LIGHT
                    }
                    fontSize={FontSize.fz12}
                    lineHeight={LineHeight.lh24}
                    fontFamily={InterFontFamily.ff300}
                >
                    {description}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listWrapper: {
        gap: 15,
        marginTop: 15,
    },

    benefitItemWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 11,
    },
});

export { SubscribeBenefitsList };
