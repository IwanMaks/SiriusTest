import React from "react";
import { StyleSheet, View, Platform} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import {Header, HeaderBackButton} from "@react-navigation/elements";
import {useNavigation, useRoute} from "@react-navigation/native";

type HeaderProps = {
    title?: string
}

export const CustomHeader = ({title = 'Введите title'}: HeaderProps) => {
    const nav = useNavigation()
    const route:any = useRoute() //без any ts ругается на title

    return (
        <View style={route.name === 'Own' ? styles.headerWrapBlack : styles.headerWrapWhite}>
            <LinearGradient
                colors={['#790598', '#BC1399']}
                style={styles.gradientWrap}
            >
                {
                    nav.canGoBack() &&
                    <HeaderBackButton onPress={() => nav.canGoBack() && nav.goBack()} tintColor='#fff' style={{position: 'absolute', left: 15}} />
                }

                <Header title={route.name === 'Own' ? route.params?.title  : title} headerTransparent={true} headerTitleStyle={styles.textStyle}/>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapWhite: {
        backgroundColor: '#fff'
    },
    headerWrapBlack: {
        backgroundColor: '#222'
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
