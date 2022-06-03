import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Modal,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { NewsContext } from '../API/Context';
import SingleNews from './SingleNews';
import { Entypo } from '@expo/vector-icons';

const Search = () => {
    const {
        news: { articles },
        darkTheme,
    } = useContext(NewsContext);

    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();

    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([]);
            return;
        }
        setSearchResults(
            articles.filter((query) => query.title.includes(text))
        );
    };

    const handleModal = (item) => {
        setModalVisible(true);
        setCurrentNews(item);
    };

    return (
        <View style={{ width: '100%', position: 'relative' }}>
            <TextInput
                style={[
                    styles.search,
                    {
                        backgroundColor: darkTheme ? 'black' : 'lightgrey',
                        color: darkTheme ? 'white' : 'black',
                    },
                ]}
                onChangeText={(text) => handleSearch(text)}
                placeholder='Search for news..'
                placeholderTextColor={darkTheme ? 'white' : 'grey'}
            />

            <View style={styles.searchResults}>
                {searchResults.slice(0, 10).map((item) => (
                    <TouchableOpacity
                        key={item.title}
                        activeOpacity={0.7}
                        onPress={() => handleModal(item)}
                    >
                        <Text
                            style={[
                                styles.singleResult,
                                {
                                    backgroundColor: darkTheme
                                        ? 'black'
                                        : 'white',
                                    color: darkTheme ? 'white' : 'black',
                                },
                            ]}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.modal}
                >
                    <Entypo name='circle-with-cross' size={30} color='white' />
                </TouchableOpacity>
                <View style={styles.modalView}>
                    <SingleNews item={currentNews} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15,
    },
    searchResults: {
        position: 'absolute',
        zIndex: 1,
        top: 50,
    },
    singleResult: {
        borderRadius: 5,
        padding: 10,
        margin: 0.5,
        shadowColor: 'black',
        elevation: 5,
    },
    modal: {
        position: 'absolute',
        zIndex: 2,
        right: 0,
        margin: 20,
        marginTop: 80,
    },
    modalView: {
        height: '100%',
        marginTop:60
        // transform: [{ scaleY: -1 }],
    },
});

export default Search;
