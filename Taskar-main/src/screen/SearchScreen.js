/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import axios from 'axios';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import React, {useEffect, useState} from 'react';
const Header = ({text}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={[{fontWeight: 'bold', fontSize: 18}]}>{text}</Text>

      <Text style={{fontSize: 16}}>see all</Text>
    </View>
  );
};
export default function SearchScreen() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://picsum.photos/v2/list?page=1',
        );
        setImageList(response.data);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const ListHeaderComponent = () => {
    return (
      <View>
        <View style={{marginTop: 30}}>
          <Text style={{fontWeight: 'bold'}}>Discover The World</Text>
        </View>
        <View>
          <TextInput
            style={{
              marginTop: 20,
              paddingLeft: 30,
              height: 40,
              fontSize: 16,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 6,
            }}
            placeholder={'Search'}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Image
            source={{
              uri: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            }}
            style={{width: '100%', height: 200, borderRadius: 20}}
          />
          <View style={{position: 'absolute', bottom: 10, left: 10}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              # Top Search of the Day
            </Text>
          </View>
        </View>
        <Header text={'Trending Hashtags'} />
        <FlatList
          data={imageList}
          renderItem={renderItem}
          horizontal={true}

          // style={{flex:1,height:100,backgroundColor:"pink"}}
        />
        <Header text={'Top Community'} />
        <FlatList
          data={imageList}
          renderItem={renderTopCommunity}
          horizontal={true}

          // style={{flex:1,height:100,backgroundColor:"pink"}}
        />
        <Header text={'Top Nomads'} />
        <FlatList
          data={imageList}
          renderItem={renderNomads}
          horizontal={true}

          // style={{flex:1,height:100,backgroundColor:"pink"}}
        />
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.renderItemContainer}>
        <Image
          source={{uri: item.download_url}}
          style={styles.renderItemImage}
        />

        <View style={styles.authorContainer}>
          <Text style={styles.text}>{item.author}</Text>
        </View>
      </View>
    );
  };
  const renderTopCommunity = ({item, index}) => {
    return (
      <View style={styles.renderItemContainer}>
        <Image
          source={{uri: item.download_url}}
          style={styles.renderItemImage}
        />

        <View style={styles.authorContainer}>
          <Text style={{fontWeight:"400",color:"white"}}>{item.author}</Text>
          <Text style={styles.text}>{item.author}</Text>
        </View>
      </View>
    );
  };
  const renderNomads = ({item, index}) => {
    console.log(item);
    return (
      <View style={styles.renderNomadsStyles}>
        <Image
          source={{uri: item.download_url}}
          style={styles.image}
          //  resizeMethod="center"
        />

        <View style={styles.alignItemsCenter}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {item.author}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList ListHeaderComponent={ListHeaderComponent} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  renderNomadsStyles: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  text: {color: 'white', fontWeight: 'bold'},
  image: {width: 100, height: 100, borderRadius: 100 / 2},
  authorContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
    left: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  renderItemContainer: {marginRight: 20},
  renderItemImage: {width: 200, height: 200, borderRadius: 10},
});
