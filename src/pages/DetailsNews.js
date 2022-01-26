import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DetailsNews = ({ route }) => {
  return (
    <>
      {console.log(route.params.data)}
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View>
          <View style={{ paddingBottom: 10, paddingTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{route.params.data.title}</Text>
          </View>
          <Image style={{ width: '100%', height: '50%' }} source={{ uri: route.params.data.urlToImage }} />
          <Text style={{marginTop: 8}}>{route.params.data.author}</Text>
          <Text style={{paddingTop: 15}}>{route.params.data.content}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailsNews;

const { WIDTH, HEIGHT } = Dimensions.get('window')

const styles = StyleSheet.create({});
