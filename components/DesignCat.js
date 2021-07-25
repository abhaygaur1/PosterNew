import React, {useState} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';



class DesignCat extends React.Component{
constructor()
{
super();
}


render(){
 

  const dataList = [
    {
      CatFullName:'Bhartiya Janta Party',
      CatShortName:'Insta',
      CatImage:'1'
    },
    {
      CatFullName:'Congres Party',
      CatShortName:'Insta',
      CatImage:'2'
    },
    {
      CatFullName:'Bahujan Janta Party',
      CatShortName:'Insta',
      CatImage:'3'
    },
    {
      CatFullName:'Samajwadi Party',
      CatShortName:'Insta',
      CatImage:'4'
    },
    {
      CatFullName:'AAP Party',
      CatShortName:'Insta',
      CatImage:'5'
    } ,
    {
      CatFullName:'Bhartiya Janta Party',
      CatShortName:'Insta',
      CatImage:'6'
    },
    {
      CatFullName:'Congres Party',
      CatShortName:'Insta',
      CatImage:'7'
    },
    {
      CatFullName:'Bahujan Janta Party',
      CatShortName:'BSPInsta',
      CatImage:'8'
    },
    {
      CatFullName:'Samajwadi Party',
      CatShortName:'Insta',
      CatImage:'9'
    }
    
    ];


    var InstaView = [];

    for(let i = 0; i < dataList.length; i++){
      var CatImage = dataList[i].CatImage;
      CatImage = CatImage.toString();
      const CatShortName = dataList[i].CatShortName;

      InstaView.push(
      <View key={i} style={styles.header}>
      
        <Animatable.Image  
                       animation="bounceIn"
                       duraton="1500"
                   source={require('../assets/instapost/1.jpg')}
                   style={styles.picon}
                   resizeMode="stretch"
                   />
                   <Text style={styles.ptext}>{CatShortName}</Text>
                 </View> 
      )
    }
 

    return (
      
      <view >
      <Text style={styles.ptitle}>Insta Banner </Text>
      <ScrollView style={styles.ViewSpace}   horizontal={true} >
{InstaView}
      </ScrollView>
      </view>
      
      );
};
};
  

export default DesignCat;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  picon : {
width:100,
height:100
  },
  ptext:{
    alignContent:'center',
    textAlign:'center',
    fontSize:17
  },
  header:{
    flex:2

  },
  phead :{
    fontSize:24
  },
  picon:{
    width:114,
    height:113
    },
    ptitle:{
      fontSize:20,
      marginLeft:10,
      color:'#333',
      fontWeight: "bold"
      
      },
      ViewSpace:{
        marginLeft:10,
        marginRight:10,
          marginTop:20,
          marginBottom:20,
    
      },
      instabanner:{
        margin:10,
        borderColor:'#f9f9f9'
      }

});
