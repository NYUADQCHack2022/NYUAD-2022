
import { Actionsheet, FlatList, Icon, Input, NativeBaseProvider } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
    Image,

} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { useDimensions } from '@react-native-community/hooks'
import colors from '../Assets/colors';


const ResultScreen = ({ route, navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { width, height } = useDimensions().window
    const arr = [
        {
            "name": 'Mohammad Muhsen',
            "pID": '696',
            "kID": 'Kidney 983',
            "p": 'Priority 1',
            "d": 'Distance 157Km'
        }, {
            "name": 'Maryam Almetnawy',
            "pID": '54',
            "kID": 'Kidney 54',
            "p": 'Priority 2',
            "d": 'Distance 127Km'
        }, {
            "name": 'Min wu Kim',
            "pID": '111',
            "kID": 'Kidney 123',
            "p": 'Priority 1',
            "d": 'Distance 10Km'
        }
    ]
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({})
    const handleOpenModal = (item) => {
        setModalData(item)
        setModal(true)

    }
    useEffect(() => {


    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            <View style={{ backgroundColor: colors.red, borderTopRightRadius: 15, borderTopLeftRadius: 15, flex: 1, marginTop: 5 }}>

                <FlatList
                    data={arr}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, }}>
                                <View>
                                    <Text style={{ color: colors.black, fontSize: 20, fontWeight: 'bold' }}>
                                        {item.name}
                                    </Text>

                                    <Text style={{ color: colors.green, fontSize: 14 }}>
                                        Assigned Kidney  {item.kID}

                                    </Text>

                                </View>
                                <Icon onPress={() => handleOpenModal(item)} as={<FontAwesome5 name="exclamation-circle" />} size={8} mr="2" color={colors.primary} />


                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => item.sku + ' ' + index}
                    style={{ flex: 1, backgroundColor: colors.white, borderTopRightRadius: 15, borderTopLeftRadius: 15, }}
                    numColumns={1}
                    key={1}
                    ItemSeparatorComponent={() => { return (<View style={{ borderBottomColor: colors.lightGrey, borderBottomWidth: 1 }} />) }}
                // refreshing={lazyLoading}
                // onEndReached={() => lazyLoad()}
                // onEndReachedThreshold={0.01}
                // ListFooterComponent={() => renderFooter(lazyLoading)}
                />


                <Actionsheet isOpen={modal} onClose={() => setModal(false)} >
                    <Actionsheet.Content>
                        <View style={{ padding: 20, width: width * 0.9, height: height * .3 }}>
                            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                                <Text style={{ color: colors.black, fontSize: 23, fontWeight: 'bold' }}>
                                    {modalData.name}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                                <View>
                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <Image
                                            source={require('../Assets/kidney.png')}
                                            resizeMode={'contain'}
                                        />
                                        <Text style={{ fontSize: 15, color: colors.black, paddingVertical: 10, paddingHorizontal: 10 }}>
                                            {modalData.kID}

                                        </Text>
                                    </View>

                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                                        <Icon as={<FontAwesome5 name="map-marker-alt" />} size={5} mr="2" color={colors.primaryButton} />

                                        <Text style={{ fontSize: 15, color: colors.black, paddingVertical: 10, paddingHorizontal: 5 }}>
                                            {modalData.d}

                                        </Text>
                                    </View>

                                </View>

                                <View>

                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                                        <Icon as={<FontAwesome5 name="key" />} size={5} mr="2" color={colors.primaryButton} />

                                        <Text style={{ fontSize: 15, color: colors.black, paddingVertical: 10, paddingHorizontal: 5 }}>

                                            {modalData.pID}

                                        </Text>
                                    </View>
                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                                        <Icon as={<FontAwesome5 name="exclamation-triangle" />} size={5} mr="2" color={colors.primaryButton} />

                                        <Text style={{ fontSize: 15, color: colors.black, paddingVertical: 10, paddingHorizontal: 5 }}>
                                            {modalData.p}
                                        </Text>
                                    </View>

                                </View>

                            </View>
                        </View>


                    </Actionsheet.Content>
                </Actionsheet>

            </View>

        </View>
    );
};



export default ResultScreen;
