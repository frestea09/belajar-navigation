import React from 'react'
import {View,Text,Form,StyleSheet} from 'react-native'

class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create(
  {
    container : {
      alignContent : 'center',
      justifyContent : 'center'  
    }
  }
)
export default App