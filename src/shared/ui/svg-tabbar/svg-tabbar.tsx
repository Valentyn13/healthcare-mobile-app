import React, { useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Svg, { Path } from 'react-native-svg';
import { curveBasis, line } from 'd3-shape';
import useTheme from 'src/shared/lib/useTheme';

import { FontColors } from '../../constants/enums/enums.ts';

const NAVIGATION_BOTTOM_TABS_HEIGHT = 80;
const { width: wWidth } = Dimensions.get('window');

const lineGenerator = line()
    .x((d) => d[0])
    .y((d) => d[1]);

const curvedLineGenerator = line()
    .x((d) => d[0])
    .y((d) => d[1])
    .curve(curveBasis);

const generateRectPath = (width: number) =>
    lineGenerator([
        [0, 0],
        [width / 2, 0],
        [width, 0],
        [width, NAVIGATION_BOTTOM_TABS_HEIGHT],
        [0, NAVIGATION_BOTTOM_TABS_HEIGHT],
        [0, 0],
    ]);

const generateCurvedPath = (width: number) =>
    curvedLineGenerator([
        [(width / 5) * 1.4, 0],
        [(width / 5) * 2 - 25, 0],
        [(width / 5) * 2 - 5, 4],
        [(width / 5) * 1.8 + 22, NAVIGATION_BOTTOM_TABS_HEIGHT * 0.55],
        [(width / 5) * 3.2 - 22, NAVIGATION_BOTTOM_TABS_HEIGHT * 0.55],
        [(width / 5) * 3 + 5, 4],
        [(width / 5) * 3 + 25, 0],
        [(width / 5) * 3.6, 0],
    ]);

const generateTopStrokePath = (width: number) => {
    const straightStart = lineGenerator([
        [0, 0],
        [(width / 5) * 1.4, 0],
    ]);

    const curvedCenter = generateCurvedPath(width);

    const straightEnd = lineGenerator([
        [(width / 5) * 3.6, 0],
        [width, 0],
    ]);

    return `${straightStart} ${curvedCenter} ${straightEnd}`;
};

const TabsShape = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const d = useMemo(() => {
        const rect = generateRectPath(wWidth);
        const center = generateCurvedPath(wWidth);
        return `${center} ${rect}`;
    }, []);

    const topStrokePath = useMemo(() => generateTopStrokePath(wWidth), []);

    return (
        <View style={styles.container}>
            <Shadow
                distance={30}
                startColor="rgba(36, 156, 243, 0.08)"
                endColor="rgba(36, 156, 243, 0.01)"
                offset={[0, 14]}
                style={styles.shadow}
            >
                <Svg
                    width={wWidth}
                    {...{ height: NAVIGATION_BOTTOM_TABS_HEIGHT }}
                >
                    <Path fill={isDark ? '#000' : '#fff'} d={d} />
                    <Path
                        fill="none"
                        strokeWidth={1}
                        stroke={
                            isDark ? FontColors.DARK_2 : FontColors.GRAY_DARK
                        }
                        d={topStrokePath}
                    />
                </Svg>
            </Shadow>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    shadow: {
        width: wWidth,
        height: NAVIGATION_BOTTOM_TABS_HEIGHT,
    },
});
export default TabsShape;
