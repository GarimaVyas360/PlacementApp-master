import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, ToastAndroid, BackHandler, Alert,
       Image, TouchableOpacity, PermissionsAndroid, Animated, Easing, Dimensions, TouchableNativeFeedback} from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider, RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';

const AdminProfileEditDesign = ({navigation,nav_title}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.edit_profile, //Set Header Title
        });
    }, [navigation]);
    return(
        <View style={styles.mainContainer}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    {/* <TouchableOpacity style={styles.updateView}>
                      <Icon name="check" size={30} color="#fff" style={styles.imageEdit} 
                          onPress={ () => {alert("Update Profile") } }/>
                    </TouchableOpacity> */}
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
                            source={images.user_dash.admin}
                        />
                      </TouchableNativeFeedback>
                    </CardView>
                </View>
                <View style={styles.baseContainer}>
                    <View>
                        <TextInput
                            autoCompleteType="name"
                            label={strings.textInput.first_name}
                            mode="outlined"
                            placeholder={strings.textInput.first_name}
                            blurOnSubmit={true}
                            autoCapitalize='words'
                            // autoFocus
                            error={false}
                            //value={firstName}
                            onChangeText={ (text) => {} }
                            left={ <TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={true}>Error Message</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
                    <View>
                        <TextInput
                            autoCompleteType="name"
                            label={strings.textInput.last_name}
                            mode="outlined"
                            placeholder={strings.textInput.last_name}
                            blurOnSubmit={true}
                            autoCapitalize='words'
                            // autoFocus
                            error={false}
                            //value={firstName}
                            onChangeText={ (text) => {} }
                            left={ <TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={true}>Error Message</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
                    <View style={styles.textInputFieldRadio}>
                        <View style={styles.textInputFieldRadioButtonView}>
                            <RadioButton style={styles.textInputFieldRadioButton}
                                value="first"
                                //status={ gender === 'Male' ? 'checked' : 'unchecked' }
                                color="black"
                                uncheckedColor="gray"
                                onPress={() => {}}
                                // setGender('Male')
                            />
                            <Text style={styles.textInputFieldRadioButtonText}>Male</Text>
                        </View>
                        <View style={styles.textInputFieldRadioButtonView}>
                            <RadioButton style={styles.textInputFieldRadioButton}
                                value="second"
                                //status={ gender === 'Female' ? 'checked' : 'unchecked' }
                                status={'checked'}
                                color="black"
                                uncheckedColor="gray"
                                onPress={() => {}}
                                // setGender('Female')
                            />
                            <Text style={styles.textInputFieldRadioButtonText}>Female</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            autoCompleteType="email"
                            label={strings.textInput.email}
                            mode="outlined"
                            placeholder={strings.textInput.email}
                            blurOnSubmit={true}
                            autoCapitalize='none'
                            keyboardType="email-address"
                            // autoFocus
                            error={false}
                            //value={email}
                            onChangeText={ (text) => {} }
                            left={ <TextInput.Icon name="email" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={true}>Error</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
                    <View>
                        <TextInput
                            autoCompleteType="tel"
                            label={strings.textInput.contact}
                            mode="outlined"
                            placeholder={strings.textInput.contact}
                            blurOnSubmit={true}
                            autoCapitalize='none'
                            keyboardType="phone-pad"
                            // autoFocus
                            error={false}
                            //value={email}
                            onChangeText={ (text) => {} }
                            // text.replace(/[^0-9]/g, '')
                            left={ <TextInput.Icon name="phone" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={true}>Error</HelperText>
                    </View>
                    <View style={styles.spacing15}></View>
                    <View>
                        <View style={styles.pickerView}>
                            <Picker
                                style={{}}
                                // selectedValue={}
                                onValueChange={(itemValue, itemIndex) => {} }>
                                <Picker.Item label="--- Select Branch ---" value="" />
                                <Picker.Item label="Ankush" value="" />
                                <Picker.Item label="Shefali" value="" />
                                <Picker.Item label="Garima" value="" />
                            </Picker>
                        </View>
                        <HelperText type="error" visible={true}>Error</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
                    <View>
                        <TextInput
                            autoCompleteType="username"
                            label={strings.textInput.enrollment}
                            mode="outlined"
                            placeholder={strings.textInput.enrollment}
                            blurOnSubmit={true}
                            autoCapitalize='characters'
                            // autoFocus
                            error={false}
                            //value={firstName}
                            onChangeText={ (text) => {} }
                            left={ <TextInput.Icon name="account" color={"darkblue"} disabled={true} />}
                        />
                        <HelperText type="error" visible={true}>Error Message</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
                    <View style={styles.submitButton} >
                        <Button 
                            style={styles.loginButton}
                            mode="contained"
                            onPress={ () => { navigation.goBack(); }}
                            >
                            {strings.buttons.update_profile}
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
export default AdminProfileEditDesign;