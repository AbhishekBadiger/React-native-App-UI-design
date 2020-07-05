import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';



export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Welcome}>welcome!</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
        style={styles.userBtn}
        onPress={() =>{
          navigation.navigate('LoginScreen')
       }}
        >
          <Text style={styles.btnTxt}>Get started!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39cccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: "#111111", 
  },
  userBtn: {
    backgroundColor: "#DDDDDD",
    padding: 15,
    width: "45%"
  },
  btnTxt:{
    fontSize: 18,
    textAlign: "center"
  }
});
