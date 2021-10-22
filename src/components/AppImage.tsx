import React from "react";
import {StyleSheet, ImageBackground, Dimensions, TouchableOpacity} from 'react-native'
import {Heart} from "../svg/Heart";
import {AppImageType} from "../store/types";


type AppImageProps = {
    item: AppImageType,
    nav: any,
    like?: boolean
}

type ParamsType = {
    url: string,
    like: boolean,
    title: string | number
}

export const AppImage = ({item, nav, like=false}:AppImageProps) => {
    return (
        <TouchableOpacity onPress={() => {
            const params: ParamsType = {
                url: item.fullImg,
                like: like,
                title: item.id
            }
            nav.navigate('Own', params)
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
