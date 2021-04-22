import React, { Component, useState} from 'react'
import { Text, View, Button } from 'react-native'
import { VESDK, VideoEditorModal, Configuration, SerializationExportType } from 'react-native-videoeditorsdk';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


let configuration: Configuration = {
  sticker: {
      categories: [
          {
              identifier: "demo_sticker_category", name: "giisty",
              thumbnailURI: require('./assets/logo.png'), items: [
                  {
                      identifier: "demo_sticker_giisty", name: "giisty",
                     stickerURI: require('./assets/giisty.png')
                  }
              ]
          }
      ]
  },
  export: {
    serialization:{
      enabled: true,
      exportType: SerializationExportType.OBJECT,
    }
  }
}

let serialization = null;

const App = ()=> {

  
    const openEditor = (uri) => {
        // Set up sample video
        let video = { uri: uri};

        VESDK.openEditor(video, configuration, serialization).then(result=>{
          if(result != null) {
            serialization = result.serialization;
          }
        });
      };
    
        
        let GalleryImageLibrary=()=> {
            var options = {
              title: 'Select video',
              mediaType: 'video',
              saveToPhotos: true,
          
              storageOptions: {
                skipBackup: true,
                path: 'images'
              }
            }
            launchImageLibrary(options, response => {
                console.log(response)
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                 openEditor(response.uri)
               }
            });
          }
      


          let CameraImageLibrary=()=> {
            var options = {
              title: 'Select video',
              mediaType: 'video',
              saveToPhotos: true,
          
              storageOptions: {
                skipBackup: true,
                path: 'video' 
              }
            }
            launchCamera(options, response => {
                console.log(response)
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                 openEditor(response.uri)
               }
            });
          }


        return (
            <View>
                <Button title="edit Gallery video" onPress={GalleryImageLibrary} />
                <Button title="edit Camera video" onPress={CameraImageLibrary} />

                
                {/* <Button title="edit Camera video" onPress={() => { VESDK.openEditor(require('./assets/sample2.mp4'), configuration); }} /> */}
                {/* <VideoEditorModal visible={true} video= 'images'/> */}
            </View>
        )
}


export default App




