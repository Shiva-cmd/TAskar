import axios from 'axios';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import User from 'react-native-vector-icons/Feather';
import Message from 'react-native-vector-icons/MaterialCommunityIcons';

import React, {useEffect, useState} from 'react';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const {height, width} = useWindowDimensions();
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
  const renderItem = ({item, index}) => {
    console.log(item);
    return (
      <View>
        <Image
          source={{uri: item.download_url}}
          style={{
            width: width,
            height: height - 50,
            // aspectRatio: item.width / item.height,
            resizeMode: 'cover',
          }}

          //  resizeMethod="center"
        />

        <View style={[styles.authorContainer, {width: width}]}>
          <Text style={styles.authorText}>{item.author}</Text>
        </View>
        <View style={styles.authorTextContainer}>
          <Text style={styles.authorText}>{item.author}</Text>
          <Text style={{color: 'white', fontSize: 10, width: width / 1.4}}>
            Sunt ad dolore sunt deserunt enim. Commodo et veniam tempor sint et
            enim duis nisi sint sit velit labore voluptate. Eu commodo dolore
            ullamco fugiat enim quis commodo do cupidatat occaecat amet ullamco.
          </Text>
        </View>
        <View style={{position: 'absolute', bottom: 100, right: 10}}>
          <User
            name="user-plus"
            size={24}
            style={{marginBottom: 10}}
            color="white"
          />
          <Message
            name="facebook-messenger"
            size={24}
            style={{marginBottom: 10}}
            color="white"
          />
          <User
            name="heart"
            size={24}
            style={{marginBottom: 10}}
            color="white"
          />
          <Message
            name="share-outline"
            size={24}
            style={{marginBottom: 10}}
            color="white"
          />
          <User
            name="send"
            size={24}
            style={{marginBottom: 10}}
            color="white"
          />
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={imageList}
      renderItem={renderItem}
      pagingEnabled={true}
      // style={{}}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  authorContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 20,
  },
  authorText: {color: 'white', fontWeight: 'bold'},
  authorTextContainer: {position: 'absolute', bottom: 25, marginLeft: 20},
});
