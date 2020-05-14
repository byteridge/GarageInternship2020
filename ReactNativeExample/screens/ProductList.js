import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Colors from '../config/Colors';
import AppStyle from '../config/Styles';
import { PRODUCTS } from '../data/DummyData';
import ProductItem from '../screens/components/ProductItem';

const ProductList = () => {
    const renderGridItem = itemData => {
        return <ProductItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} price={itemData.item.price}/>;
    }
    return <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        <View style={Styles.header}>
            {/* in line styles for title */}
            <Text style={{
                fontWeight: "bold",
                fontSize: 16,
                marginRight: 10
            }}>FIND SHOES</Text>
            <Image source={require('../assets/images/logo.png')} />
        </View>
        <View style={Styles.bodyContainer}>
            <FlatList keyExtractor={(item, index) => item.id}
                data={PRODUCTS}
                numColumns={2}
                renderItem={renderGridItem}
                style={{ backgroundColor: Colors.headerColor }} />
        </View>
    </SafeAreaView>
}

const Styles = StyleSheet.create({
    header: {
        flex: 0.1,
        backgroundColor: Colors.headerColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyContainer: {
        flex: 0.9,
        backgroundColor: 'white',
        paddingTop: 10
    },
})

export default ProductList;