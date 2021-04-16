import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { VESDK, VideoEditorModal, Configuration } from 'react-native-videoeditorsdk';


export class App extends Component {


    render() {
        let configurstion: Configuration = {
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
            }

        }
        return (
            <View>
                <Button title="edit video" onPress={() => { VESDK.openEditor(require('./assets/sample2.mp4'), configurstion); }} />
                <VideoEditorModal visible={true} video={require('./assets/sample.mp4')}/>
            </View>
        )
    }
}

export default App
