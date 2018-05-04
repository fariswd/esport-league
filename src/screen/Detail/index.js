import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
  StyleSheet,
  WebView,
} from 'react-native'
import { Icon, Button } from 'react-native-elements'

import styles from './styles'
import * as Texts from '../../component/TextStyle'

const {height, width} = Dimensions.get('window');

export default class Detail extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {
      title,
     } = navigation.state.params
    return { title: title, }
  }

  handleLinks(url) {
    Linking.openURL(url)
  }
  render() {
    const {
      title,
      from,
      createdAt,
      thumb,
      url,
      matchId,
     } = this.props.navigation.state.params
    return (
      <View>
        <TouchableOpacity
          style={{height: 200, width: width}}
          onPress={() => this.handleLinks(url)}>
          <Image source={{uri: thumb}}
            style={{height: 200, width: width}}
            resizeMode="cover"/>
            <View style={{position: 'absolute', left: 0, top: 0}} >
              <View style={{flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: 200, width: width}}>
                <View style={{
                  flex: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60, width: 60,
                  borderRadius: 60,
                  borderColor: '#666',
                  borderWidth: 2,
                  }}>
                  <Icon
                    type="font-awesome"
                    name="play"
                    size={40}
                    color='#666'
                    iconStyle={{marginLeft: 5}}
                  />
                </View>
              </View>
            </View>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={Texts.TitleBold}>{title}</Text>
          <Text style={Texts.Small}>{from}</Text>
          <Text style={Texts.Small}>{createdAt}</Text>
          <Button
            containerViewStyle={{marginTop: 10}}
            title={'<OPENDOTA />'}
            onPress={() => this.props.navigation.navigate('WebView', {matchId, type: 'opendota'})}
            />
          <Button
            containerViewStyle={{marginTop: 10}}
            title={'DOTABUFF'}
            onPress={() => this.props.navigation.navigate('WebView', {matchId, type: 'dotabuff'})}
            />
        </View>
      </View>
    )
  }
}
