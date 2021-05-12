import { StyleSheet } from "react-native";
import dimensions from '../../../../../res/dimensions';
export const styles = StyleSheet.create(
    {
        scrollView: {
            flexGrow: 1,
        },
        mainContainer: {
            backgroundColor: 'white',
            flex: 1,
        },
        container: {
            flex: 1,
        },
        division: {
            height: 80,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        imageDiv: {
            width: 65,
            height: 65,
            backgroundColor: 'white',
            borderRadius: 100,
        },
        imageDivIcon: {
            width: 65,
            height: 65,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 100,
        },
        headingDiv: {
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
        },
        headingDivTitle: {
            height: '100%',
            padding: 5,
        },
        headingDivText: {
            fontWeight: 'bold',
            padding: 15

        },
        headingDivBorder: {
            height: 0.5,
            backgroundColor: 'gray',
            marginBottom: 1
        },
        headerView: {
            flexDirection: 'row',
            padding: 5,
        },
        logoutEdit: {
            padding: 5,
            color: dimensions.color.lightblack,
        },
        activityView: {
            flex: 1,
        },
        listView: {
            flex: 1,
            padding: 10,
            backgroundColor: '#f3f3f3',
        },
        listArea: {
            width: '98%',
            margin: 2,
            marginBottom: 15,
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 5,
            shadowColor: 'black',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 5,
            elevation: 5,
            borderWidth: 1,
            borderColor: '#ddd',
            alignSelf: 'center',
            flexDirection: 'row',
        },
        listData: {
            width: '70%',
            padding: 5,
            flexDirection: 'row'
        },
        listAction: {
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        listActionButton: {
            backgroundColor: 'darkred'
        },
        listDataName: {
            fontSize: dimensions.font_size.medium,
            color: 'black',
            fontWeight: 'bold',
        },
        listDataEmailView: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        listDataEmail: {
            marginLeft: 10,
            fontSize: dimensions.font_size.normal,
            color: 'gray',
            fontWeight: 'bold',
        },
        listDataContactView: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        listDataContact: {
            marginLeft: 10,
            fontSize: dimensions.font_size.small,
            color: 'navy',
            fontWeight: 'bold',
        },
        emptyListArea: {
            backgroundColor: '#f3f3f3'
        },
        emptyTextArea: {
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20,
            marginTop: "50%"
        }

    }
);