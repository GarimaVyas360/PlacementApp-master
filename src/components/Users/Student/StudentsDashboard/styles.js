import { StyleSheet } from "react-native";
import dimensions from '../../../../res/dimensions';
export const styles = StyleSheet.create(
    {
        safeArea: {
            flex: 1,
        },
        container: {
            flex: 1,
        },
        view: {
            flex: 1,
        },
        header: {
            flexDirection: 'row',
            margin: 5,
        },
        urlView: {
            padding: 0,
            flex: 1,
            alignItems: 'stretch',
        },
        searchView: {
            padding: 5,
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'center',
            right: 0,
        },
        searchText: {
            fontWeight: 'bold'
        },
        urlText: {
            paddingLeft: 10,
            borderRadius: 1,
            borderColor: 'black',
            // width:310,
        },
        activityIndicatorStyle: {
            flex: 1,
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
        },
    }
);