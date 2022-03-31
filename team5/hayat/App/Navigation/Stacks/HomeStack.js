import React, { useContext, useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreen';
import { Dimensions, Image } from 'react-native';
import { Icon, Text, View } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDimensions } from '@react-native-community/hooks'
import colors from '../../Assets/colors';
import ResultScreen from '../../Screens/ResultScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation, route }) => {

    const { width, height } = useDimensions().window

    return (
        <HomeStack.Navigator screenOptions={{
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
                headerShown: false,
                header: () => {
                    return (
                        <View style={{ paddingHorizontal: 5, alignItems: 'flex-start', paddingVertical: 5, backgroundColor: colors.white }}>
                            <Image
                                source={require('../../Assets/logo.png')}
                                style={{ width: width * 0.45, height: 70, backgroundColor: colors.white }}
                                resizeMode={'contain'}
                            />
                        </View>
                    )
                }
            })} />



            <HomeStack.Screen name="ResultScreen" component={ResultScreen} options={({ route, navigation }) => ({
                headerShown: true,
                title: "Results",
                headerStyle: {
                    backgroundColor: colors.primary,
                    paddingVertical: 20
                },
                headerTitleStyle: {
                    color: colors.white,
                    fontSize: 25,

                },
                headerLeft: () => {
                    return (
                        <TouchableOpacity
                        onPress={()=>navigation.pop()}
                        style={{ paddingHorizontal: 10 }}>
                            <Icon as={<FontAwesome5 name="arrow-left" />} size={5} mr="2" color={colors.white} />

                        </TouchableOpacity>
                    )
                }

            })} />


        </HomeStack.Navigator>

    )
};
export default HomeStackScreen