import React, {useEffect} from "react";
import {View, Text, StyleSheet, Button, Image, ActivityIndicator, FlatList} from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from "./RootStackPrams";
import {useDispatch, useSelector} from "react-redux";
import {fetchImg, fetchLikeDel} from "../store/actions/imgs";
import {AppImage} from "../components/AppImage";
import {useAppSelector} from "../../hooks";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: Props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchImg())
        dispatch(fetchLikeDel())
    }, [dispatch])

    const mok = {
        '3464632': 'like',
        '3509971': 'like',
        '1098365': 'like',
        '924824': 'del',
        '2770933': 'del',
        '4319752': 'del'
    }

    const allImg = useAppSelector(state => state.imgs.url)
    const loading = useAppSelector(state => state.imgs.loading)
    const likeDel = useAppSelector(state => state.imgs.likeDel) || {}
    let img;

    if (allImg && allImg.length !== 0) {
        img = allImg.filter((el: { id: string | number; }) => mok[el.id] !== 'del')
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
                data={img}
                renderItem={({item}) => <AppImage item={item} nav={navigation} like={mok[item.id] === 'like'} />}
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
    },
    img: {
        width: 66,
        height: 58,
    },
    listImg: {
        flexDirection: "row",
        flexWrap: 'wrap'
    }
})
