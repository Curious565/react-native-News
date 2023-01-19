import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard/index';
//npx react-native run-android
const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.header_title}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(newsBanner => (
              <Image
                style={styles.banner_image}
                source={{uri: newsBanner.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.uu_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  header_title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
  },
});
export default App;
