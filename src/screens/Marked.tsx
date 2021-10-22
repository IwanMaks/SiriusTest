import React from "react";
import {StyleSheet, View, Text, Button, ActivityIndicator, FlatList} from 'react-native'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./RootStackPrams";
import {useAppSelector} from "../../hooks";
import {AppImage} from "../components/AppImage";

type Props = NativeStackScreenProps<RootStackParamList, 'Marked'>;

export const Marked = ({navigation}: Props) => {
    const mok = {
        '3464632': 'like',
        '3509971': 'like',
        '1098365': 'like',
        '924824': 'del',
        '2770933': 'del',
        '4319752': 'del'
    }

    const img = useAppSelector(state => state.imgs.url)
    const loading = useAppSelector(state => state.imgs.loading)
    let likeImg;

    if (img.length !== 0) {
        likeImg = img.filter((el: { id: string | number; }) => mok[el.id] === 'like')
    }


    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color='#000000' />
            </View>
        )
    }

    return (
        <View style={{padding: 15}}>
            <FlatList
                data={likeImg}
                renderItem={({item}) => <AppImage item={item} nav={navigation} like={true} />}
                keyExtractor={item => item.id}
                numColumns={4}
                columnWrapperStyle={{justifyContent: 'flex-start'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black'
    }
})
