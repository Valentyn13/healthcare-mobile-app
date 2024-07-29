import { FC, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import useTheme from 'src/shared/lib/useTheme';

import {
    Button,
    FontColors,
    FontSize,
    FontWeight,
    InterFontFamily,
    LetterSpacing,
    LineHeight,
    RobotoFontFamily,
    SubscribeBenefitsList,
    Text,
} from '../../shared';

import { PlanSelector } from './planSelector/PlanSelector.tsx';
import { styles } from './SubscriptionSplash.styles.ts';
import { IPlan, IPlanBenefit } from './types.ts';

import CloseIcon from '../../../assets/svg-icons/controll/close-circle-gray.svg';

const plans: IPlan[] = [
    {
        id: '1',
        price: 20,
        description: 'EUR 120 / year',
        plan_benefits: [
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
        ],
    },
    {
        id: '2',
        price: 20,
        description: 'Family plan',
        plan_benefits: [
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
            {
                title: 'Information regarding the full',
                description: 'Information regarding the full',
            },
        ],
    },
];

const freePlanBenefits: IPlanBenefit[] = [
    {
        title: 'Information regarding the full',
        description: 'Information regarding the full',
    },
    {
        title: 'Information regarding the full',
        description: 'Information regarding the full',
    },
];

const SubscriptionSplash: FC = () => {
    const [currentPlan, setCurrentPlan] = useState<string | null>('1');

    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const splashStyles = styles(isDark);

    const selectedPlan =
        currentPlan !== null
            ? plans.find((plan) => plan.id === currentPlan)
            : null;

    const handlePress = (index: number | null) => {
        if (index !== null) {
            setCurrentPlan(plans[index].id);
        } else {
            setCurrentPlan(null);
        }
    };

    return (
        <View
            style={[
                splashStyles.container,
                {
                    backgroundColor: isDark ? '#000' : '#fff',
                },
            ]}
        >
            {/* HEADER */}
            <View style={splashStyles.header}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        router.back();
                    }}
                >
                    <CloseIcon
                        width={35}
                        height={35}
                        color={
                            isDark
                                ? FontColors.GRAY_DARK_2
                                : FontColors.GRAY_LIGHT
                        }
                    />
                </TouchableOpacity>
                <Text
                    color={isDark ? FontColors.WHITE : FontColors.BLUE}
                    fontSize={FontSize.fz16}
                    fontFamily={RobotoFontFamily.ff400}
                    letterSpacing={LetterSpacing.ls02}
                    lineHeight={LineHeight.lh22}
                >
                    Help?
                </Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* TITLE */}
                <View style={splashStyles.titleWrapper}>
                    <Text
                        color={
                            isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT
                        }
                        fontSize={FontSize.fz30}
                        fontFamily={InterFontFamily.ff800}
                        letterSpacing={LetterSpacing.ls1}
                        lineHeight={LineHeight.lh36}
                        style={{ maxWidth: 280 }}
                    >
                        Unlock all benefits of AI Psy Help
                    </Text>
                    <Text
                        color={isDark ? FontColors.WHITE : FontColors.DARK}
                        fontSize={FontSize.fz16}
                        lineHeight={LineHeight.lh22}
                        fontFamily={RobotoFontFamily.ff400}
                        letterSpacing={LetterSpacing.ls02}
                    >
                        Try free for 7 days.{' '}
                        <Text
                            color={
                                isDark
                                    ? FontColors.GRAY_DARK_2
                                    : FontColors.BLUE_LIGHT
                            }
                            fontSize={FontSize.fz16}
                            fontFamily={RobotoFontFamily.ff400}
                            lineHeight={LineHeight.lh22}
                            letterSpacing={LetterSpacing.ls02}
                        >
                            Cancel anytime.
                        </Text>
                    </Text>
                </View>

                {/* PLANS */}
                <PlanSelector
                    plans={plans}
                    currentPlan={currentPlan}
                    handlePress={handlePress}
                />

                {/* BENEFITS*/}
                <View style={{ marginTop: 27 }}>
                    {selectedPlan ? (
                        <SubscribeBenefitsList
                            benefits={selectedPlan.plan_benefits}
                        />
                    ) : (
                        <SubscribeBenefitsList benefits={freePlanBenefits} />
                    )}
                </View>
            </ScrollView>

            <Button onPress={() => {}} style={splashStyles.tryFreeBtn}>
                <Text
                    color={FontColors.WHITE}
                    fontSize={FontSize.fz16}
                    lineHeight={LineHeight.lh22}
                    letterSpacing={LetterSpacing.ls02}
                    fontWeight={FontWeight.fw500}
                >
                    Try for free
                </Text>
            </Button>
        </View>
    );
};

export default SubscriptionSplash;
