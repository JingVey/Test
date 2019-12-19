import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  SafeAreaView
} from 'react-native';

import ImageElement from './app/components/ImageElement';


export default class ImageGallery extends Component{

  state = {
    modalVisible: false,
    modalImage: require('./app/img/product-1.jpeg'),
    images: [
      require('./app/img/product-1.jpeg'),
      require('./app/img/product-2.jpeg'),
      require('./app/img/product-3.jpeg'),
      require('./app/img/product-4.jpeg'),
      require('./app/img/product-5.jpeg'),
      require('./app/img/product-6.jpeg'),
      require('./app/img/product-7.jpeg'),
      require('./app/img/product-8.jpeg')
    ]
  }

  setModalVisible(visible, imageKey){
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }

  getImage(){
    return this.state.modalImage;
  }

  render(){

    let images = this.state.images.map((val, key) => {
      return <TouchableWithoutFeedback key={key} 
              onPress={() => { this.setModalVisible(true, key)} }>

                <View style={styles.imagewrap}>
                  <ImageElement imgsource={val}></ImageElement>
                </View>

              </TouchableWithoutFeedback>
    });

    return(
      <View style={styles.container}>

        <Modal style={styles.modal}
                animationType={'fade'}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {}}>

                <View style={styles.modal}>
                  <Text style={styles.text} onPress={() => {this.setModalVisible(false)}}>Close</Text>
                  <ImageElement imgsource={this.state.modalImage}></ImageElement>
                </View>

        </Modal>
        <SafeAreaView>
          <ScrollView>
            {images}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee'
  },

  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height/3) - 12,
    width: (Dimensions.get('window').width),
    backgroundColor: '#fff'
  },

  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },

  text: {
    color: '#fff'
  }
});

