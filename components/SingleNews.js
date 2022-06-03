import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Linking,
    StatusBar,
} from 'react-native';
import { getWindowDimensions } from '../utils';
import React, { useContext } from 'react';
import { NewsContext } from '../API/Context';

const { width, height } = getWindowDimensions();

const SingleNews = ({ item, index }) => {
    const { darkTheme } = useContext(NewsContext);
    return (
        <View
            style={{
                height: height - 60 - StatusBar.currentHeight,
                width: width,
                // transform: [{ scaleY: -1 }],
            }}
        >
            <Image
                source={{ uri: item.urlToImage }}
                style={{
                    height: '40%',
                    resizeMode: 'cover',
                    width: width,
                    // marginTop: StatusBar.currentHeight,
                }}
            />
            <View
                style={[
                    styles.description,
                    { backgroundColor: darkTheme ? '#282C35' : 'white' },
                ]}
            >
                <Text
                    style={[
                        styles.title,
                        { color: darkTheme ? 'white' : 'black' },
                    ]}
                >
                    {item.title}
                </Text>
                <Text
                    numberOfLines={4}
                    style={[
                        styles.content,
                        { color: darkTheme ? 'white' : 'black' },
                    ]}
                >
                    {item.description}
                </Text>
                <Text style={{ color: darkTheme ? 'white' : 'black' }}>
                    Short by <Text>{item.author ?? 'Unknown'}</Text>
                </Text>
                <ImageBackground
                    blurRadius={30}
                    style={styles.footer}
                    source={{ uri: item.urlToImage }}
                >
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text
                            style={{
                                fontSize: 15,
                                color: darkTheme ? 'white' : 'black',
                            }}
                        >
                            `{item?.content?.slice(0, 45)}...`
                        </Text>
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                color: darkTheme ? 'white' : 'black',
                            }}
                        >
                            Read More
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    content: {
        fontSize: 16,
        paddingBottom: 10,
    },
    footer: {
        height: 80,
        width: width,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#d7be69',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    description: {
        padding: 15,
        flex: 1,
        position: 'relative',
    },
});
export default SingleNews;
