import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import React, { useContext } from 'react';
import Carousel from 'react-native-snap-carousel';
import { NewsContext } from '../API/Context';
import { categories, sources } from '../API/api';
import { getWindowDimensions } from '../utils';
import Search from '../components/Search';

const DiscoverScreen = () => {
    const { setCategory, setSource, darkTheme } = useContext(NewsContext);
    const { width, height } = getWindowDimensions();
    const sliderWidth = Math.round(width / 3.5);

    return (
        <View style={styles.discover}>
            <ScrollView>
                <Search />
                <Text
                    style={[
                        styles.subtitle,
                        { color: darkTheme ? 'white' : 'black' },
                    ]}
                >
                    Categories
                </Text>
                <Carousel
                    layout={'default'}
                    data={categories}
                    sliderWidth={width}
                    itemWidth={sliderWidth}
                    activeSlideAlignment={'start'}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={styles.category}
                            onPress={() => setCategory(item.name)}
                        >
                            <Image
                                source={{ uri: item.pic }}
                                style={styles.categoryImage}
                            />
                            <Text
                                style={[
                                    styles.name,
                                    { color: darkTheme ? 'white' : 'black' },
                                ]}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                <Text
                    style={[
                        styles.subtitle,
                        { color: darkTheme ? 'white' : 'black' },
                    ]}
                >
                    Sources
                </Text>
                <View style={styles.sources}>
                    {sources.map((item) => (
                        <TouchableOpacity
                            onPress={() => setSource(item.id)}
                            key={item.id}
                            style={styles.sourceContainer}
                        >
                            <Image
                                source={{ uri: item.pic }}
                                style={styles.sourceImage}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: 'center',
        height: 'auto',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: '#007FFF',
        borderBottomWidth: 5,
        alignSelf: 'flex-start',
        borderRadius: 10,
    },
    categoryImage: {
        height: '50%',
        width: '100%',
        resizeMode: 'contain',
    },
    name: {
        fontSize: 14,
        textTransform: 'capitalize',
    },
    category: {
        height: 120,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sourceImage: {
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    sources: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    sourceContainer: {
        height: 130,
        width: '35%',
        borderRadius: 5,
        margin: 15,
        backgroundColor: '#cc313d',
        elevation: 4,
    },
});

export default DiscoverScreen;
