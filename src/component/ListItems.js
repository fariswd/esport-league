import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native'
import {
  List,
  ListItem,
} from 'react-native-elements'

export default class ListItems extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <List
          containerStyle={{ marginTop: 0 }}
          >
          <ListItem
            onPress={() => navigate('Detail')}
            wrapperStyle={{alignItems: 'flex-start'}}
            avatar={
              <Image
                style={{height: 100, width: 200}}
                resizeMode="cover"
                source={{uri: 'https://i.ytimg.com/vi/8zyW84QO8KI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIZCGAE=&rs=AOn4CLCg2kHE-rgsWOyhQ1zz7F1qU3w4bg'}}
              />
            }
            title={
              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>EpicenterXL: NewBee Vs Sec...</Text>
              </View>
            }
            titleContainerStyle={{paddingHorizontal: 5}}
            subtitle={
              <View>
                <Text style={{fontSize: 12}}>Liga Game - 1 jam yang lalu</Text>
              </View>
            }
            subtitleContainerStyle={{paddingHorizontal: 5}}
            hideChevron
          />
          <ListItem
            onPress={() => console.log('---here2')}
            wrapperStyle={{alignItems: 'flex-start'}}
            avatar={
              <Image
                style={{height: 100, width: 200}}
                resizeMode="cover"
                source={{uri: 'https://i.ytimg.com/vi/9AinhrzDBIM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIZCGAE=&rs=AOn4CLD_oRLkEQgWK6yeMoCE2LHVu2IZzw'}}
              />
            }
            title={
              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>GESC Indonesia: EG Vs Navi...</Text>
              </View>
            }
            titleContainerStyle={{paddingHorizontal: 5}}
            subtitle={
              <View>
                <Text style={{fontSize: 12}}>Liga Game - 1 jam yang lalu</Text>
              </View>
            }
            subtitleContainerStyle={{paddingHorizontal: 5}}
            hideChevron
          />
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})
