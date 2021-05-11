import React, { useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';

const AdminDashboardDesign = ({ navigation, department }) => {
    return (
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
                                onTouchEnd={() => navigation.navigate('TpoAddStudentActivity')}>
                                <Image source={images.user_dash.student}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.add_student}</Text>
                            </View>

                            <View style={styles.newActivityCardView}
                                onTouchEnd={() => navigation.navigate('TpoAddGroupsActivity', { department: department })}>
                                <Image source={images.user_dash.student}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.add_group}</Text>
                            </View>

                        </ScrollView>
                    </View>
                    <Divider style={{ height: 2, backgroundColor: 'lightgray' }}></Divider>
                    <View style={styles.activityView}>
                        <View style={styles.activityHeadingView}>
                            <Text style={styles.activityHeadingText}>{strings.onBoarding.activity}</Text>
                            <Icon style={styles.activityHeadingIcon} name='arrow-down-drop-circle-outline' type='MaterialIcons' color='#517fa4' />
                        </View>
                        <ScrollView contentContainerStyle={styles.activityListView} horizontal={true}>
                            <View style={styles.activityCardView}
                                onTouchEnd={() => navigation.navigate('TpoStudentListActivity')}>
                                <Image source={images.user_dash.student}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.students}</Text>
                            </View>
                            <View style={styles.activityCardView}
                                onTouchEnd={() => navigation.navigate('StudentApprovalList')}>
                                <Image source={images.user_dash.student}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.student_approvallist}</Text>
                            </View>
                            <View style={styles.activityCardView}
                                onTouchEnd={() => navigation.navigate('SuspendTpoListActivity')}>
                                <Image source={images.user_dash.tpo}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.suspend_tpo_staff}</Text>
                            </View>
                            <View style={styles.activityCardView}
                                onTouchEnd={() => navigation.navigate('SuspendStudentListActivity')}>
                                <Image source={images.user_dash.student}
                                    style={styles.activityCardImage} />
                                <Text style={styles.activityCardText}>{strings.onBoarding.suspend_campus_student}</Text>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View >
    );
}
export default AdminDashboardDesign;