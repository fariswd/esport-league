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
  state = {
    lists: [
      {
        title: 'EpicenterXL: NewBee VS Secret Game 1 BO3',
        from: 'Liga Game Esport',
        createdAt: 'Kamis, 2 April, 2018',
        thumb: 'https://i.ytimg.com/vi/8zyW84QO8KI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIZCGAE=&rs=AOn4CLCg2kHE-rgsWOyhQ1zz7F1qU3w4bg',
        url: 'https://youtu.be/F5MbVd-NbPk?t=1h25m3s',
        matchId: '3860626926'
      }, {
        title: 'GESC Indonesia: EG VS Navi Game 2 BO3',
        from: 'Liga Game Esport',
        createdAt: 'Kamis, 3 April, 2018',
        thumb: 'https://i.ytimg.com/vi/9AinhrzDBIM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIZCGAE=&rs=AOn4CLD_oRLkEQgWK6yeMoCE2LHVu2IZzw',
        url: 'https://youtu.be/F5MbVd-NbPk?t=2h25m3s',
        matchId: '3860626926'
      },
    ]
  }

  renderItem(item) {
    const { navigate } = this.props.navigation
    return (
      <ListItem
        key={item.matchId}
        onPress={() => navigate('Detail', item)}
        wrapperStyle={{alignItems: 'flex-start'}}
        avatar={
          <Image
            style={{height: 100, width: 200}}
            resizeMode="cover"
            source={{uri: item.thumb}}
          />
        }
        title={
          <View style={{}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>{item.title}</Text>
          </View>
        }
        titleContainerStyle={{paddingHorizontal: 5}}
        subtitle={
          <View>
            <Text style={{fontSize: 12}}>{`${item.from} - ${item.createdAt}`}</Text>
          </View>
        }
        subtitleContainerStyle={{paddingHorizontal: 5}}
        hideChevron
      />
    )
  }

  render() {
    return (
      <View>
        <List
          containerStyle={{ marginTop: 0 }}
          >
            {this.state.lists.map((list, i) => {
              return this.renderItem(list, i)
            })}
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
