import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./RootStackPrams";

type Props = NativeStackScreenProps<RootStackParamList, 'Marked'>;

export const Marked = ({navigation}: Props) => {
    return (
        <View style={styles.center}>
            <Text style={styles.text}>Marked</Text>
            <Button title='Go Home' onPress={() => navigation.navigate('Home')} />
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
