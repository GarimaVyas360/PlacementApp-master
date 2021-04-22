import React, { useEffect } from 'react';
import {View,Image, ScrollView, TouchableOpacity} from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';

const AdminDashboardDesign = ({navigation,nav_title}) => {
    useEffect(() => {
        navigation.setOptions({
            title: nav_title, //Set Header Title
            headerRight: () => (
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={ () => {alert("Logout") }}>
                        <Icon name="logout" size={30} color="black" style={styles.logoutEdit} />
                    </TouchableOpacity>
                </View>
            ),
        });
    },[]);
    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.activityView}>
                        <View style={styles.activityHeadingView}>
                            <Text style={styles.activityHeadingText}>{strings.onBoarding.add_new_activity}</Text>
                            <Icon style={styles.activityHeadingIcon} name='arrow-down-drop-circle-outline' type='MaterialIcons' color='#517fa4' />
                        </View>
                        <ScrollView contentContainerStyle={styles.activityListView} horizontal={true}>
                            <View style={styles.newActivityCardView}
                                onTouchEnd={ () => navigation.navigate('AddDepartmentActivity') }>
                                <Image source={images.user_dash.department}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.add_department}</Text>
                            </View>
                            <View style={styles.newActivityCardView}
                                onTouchEnd={ () => navigation.navigate('AddTpoActivity') }>
                                <Image source={images.user_dash.tpo}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.add_tpo}</Text>
                            </View>
                            <View style={styles.newActivityCardView}
                                onTouchEnd={ () => navigation.navigate('AddStudentActivity') }>
                                <Image source={images.user_dash.student}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.add_student}</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <Divider style={{height:2,backgroundColor:'lightgray'}}></Divider>
                    <View style={styles.activityView}>
                        <View style={styles.activityHeadingView}>
                            <Text style={styles.activityHeadingText}>{strings.onBoarding.activity}</Text>
                            <Icon style={styles.activityHeadingIcon} name='arrow-down-drop-circle-outline' type='MaterialIcons' color='#517fa4' />
                        </View>
                        <ScrollView contentContainerStyle={styles.activityListView} horizontal={true}>
                            <View style={styles.activityCardView}
                                onTouchEnd={ () => navigation.navigate('TpoListActivity') }>
                                <Image source={images.user_dash.tpo}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.tpo_staff}</Text>
                            </View>
                            <View style={styles.activityCardView}
                                onTouchEnd={ () => navigation.navigate('StudentListActivity') }>
                                <Image source={images.user_dash.student}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.students}</Text>
                            </View>
                            <View style={styles.activityCardView}
                                onTouchEnd={ () => navigation.navigate('SuspendTpoListActivity') }>
                                <Image source={images.user_dash.tpo}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.suspend_tpo_staff}</Text>
                            </View>
                            <View style={styles.activityCardView}
                                onTouchEnd={ () => navigation.navigate('SuspendStudentListActivity') }>
                                <Image source={images.user_dash.student}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.suspend_campus_student}</Text>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
export default AdminDashboardDesign;