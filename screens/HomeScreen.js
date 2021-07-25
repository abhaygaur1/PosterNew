import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,ScrollView,Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import PoliticalCat from '../components/PoliticalCat';
import DesignCat from '../components/DesignCat';
import Logos from '../components/Logos';
import Posters from '../components/Posters';


const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
 
  
  
    return (
<View style={styles.container}>
<ScrollView>
<PoliticalCat />
<PoliticalCat />
<PoliticalCat />
<Logos />




 <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        </ScrollView>
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1 
  } 

});
