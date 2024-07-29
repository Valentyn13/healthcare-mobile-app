import { StyleSheet, View } from 'react-native';
import {
    FontColors,
    InterFontFamily,
    LineHeight,
    Text,
} from 'src/shared/index.ts';

import TextInformation from './textInformation.tsx';

const info = [
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
];

const Group_1685 = () => {
    return (
        <View style={styles.container}>
            <Text
                color={FontColors.GRAY_LIGHT}
                fontFamily={InterFontFamily.ff400}
                lineHeight={LineHeight.lh24}
            >
                Get full access to:
            </Text>
            <View>
                {info.map((item, index) => (
                    <TextInformation key={index} info={item} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,

        width: 312,
        height: 276,
    },
});
export default Group_1685;
