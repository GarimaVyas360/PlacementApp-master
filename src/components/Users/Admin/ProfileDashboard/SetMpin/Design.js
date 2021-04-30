import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, ToastAndroid, BackHandler, Alert,
       Image, TouchableOpacity, PermissionsAndroid, Animated, Easing, Dimensions, TouchableNativeFeedback} from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider, RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import OTPTextView from "react-native-otp-textinput";
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';

const AdminProfileSetMpinDesign = ({navigation,nav_title}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: strings.onBoarding.set_mpin, //Set Header Title
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
                            autoCompleteType="password"
                            label={strings.textInput.confirm_password}
                            mode="outlined"
                            placeholder={strings.textInput.confirm_password}
                            blurOnSubmit={true}
                            secureTextEntry={true}
                            autoCorrect={false}
                            textContentType={'password'}
                            multiline={false}
                            //value={passConf}
                            //error={isErrorPassConf}
                            onTextInput={ () => {  }}
                            onChangeText={ (text) => {  } }
                            left={ <TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                            right={ <TextInput.Icon name="eye" color={"darkblue"} disabled={false} onPress={ () => {} } />}
                        />
                        <HelperText type="error" visible={true}>Error Message</HelperText>
                    </View>
                    <View style={styles.spacing15}></View>
                    <View>
                        <OTPTextView
                            containerStyle={styles.textInputContainer}
                            handleTextChange={(text) => {} }
                            inputCount={4}
                            keyboardType="numeric"
                            placeholder="*"
                        />
                    </View>
                    <View style={styles.spacing15}></View>
                    <View style={styles.submitButton} >
                        <Button 
                            style={styles.loginButton}
                            mode="contained"
                            onPress={ () => { navigation.goBack(); }}
                            >
                            {strings.buttons.set_mpin}
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
export default AdminProfileSetMpinDesign;