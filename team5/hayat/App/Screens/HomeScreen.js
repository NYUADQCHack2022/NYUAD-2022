
import { Actionsheet, Icon, Input, NativeBaseProvider } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDimensions } from '@react-native-community/hooks'
import colors from '../Assets/colors';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { width, height } = useDimensions().window

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);


  useEffect(() => {

    // BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
    // return () => {
    //   BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
    // };
  }, [])


  return (
    <ScrollView style={{ backgroundColor: colors.primary }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ paddingTop: 74 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

          <KeyboardAvoidingView style={{ backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', width: '90%', borderRadius: 25, marginTop: 40 }}>
            {/* <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.black, marginTop: 33, textAlign: 'center' }}>
    Match It</Text> */}
            <View style={{ marginTop: 15 }}>
              <Image
                source={require('../Assets/logo.png')}
                style={{ width: width * 0.8, height: 100, backgroundColor: colors.white }}
                resizeMode={'contain'}
              />
            </View>
            <View style={{ paddingTop: 15 }}>
              <Input
                variant="rounded"
                w={{
                  base: "70%",
                  md: "25%"
                }}
                h="50"

                InputLeftElement={
                  <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
                }
                placeholder="ID"
              />
            </View>
            <View style={{ paddingTop: 37 }}>

              <Input
                variant="rounded"
                type={show ? "text" : "password"}
                w={{
                  base: "70%",
                  md: "25%"
                }}
                h="50"
                InputLeftElement={
                  <Icon as={<FontAwesome5 name="key" />} size={4} ml="2" color="muted.400" />
                }
                InputRightElement={
                  <Icon onPress={() => handleClick()} as={<MaterialIcons name="visibility-off" />} size={5} mr="2" color="muted.400" />
                }
                placeholder="Password"
              />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("ResultScreen")}
              style={{ paddingVertical: 14, backgroundColor: colors.primaryButton, width: "50%", borderRadius: 35, justifyContent: 'center', alignItems: 'center', marginVertical: 50 }}>
              <Text style={{ fontSize: 20, color: colors.white }}>
                Assign
              </Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>

        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: colors.white, paddingVertical: 20 }}>
            Need help? contact us
          </Text>

        </View>

      </View>

    </ScrollView>
  );
};



export default HomeScreen;
