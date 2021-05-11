import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, ScrollView, ToastAndroid, BackHandler, Alert,
    Image, TouchableOpacity, PermissionsAndroid, Animated, Easing, Dimensions, TouchableNativeFeedback
} from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';

const TpoProfileDashboardDesign = ({ navigation, FirstName, LastName, Department, Email, Password, Token }) => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.imageEditView} onPress={() => { }}>
                        <Icon name="image-edit" size={30} color="#fff" style={styles.imageEdit} />
                    </TouchableOpacity>
                    <CardView
                        cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={100}
                        style={styles.cardViewStyle}
                    >
                        <TouchableNativeFeedback
                            style={styles.tinyLogo}>
                            <Image
                                style={styles.tinyImageLogo}
                                source={images.user_dash.tpo}
                            />
                        </TouchableNativeFeedback>
                    </CardView>
                </View>
                <View style={styles.baseContainer}>
                    <TouchableOpacity style={styles.textEditViewStyle}
                        onPress={() => { navigation.navigate('TpoProfileEditActivity', { Token: Token }), console.log("Token Key: " + Token); }}>
                        <Icon name="account-edit" size={30} color="black" style={styles.textEdit} />
                    </TouchableOpacity>
                    <View style={styles.baseContainerView}>
                        <Text style={styles.detailHeading}>Name</Text>
                        <Text style={styles.detailText}>{FirstName}&nbsp;{LastName}</Text>
                    </View>
                    {/* <Divider style={styles.headingDividerBase}></Divider>
                    <View style={styles.baseContainerView}>
                          <Text style={styles.detailHeading}>Mobile </Text>
                          <Text style={styles.detailText}>{Password}</Text>
                    </View> */}
                    <Divider style={styles.headingDividerBase}></Divider>
                    <View style={styles.baseContainerView}>
                        <Text style={styles.detailHeading}>Department</Text>
                        <Text style={styles.detailText}>{Department}</Text>
                    </View>
                    <Divider style={styles.headingDividerBase}></Divider>
                    <View style={styles.baseContainerView}>
                        <Text style={styles.detailHeading}>Email</Text>
                        <Text style={styles.detailText}>{Email}</Text>
                    </View>
                    <Divider style={styles.headingDividerBaseBottom}></Divider>
                </View>
                <View style={styles.footerView}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('TpoProfileChangePasswordActivity', { oldPassword: Password, keyid: Token }) }}>
                        <Button>{strings.buttons.change_password}</Button>
                        <Divider style={styles.headingDividerBase}></Divider>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.mpinView}
                    onPress={() => { navigation.navigate('TpoProfileSetMpinActivity') }}>
                    {/* <Icon name="delete" size={30} color='#Ba020a' style={styles.deleteEdit} /> */}
                    <Text style={styles.mpinEdit}>{strings.buttons.set_mpin}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
export default TpoProfileDashboardDesign;