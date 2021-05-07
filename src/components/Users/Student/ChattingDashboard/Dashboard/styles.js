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
        },
        headingDivBorder: {
            height: 0.5,
            backgroundColor: 'gray',
            marginBottom: 1
        },
    }
);