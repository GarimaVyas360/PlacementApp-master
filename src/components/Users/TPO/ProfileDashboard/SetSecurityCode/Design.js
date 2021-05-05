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
import dimensions from '../../../../../res/dimensions';

const TpoProfileSetSecurityCodeDesign = ({navigation}) => {
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
                            source={images.user_dash.tpo}
                        />
                      </TouchableNativeFeedback>
                    </CardView>
                </View>
                <View style={styles.baseContainer}>
                    <View>
                        <TextInput
                            autoCompleteType="password"
                            label={strings.textInput.password}
                            mode="outlined"
                            placeholder={strings.textInput.password}
                            blurOnSubmit={true}
                            secureTextEntry={true}
                            autoCorrect={false}
                            textContentType={'password'}
                            multiline={false}
                            //value={passConf}
                            //error={isErrorPassConf}
                            onTextInput={ () => {  }}
                            onChangeText={ (text) => {  } }
                            selectionColor={dimensions.color.select_color}
                            left={ <TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                            right={ <TextInput.Icon name="eye" color={"darkblue"} disabled={false} onPress={ () => {} } />}
                        />
                        <HelperText type="error" visible={true}>Error Message</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
                    <View>
                        <TextInput
                            autoCompleteType="password"
                            label={strings.textInput.security_password}
                            mode="outlined"
                            placeholder={strings.textInput.security_password}
                            blurOnSubmit={true}
                            secureTextEntry={true}
                            autoCorrect={false}
                            textContentType={'password'}
                            multiline={false}
                            //value={passConf}
                            //error={isErrorPassConf}
                            onTextInput={ () => {  }}
                            onChangeText={ (text) => {  } }
                            selectionColor={dimensions.color.select_color}
                            left={ <TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                            right={ <TextInput.Icon name="eye" color={"darkblue"} disabled={false} onPress={ () => {} } />}
                        />
                        <HelperText type="error" visible={true}>Error Message</HelperText>
                    </View>
                    <View style={styles.spacing5}></View>
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
                            selectionColor={dimensions.color.select_color}
                            left={ <TextInput.Icon name="key-variant" color={"darkblue"} disabled={true} />}
                            right={ <TextInput.Icon name="eye" color={"darkblue"} disabled={false} onPress={ () => {} } />}
                        />
                        <HelperText type="error" visible={true}>Error Message</HelperText>
                    </View>
                    <View style={styles.spacing15}></View>
                    <View style={styles.submitButton} >
                        <Button 
                            style={styles.loginButton}
                            mode="contained"
                            onPress={ () => { navigation.goBack(); }}
                            >
                            {strings.buttons.update_password}
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
export default TpoProfileSetSecurityCodeDesign;