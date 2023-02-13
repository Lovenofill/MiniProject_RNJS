import React from 'react';
import {
    StyleSheet, View, Text, Image, Dimensions,
} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');

const DATA = [
    {
        coverImageUri: `https://picsum.photos/1200?${Math.random()}`,
        cornerLabelColor: '#FFD300',
        cornerLabelText: 'สินค้ามาแรง',
    },
    {
        coverImageUri: `https://picsum.photos/1200?${Math.random()}`,
        cornerLabelColor: '#0080ff',
        cornerLabelText: 'สินค้าใหม่',
    },
    {
        coverImageUri: `https://picsum.photos/1200?${Math.random()}`,
        cornerLabelColor: '#2ECC40',
        cornerLabelText: 'สินค้าลดราคา',
    },
    {
        coverImageUri: `https://picsum.photos/1200?${Math.random()}`,
        cornerLabelColor: '#2ECC40',
        cornerLabelText: 'สินค้าลดราคา',
    },
];

const App = () => {
    const renderItem = data => (
        <View
            key={data.coverImageUri}
            style={styles.cardContainer}
        >
            <View
                style={styles.cardWrapper}
            >
                <Image
                    style={styles.card}
                    source={{ uri: data.coverImageUri }}
                />
                <View
                    style={[
                        styles.cornerLabel,
                        { backgroundColor: data.cornerLabelColor },
                    ]}
                >
                    <Text style={styles.cornerLabelText}>
                        {data.cornerLabelText}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <View >
            <Carousel
                pagination={PaginationLight}
                renderItem={renderItem}
                data={DATA}
                loop
                autoplay
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
    },
    cardWrapper: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    card: {
        width: width * 0.95,
        height: width * 0.5,
    },
    cornerLabel: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 8,
    },
    cornerLabelText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    },
});

export default App;
