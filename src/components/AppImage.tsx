import React from "react";
import {StyleSheet, View, Image, ImageBackground, Text, Dimensions, TouchableOpacity} from 'react-native'
import {Heart} from "../svg/Heart";

export const AppImage = ({item, nav, like=false}:any) => {
    return (
        <TouchableOpacity onPress={() => {
            nav.navigate('Own', {
                url: item.fullImg,
                like: like,
                title: item.id
            })
        }}>
            <ImageBackground source={{uri: item.smallImg}} style={styles.container} imageStyle={{borderRadius: 10}} >
                {like && <Heart />}
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width - 45)/4,
        height: (Dimensions.get('window').width - 45)/4,
        marginBottom: 5,
        marginRight: 5
    },
})
