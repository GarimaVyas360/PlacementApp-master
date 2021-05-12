import React, { useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity, TouchableNativeFeedback, FlatList } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';

const AdminChattingDashboardDesign = ({ navigation, nav_title, groupList, logout, group_name, group_name1, group_name2, user, user_type }) => {
    useEffect(() => {
        navigation.setOptions({
            title: nav_title, //Set Header Title
            headerRight: () => (
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => { logout() }}>
                        <Icon name="logout" size={30} color="black" style={styles.logoutEdit} />
                    </TouchableOpacity>
                </View>
            ),
            headerLeft: () => { }
        });
    }, []);



    const renderItem = ({ item }) => {
        return (
            // <TouchableOpacity style={styles.item}>
            //     <Text style={styles.title}>{item.title}</Text>
            // </TouchableOpacity>
            <View style={styles.listArea} onStartShouldSetResponder={() => { navigation.navigate('AdminChattingGroupActivity', { group: item.GroupName, department: item.Department, user: user, user_type: user_type }) }}   >
                <View style={styles.listData}>
                    <View style={styles.imageDiv}>
                        <Image source={images.college.logo_square} style={styles.imageDivIcon} />

                    </View>
                    <Text style={styles.headingDivText}>{item.GroupName}</Text>
                    {/* <View style={styles.headingDiv}>
                        <View style={styles.headingDivTitle}>

                        </View> */}
                    {/* <Divider style={styles.headingDivBorder}></Divider> */}
                </View>
                {/* <Text style={styles.listDataName}>{item.GroupName}</Text> */}


            </View>

            // </View >

        );
    };


    // const renderItem = ({ item }) => {
    //     return (
    //         // <TouchableOpacity style={styles.item}>
    //         //     <Text style={styles.title}>{item.title}</Text>
    //         // </TouchableOpacity>
    //         <View style={styles.listArea}>
    //             <View style={styles.listData}>
    //                 <Text style={styles.listDataName}>{item.FirstName + " " + item.LastName}</Text>
    //                 <View style={styles.listDataEmailView}>
    //                     <Icon style={styles.activityHeadingIcon} name='email' type='MaterialIcons' color='gray' />
    //                     <Text onPress={() => { Linking.openURL('mailto:' + item.Email); }} style={styles.listDataEmail}>{item.Email}</Text>
    //                 </View>
    //                 <View style={styles.listDataContactView}>
    //                     <Icon style={styles.activityHeadingIcon} name='phone' type='MaterialIcons' color='gray' />
    //                     <Text onPress={() => { Linking.openURL('tel:' + item.Phoneno); }} style={styles.listDataContact}>{item.Phoneno}</Text>
    //                 </View>
    //             </View>
    //             <View style={styles.listAction}>
    //                 <Button
    //                     style={styles.listActionButton}
    //                     mode="contained"
    //                     labelStyle={{ fontSize: 10 }}
    //                     onPress={() => {
    //                         console.log("btn click" + item.key);
    //                         suspendStudentList(item.FirstName, item.LastName, item.Email, item.Phoneno, item.Department, item.Password, item.key);
    //                     }}
    //                 >
    //                     {strings.buttons.suspend}
    //                 </Button>
    //             </View>
    //         </View>
    //     );
    // };


    return (
        // <View style={styles.mainContainer}>
        //     <View style={styles.container}>
        //         <Divider style={{ height: 0.5, backgroundColor: 'gray', marginBottom: 1 }}></Divider>
        //         <ScrollView contentContainerStyle={styles.scrollView}>
        //             <View style={styles.division} onStartShouldSetResponder={() => { navigation.navigate('AdminChattingGroupActivity', { group: group_name1, user: user, user_type: user_type }) }}>
        //                 <View style={styles.imageDiv}>
        //                     <Image source={images.college.logo_square} style={styles.imageDivIcon} />
        //                 </View>
        //                 <View style={styles.headingDiv}>
        //                     <View style={styles.headingDivTitle}>
        //                         <Text style={styles.headingDivText}>{group_name1}</Text>
        //                     </View>
        //                     <Divider style={styles.headingDivBorder}></Divider>
        //                 </View>
        //             </View>


        //             <View style={styles.division} onStartShouldSetResponder={() => { navigation.navigate('AdminChattingGroupActivity', { group: group_name2, user: user, user_type: user_type }) }}>
        //                 <View style={styles.imageDiv}>
        //                     <Image source={images.college.logo_square} style={styles.imageDivIcon} />
        //                 </View>
        //                 <View style={styles.headingDiv}>
        //                     <View style={styles.headingDivTitle}>
        //                         <Text style={styles.headingDivText}>{group_name2}</Text>
        //                     </View>
        //                     <Divider style={styles.headingDivBorder}></Divider>
        //                 </View>
        //             </View>
        //         </ScrollView>
        //     </View>
        // </View>

        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.activityView}>

                    <View style={styles.emptyListArea} >
                        {groupList == "" || groupList == null ? <Text style={styles.emptyTextArea}>Record not found</Text> : []}
                    </View>
                    <View style={styles.listView}>
                        <FlatList
                            data={groupList}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => item.key}
                        />
                    </View>
                </View>
            </View>
        </View>


    );
}
export default AdminChattingDashboardDesign;