import { StyleSheet, View } from 'react-native';
import useTheme from 'src/shared/lib/useTheme';

import { FontSize, InterFontFamily, LineHeight, Text } from '../../../shared';
import { FontColors } from '../../../shared';

import Logo from '../../../../assets/svg-icons/action/accept-tick-blue.svg';

type TextInformationProps = {
    info: {
        title: string;
        description: string;
    };
};
const TextInformation = ({
    info: { title, description },
}: TextInformationProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <View style={styles.container}>
            <Logo
                style={styles.image}
                color={isDark ? FontColors.WHITE : FontColors.BLUE_LIGHT}
            />
            <View style={styles.textContainer}>
                <Text
                    color={isDark ? FontColors.WHITE : FontColors.BLUE}
                    fontSize={FontSize.fz16}
                    lineHeight={LineHeight.lh24}
                >
                    {title}
                </Text>
                <Text
                    fontFamily={InterFontFamily.ff300}
                    fontSize={FontSize.fz12}
                    lineHeight={LineHeight.lh24}
                >
                    {description}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        marginTop: 15,

        marginLeft: 11,
    },
    image: {
        width: 22,
        height: 22,

        marginTop: 28,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
export default TextInformation;
