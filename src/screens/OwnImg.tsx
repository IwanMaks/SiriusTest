import React from "react";
import {StyleSheet, View, Text, Button, Image, Dimensions, TouchableOpacity} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from "./RootStackPrams";
import {Heart} from "../svg/Heart";
import {Trash} from "../svg/Trash";

type Props = NativeStackScreenProps<RootStackParamList, 'Own'>;

export const OwnImg = ({navigation, route}: Props) => {
    const {url, like}:any = route.params

    return (
        <View style={styles.center}>
            <Image source={{
                uri: url
            }} style={styles.img}/>
            <View style={styles.buttonWrap}>
                <TouchableOpacity style={styles.topButton} activeOpacity={0.7}>
                    <View style={styles.textWrap}>
                        <Heart filled={like} mini={false} />
                        <Text style={styles.textButton}>{like ? 'Убрать из избранного' : 'Добавить в избранное'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} activeOpacity={0.7}>
                    <View style={styles.textWrap}>
                        <Trash />
                        <Text style={styles.textButton}>Удалить изображение</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222222'
    },
    text: {
        color: 'black'
    },
    img: {
        width: Dimensions.get('window').width,
        height: 1000,
        resizeMode: 'contain'
    },
    buttonWrap: {
        position: "absolute",
        bottom: 15,
        paddingHorizontal: 15
    },
    topButton: {
        width: Dimensions.get('window').width - 30,
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        paddingTop: 14,
        paddingBottom: 7,
        borderWidth: 1,
        borderColor: '#C4C4C4'
    },
    bottomButton: {
        width: Dimensions.get('window').width - 30,
        backgroundColor: 'white',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        paddingTop: 7,
        paddingBottom: 14
    },
    textButton: {
        color: '#000',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 22,
        marginLeft: 8
    },
    textWrap: {
        flexDirection: 'row',
        alignItems: "center"
    }
})
