import React, { FC, useEffect, useRef } from 'react';
import { Animated, Easing, TouchableOpacity, View } from 'react-native';
import useTheme from 'src/shared/lib/useTheme';

import {
    FontColors,
    FontSize,
    LetterSpacing,
    LineHeight,
    RobotoFontFamily,
    Text,
} from '../../../shared';
import { IPlan } from '../types.ts';

import { styles } from './PlanSelector.styles.ts';

import CheckIcon from '../../../../assets/svg-icons/action/accept-tick-blue.svg';

interface PlanSelectorProps {
    plans: IPlan[];
    currentPlan: string | null;
    handlePress: (index: number | null) => void;
}

const PlanSelector: FC<PlanSelectorProps> = ({
    plans,
    currentPlan,
    handlePress,
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const planSelectorStyle = styles(isDark);

    const animatedValues = useRef(
        plans.map(() => new Animated.Value(0)),
    ).current;

    const animateSelection = (index: number, isSelected: boolean) => {
        Animated.timing(animatedValues[index], {
            toValue: isSelected ? 1 : 0,
            duration: 150,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        plans.forEach((plan, index) => {
            animateSelection(index, currentPlan === plan.id);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPlan]);

    const animatedStyles = (index: number) => ({
        width: animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['70%', '100%'],
        }),
    });

    return (
        <View style={planSelectorStyle.selectPlanWrapper}>
            <Text
                style={{
                    alignSelf: 'flex-start',
                }}
                color={isDark ? FontColors.GRAY_DARK_2 : FontColors.GRAY_LIGHT}
                fontSize={FontSize.fz12}
                lineHeight={LineHeight.lh22}
                fontFamily={RobotoFontFamily.ff400}
            >
                Select your plan:
            </Text>
            {plans.map((plan, index) => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={plan.id}
                    onPress={() => handlePress(index)}
                >
                    <Animated.View
                        style={[
                            planSelectorStyle.planBox,
                            currentPlan === plan.id &&
                                planSelectorStyle.planBoxSelected,
                            animatedStyles(index),
                        ]}
                    >
                        <View>
                            {plan.id === currentPlan && (
                                <Text
                                    color={
                                        isDark
                                            ? FontColors.WHITE
                                            : FontColors.BLUE_LIGHT
                                    }
                                    fontSize={FontSize.fz12}
                                    lineHeight={LineHeight.lh22}
                                    fontFamily={RobotoFontFamily.ff400}
                                    letterSpacing={LetterSpacing.ls02}
                                >
                                    Individual Plan
                                </Text>
                            )}
                            <Text>
                                <Text
                                    color={
                                        isDark
                                            ? FontColors.WHITE
                                            : FontColors.DARK
                                    }
                                    fontSize={FontSize.fz16}
                                    lineHeight={LineHeight.lh22}
                                    fontFamily={RobotoFontFamily.ff700}
                                    letterSpacing={LetterSpacing.ls02}
                                >
                                    EUR {plan.price}
                                </Text>{' '}
                                <Text
                                    color={
                                        isDark
                                            ? FontColors.WHITE
                                            : FontColors.DARK
                                    }
                                    fontSize={FontSize.fz16}
                                    lineHeight={LineHeight.lh22}
                                    fontFamily={RobotoFontFamily.ff400}
                                    letterSpacing={LetterSpacing.ls02}
                                >
                                    Monthly
                                </Text>{' '}
                                <Text
                                    color={
                                        isDark
                                            ? FontColors.GRAY_DARK_2
                                            : FontColors.GRAY_LIGHT
                                    }
                                    fontSize={FontSize.fz12}
                                    lineHeight={LineHeight.lh22}
                                    fontFamily={RobotoFontFamily.ff400}
                                >
                                    {plan.description}
                                </Text>
                            </Text>
                        </View>
                        {currentPlan === plan.id ? (
                            <CheckIcon
                                width={22}
                                height={22}
                                color={
                                    isDark
                                        ? FontColors.WHITE
                                        : FontColors.BLUE_LIGHT
                                }
                            />
                        ) : (
                            <View
                                style={[planSelectorStyle.checkboxWrapper]}
                            ></View>
                        )}
                    </Animated.View>
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handlePress(null)}
                style={planSelectorStyle.freePlanButton}
            >
                <Text
                    color={
                        isDark ? FontColors.GRAY_DARK_2 : FontColors.GRAY_LIGHT
                    }
                    fontSize={FontSize.fz14}
                    lineHeight={LineHeight.lh22}
                    fontFamily={RobotoFontFamily.ff400}
                    style={{
                        textDecorationLine: 'underline',
                    }}
                >
                    Select free plan
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export { PlanSelector };
