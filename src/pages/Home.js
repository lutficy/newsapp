import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home ({navigation}) {

  const [data, setData] = useState()

  const getData = async () => {
    try {
      const result = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'id',
          category: '',
          apiKey: 'c85189c982284291a47b24789d0e8591'
        }
      })
      setData(result.data.articles)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <View style={{backgroundColor: 'white', borderBottomWidth: 0.5, height: 60, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Home</Text>
      </View>
      {/* {console.log(data)} */}
      <ScrollView>
        {data && data.map((item, index) => {
          return <>
            <TouchableOpacity key={index} activeOpacity={0.7} onPress={() => navigation.navigate('DetailsNews',{data:item})}>
              <View style={{paddingHorizontal: 6, backgroundColor: 'white', marginVertical: 10, flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
                <View>
                  <Text style={{ fontSize: 14, paddingLeft: 10, fontWeight: 'bold', maxWidth: 250 }}>{item.title}</Text>
                  <Text style={{ paddingTop: 8, fontSize: 11, paddingLeft: 10, fontWeight: '500' }}>{item.author}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </>
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

// c85189c982284291a47b24789d0e8591


