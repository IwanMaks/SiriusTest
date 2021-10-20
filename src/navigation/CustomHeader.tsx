import React from "react";
import {ScrollView, StyleSheet, View, Text, Platform} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import {Header, HeaderBackButton} from "@react-navigation/elements";
import {useNavigation} from "@react-navigation/native";

type HeaderProps = {
    title?: string
}

export const CustomHeader = ({title = 'Введите title'}: HeaderProps) => {
    const nav = useNavigation()
    return (
        <View style={styles.headerWrap}>
            <LinearGradient
                colors={['#790598', '#BC1399']}
                style={styles.gradientWrap}
            >
                {
                    nav.canGoBack() &&
                    <HeaderBackButton onPress={() => nav.canGoBack() && nav.goBack()} tintColor='#fff' style={{position: 'absolute', left: 15}} />
                }

                <Header title={title} headerTransparent={true} headerTitleStyle={styles.textStyle}/>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrap: {
        backgroundColor: '#fff'
    },
    gradientWrap: {
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row'
    },
    textStyle: {
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 30,
        color: '#fff'
    }
})
