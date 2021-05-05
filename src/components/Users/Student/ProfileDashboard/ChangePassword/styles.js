import { StyleSheet } from "react-native";
import dimensions from '../../../../../res/dimensions';
export const styles = StyleSheet.create( 
    {  
        mainContainer: {
            flex: 1,
            // backgroundColor: '#F5FCFF',
            backgroundColor: 'white',
        },
        container:{
            flex:1,
        },
        header:{
            height:250,
            // backgroundColor:'#0c1b32',
            backgroundColor:'#0c1b32',
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        headingDivider:{
            backgroundColor:'gray',
            height:1,
        },
        cardViewStyle:{
            width:156, 
            height:156, 
            justifyContent:'center',
            alignItems:'center'
        },
        tinyLogo: {
            width: 155,
            height: 155,
            borderRadius:100,
        },
        tinyImageLogo:{
            width: 155,
            height: 155,
            borderRadius: 100,
            backgroundColor:'black',
            borderColor:'white',
            borderWidth:1,
        },
        updateView:{
            position:'absolute',
            top:15,
            right:15,
          },
        imageEdit:{
            
        },
        logoutEditView:{
            position:'absolute',
            top:15,
            right:15,
        },
        mpinView:{
            // position:'absolute',
            // right:15,
            paddingTop:5,
            bottom:35,
            justifyContent:'center',
            alignSelf:'center',
        },
        mpinEdit:{
            color: dimensions.color.lightblack,
            fontWeight:'bold',
        },
        textEditViewStyle:{
            position:'absolute',
            top:15,
            right:15,
            padding:5,
            backgroundColor:'white',
            borderWidth:2,
            borderColor:'lightgray',
            borderRadius:25,
        },
        textEditView:{
            
        },
        textEdit:{
            color:'black'
        },
        baseContainer:{
            flex:1,
            padding:25,
        },        
        submitButton:{
            marginTop:20,
            marginBottom:10,
            alignSelf:'center',
        },
        loginButton:{
           
        },
        pickerView:{
            borderColor:'darkgray',
            borderWidth:1.3,
            borderRadius:4,
            backgroundColor:'#f6f6f6',
        },
        spacing5:{
            marginBottom:5,
        },
        spacing15:{
            marginBottom:15,
        },
        textInputFieldRadio:{
            marginBottom:5,
            flexDirection:'row',
        },
        textInputFieldRadioButtonView:{
            marginBottom:5,
            flexDirection:'row',
            marginRight:25,
            alignItems:'center',
        },
        setCodeView:{
            height:70,
            alignItems:'center',
        },
        setCodeCardView:{
            padding:5,
            paddingLeft:10,
            paddingRight:10,
        },
        setCodeText:{
            fontWeight:'bold',
            color: dimensions.color.lightblack,
        },
    }
);