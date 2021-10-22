import React, {useEffect} from "react";
import {View, StyleSheet, ActivityIndicator, FlatList, Text} from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from "./RootStackPrams";
import {useDispatch} from "react-redux";
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

    //моковые данные для проверки отображения
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
    // const mok = useAppSelector(state => state.imgs.likeDel)
    console.log(mok)
    let img;

    if (allImg && allImg.length !== 0 && mok !== {} && mok !== null && mok !== undefined) {
        img = allImg.filter((el: { id: string | number; }) => mok[el.id + ''] !== 'del')
    }


    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color='#000' />
            </View>
        )
    }

    return (
        <View style={{padding: 15}}>
            {/*FlatList используется для оптимизации, так как количество картинок может быть достаточно большим*/}
            <FlatList
                data={img}
                renderItem={({item}) => <AppImage item={item} nav={navigation} like={mok[item.id] === 'like'} />}
                keyExtractor={item => item.id}
                numColumns={4}
                columnWrapperStyle={{justifyContent: 'flex-start'}}
                ListEmptyComponent={() => (
                    <View style={styles.center}>
                        <Text style={styles.text}>Что-то пошло не так =(</Text>
                    </View>
                )}
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
        color: 'black',
        fontSize: 20
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
