import React from 'react'
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { Icon } from 'react-native-elements'

export default class ModalPopup extends React.Component {
  state = {
    modalVisible: false
  }

  setModalVisible(value) {
    this.setState({modalVisible: value})
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
          >
          <View>
            <View style={{
              height: 45,
              backgroundColor: '#d3d3d3',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingHorizontal: 10,
              }}>
              <Icon name="close" onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }} />
            </View>
            <View>
              <Text>This is modal</Text>

            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
