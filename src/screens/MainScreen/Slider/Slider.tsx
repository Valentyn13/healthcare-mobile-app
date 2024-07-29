import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { SliderItem } from '../SliderItem/SliderItem';

const slides = [
    {
        id: '3',
        header: 'Start new chat',
        description:
            'This is the window that shows us the last chat that user had. It has initial text or summary with dots',
    },
    {
        id: '1',
        header: 'Continue to last chat',
        description:
            'This is the window that shows us the last chat that user had. It has initial text or summary with dots',
    },
    {
        id: '2',
        header: 'Chat Summary',
        description:
            'This is the window that shows us the last chat that user had. It has initial text or summary with dots',
    },
];

export const Slider = () => {
    const width = Dimensions.get('screen').width;

    return (
        <Carousel
            loop
            width={width}
            height={210}
            autoPlay={false}
            data={slides}
            scrollAnimationDuration={500}
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.82,
                parallaxScrollingOffset: 55,
                parallaxAdjacentItemScale: 0.82,
            }}
            renderItem={({ item }) => (
                <SliderItem
                    key={item.id}
                    header={item.header}
                    description={item.description}
                />
            )}
        />
    );
};
