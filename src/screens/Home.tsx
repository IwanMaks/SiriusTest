import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from "./RootStackPrams";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: Props) => {
    return (
        <View style={styles.center}>
            <Text style={styles.text}>Gallery</Text>
            <Button title='To Marked' onPress={() => navigation.navigate('Marked')} />
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
