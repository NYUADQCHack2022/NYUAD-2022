
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
            "name": 'Mohammad Khaled',
            "pID": '5861',
            "kID": 'Kidney 468',
            "p": 'Priority 3',
            "d": 'Distance 12Km'
        }, {
            "name": 'Pari Sharma',
            "pID": '9773',
            "kID": 'Kidney 381',
            "p": 'Priority 3',
            "d": 'Distance 1293Km'
        }, {
            "name": 'Sarah Ahmad',
            "pID": '7808',
            "kID": 'Kidney 210',
            "p": 'Priority 5',
            "d": 'Distance 1200Km'
        }, {
            "name": 'Angel Priya',
            "pID": '8956',
            "kID": 'Kidney 450',
            "p": 'Priority 1',
            "d": 'Distance 150Km'
        }, {
            "name": 'Peter L',
            "pID": '555',
            "kID": 'Kidney 121',
            "p": 'Priority 1',
            "d": 'Distance 52Km'
        }, {
            "name": 'Meg Q',
            "pID": '556',
            "kID": 'Kidney 122',
            "p": 'Priority 1',
            "d": 'Distance 554Km'
        }, {
            "name": 'Mahmoud Ahmad',
            "pID": '557',
            "kID": 'Kidney 185',
            "p": 'Priority 1',
            "d": 'Distance 55Km'
        }, {
            "name": 'John R',
            "pID": '558',
            "kID": 'Kidney 956',
            "p": 'Priority 1',
            "d": 'Distance 6Km'
        }, {
            "name": 'Harry Potter',
            "pID": '112',
            "kID": 'Kidney 654',
            "p": 'Priority 1',
            "d": 'Distance 15Km'
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

    // const getData = async () => {
    //     let uri = ''
    //     let response = await fetch(uri,
    //       {
    //         method: 'GET',
    //         // headers: {
    //         //   Accept: 'application/json',
    //         //   'Content-Type': 'application/json',
    //         //   'Authorization': 'Bearer '
    //         // },
    //       }
    //     )
    //     let result = await response.json();
    //     arr = result
    //   }




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
                                        Assigned {item.kID}

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
