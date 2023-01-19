import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {height: Dimensions.get('window').height / 4},
  title: {
    fontWeight:'bold',
    fontSize:19,
    color: 'black',
  },
  description: {
    paddingTop:10,
    fontSize:15
  },
  inner_container: {padding: 10},
  author:{
    fontStyle:'italic',
    textAlign:'right',
    color: 'black',
  }
});
