import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    MaterialCommunityIcons,
    SimpleLineIcons,
    AntDesign,
} from '@expo/vector-icons';
import React, { useContext } from 'react';
import { NewsContext } from '../API/Context';

const Tab = ({ index, setIndex }) => {
    const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext);
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: darkTheme ? '#282C35' : 'white' },
            ]}
        >
            {index === 0 ? (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setDarkTheme(!darkTheme)}
                >
                    <Text
                        style={[
                            styles.text,
                            { color: darkTheme ? 'lightgrey' : 'black' },
                        ]}
                    >
                        <MaterialCommunityIcons
                            name='theme-light-dark'
                            size={16}
                            color='#007FFF'
                        />
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <SimpleLineIcons
                        name='arrow-left'
                        size={16}
                        color='#007FFF'
                    />
                    <Text
                        style={[
                            styles.text,
                            { color: darkTheme ? 'lightgrey' : 'black' },
                        ]}
                    >
                        Discover
                    </Text>
                </TouchableOpacity>
            )}
            <Text
                style={[
                    styles.center,
                    { color: darkTheme ? 'white' : 'black' },
                ]}
            >
                {index ? 'All News' : 'Discover'}
            </Text>
            {index ? (
                <TouchableOpacity
                    style={styles.right}
                    onPress={() => fetchNews('general')}
                >
                    <Text style={styles.text}>
                        <AntDesign name='reload1' size={16} color='#007FFF' />
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={[
                        styles.left,
                        { color: darkTheme ? 'white' : 'black' },
                    ]}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <Text
                        style={[
                            styles.text,
                            { color: darkTheme ? 'white' : 'black' },
                        ]}
                    >
                        All News
                    </Text>
                    <SimpleLineIcons
                        name='arrow-right'
                        size={15}
                        color='#007FFF'
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        height:60
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 80,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
    },
    right: {
        width: 80,
        alignItems: 'flex-end',
    },
    center: {
        paddingBottom: 6,
        borderBottomWidth: 5,
        borderBottomColor: '#007FFF',
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '700',
    },
});
export default Tab;
