import React, {useState} from 'react';
import {View,Image, ScrollView, TouchableOpacity, FlatList, Linking} from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';

const TpoStudentListDesign = ({navigation,data}) => {
    const renderItem = ({ item }) => {
        return (
            // <TouchableOpacity style={styles.item}>
            //     <Text style={styles.title}>{item.title}</Text>
            // </TouchableOpacity>
            <View style={styles.listArea}>
                <View style={styles.listData}>
                    <Text style={styles.listDataName}>{item.name}</Text>
                    <View style={styles.listDataEmailView}>
                        <Icon style={styles.activityHeadingIcon} name='email' type='MaterialIcons' color='gray' />
                        <Text onPress={ () => {Linking.openURL('mailto:'+item.email); }} style={styles.listDataEmail}>{item.email}</Text>
                    </View>
                    <View style={styles.listDataContactView}>
                        <Icon style={styles.activityHeadingIcon} name='phone' type='MaterialIcons' color='gray' />
                        <Text onPress={ () => {Linking.openURL('tel:'+item.contact); }} style={styles.listDataContact}>{item.contact}</Text>
                    </View>
                </View>
                <View style={styles.listAction}>
                    <Button
                        style={styles.listActionButton}
                        mode="contained"
                        labelStyle={{fontSize: 12}}
                        onPress={ () => { }}
                        >
                        {strings.buttons.suspend}
                    </Button>
                </View>
            </View>
        );
    };
    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}> 
                <View style={styles.activityView}>
                    <View style={styles.spacing15}>
                        <Picker
                            style={{}}
                            // selectedValue={}
                            onValueChange={(itemValue, itemIndex) => {} }>
                            <Picker.Item label="All Department/Branch" value="" />
                            <Picker.Item label="Ankush" value="" />
                            <Picker.Item label="Shefali" value="" />
                            <Picker.Item label="Garima" value="" />
                        </Picker>
                        <Divider style={{height:1,backgroundColor:'lightgray',}}></Divider>
                    </View>
                    <View style={styles.listView}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
    
}
export default TpoStudentListDesign;