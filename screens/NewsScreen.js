import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import { NewsContext } from '../API/Context';
import SingleNews from '../components/SingleNews';

const NewsScreen = () => {
    const {
        news: { articles },
    } = useContext(NewsContext);
    const windowHeight = Dimensions.get('window').height;
    const [index, setIndex] = useState();
    return (
        <View style={styles.carousel}>
            {articles && (
                <Carousel
                    layout='stack'
                    data={articles.slice(0, 10)}
                    sliderHeight={300}
                    itemHeight={windowHeight}
                    vertical={true}
                    renderItem={({ item, index }) => (
                        <SingleNews item={item} index={index} />
                    )}
                    onSnapToItem={(index) => setIndex(index)}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: 'black',
        // transform: [{ scaleY: -1 }],
    },
});

export default NewsScreen;
