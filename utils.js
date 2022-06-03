import { Dimensions } from 'react-native';
export const getWindowDimensions = () => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return { width, height };
};
