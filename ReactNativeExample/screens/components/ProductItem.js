import React from 'react';
import { View, Text, Image, StyleSheet, Button, FlatList, TouchableOpacity, Dimensions } from 'react-native';
const screenWidth = Dimensions.get("window").width;

const ProductItem = props => {
    return <View style={{
        width: screenWidth / 2,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Image source={{ uri: props.imageUrl }} style={Styles.icon} />
        <Text style={Styles.title}>{props.title}</Text>
        <Text style={Styles.price}>${props.price}</Text>

    </View>
}

const Styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',

    },
    title: {
        padding: 5,
        fontWeight: 'bold',
        fontSize: 15
    },
    price: {
        marginBottom: 5,
        color: 'grey'
    },
    icon: {
        width: "100%",
        height: screenWidth / 2
    }
});


export default ProductItem;