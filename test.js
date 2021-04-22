

// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
// var ImagePicker = require('react-native-image-picker');

// export default class Test extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       resourcePath: {},
//     };
//   }

//   selectFile = () => {
//     var options = {
//       title: 'Select Image',
//       mediaType: 'image/video', 
//       customButtons: [
//         { 
//           name: 'customOptionKey', 
//           title: 'Choose file from Custom Option' 
//         },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     ImagePicker.showImagePicker(options, res => {
//       console.log('Response = ', res);

//       if (res.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (res.error) {
//         console.log('ImagePicker Error: ', res.error);
//       } else if (res.customButton) {
//         console.log('User tapped custom button: ', res.customButton);
//         alert(res.customButton);
//       } else {
//         let source = res;
//         this.setState({
//           resourcePath: source,
//         });
//       }
//     });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.container}>
//           {/* <Image
//             source={{
//               uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
//             }}
//             style={{ width: 100, height: 100 }}
//           />
//           <Image
//             source={{ uri: this.state.resourcePath.uri }}
//             style={{ width: 200, height: 200 }}
//           />
//           <Text style={{ alignItems: 'center' }}>
//             {this.state.resourcePath.uri}
//           </Text> */}

//           <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
//               <Text style={styles.buttonText}>Select File</Text>
//           </TouchableOpacity>       
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     marginTop:"50%"
//   },
//   button: {
//     width: 250,
//     height: 60,
//     backgroundColor: '#3740ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 4,
//     marginBottom:12    
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 15,
//     color: '#fff'
//   }
// });






















// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { VideoPlayer, Trimmer } from 'react-native-video-processing';

// export default class App extends Component {
//     trimVideo() {
//         const options = {
//             startTime: 0,
//             endTime: 15,
//             quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
//             saveToCameraRoll: true, // default is false // iOS only
//             saveWithCurrentDate: true, // default is false // iOS only
//         };
//         this.videoPlayerRef.trim(options)
//             .then((newSource) => console.log(newSource))
//             .catch(console.warn);
//     }

//     compressVideo() {
//         const options = {
//             width: 720,
//             height: 1280,
//             bitrateMultiplier: 3,
//             saveToCameraRoll: true, // default is false, iOS only
//             saveWithCurrentDate: true, // default is false, iOS only
//             minimumBitrate: 300000,
//             removeAudio: true, // default is false
//         };
//         this.videoPlayerRef.compress(options)
//             .then((newSource) => console.log(newSource))
//             .catch(console.warn);
//     }

//     getPreviewImageForSecond(second) {
//         const maximumSize = { width: 640, height: 1024 }; // default is { width: 1080, height: 1080 } iOS only
//         this.videoPlayerRef.getPreviewForSecond(second, maximumSize) // maximumSize is iOS only
//         .then((base64String) => console.log('This is BASE64 of image', base64String))
//         .catch(console.warn);
//     }

//     getVideoInfo() {
//         this.videoPlayerRef.getVideoInfo()
//         .then((info) => console.log(info))
//         .catch(console.warn);
//     }

//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <VideoPlayer
//                     ref={ref => this.videoPlayerRef = ref}
//                     startTime={30}  // seconds
//                     endTime={120}   // seconds
//                     play={true}     // default false
//                     replay={true}   // should player play video again if it's ended
//                     rotate={true}   // use this prop to rotate video if it captured in landscape mode iOS only
//                     source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
//                     playerWidth={300} // iOS only
//                     playerHeight={500} // iOS only
//                     style={{ backgroundColor: 'black' }}
//                     resizeMode={VideoPlayer.Constants.resizeMode.CONTAIN}
//                     onChange={({ nativeEvent }) => console.log({ nativeEvent })} // get Current time on every second
//                 />
//                 {/* <Trimmer
//                     source={'file:///sdcard/DCIM/....'}
//                     height={100}
//                     width={300}
//                     onTrackerMove={(e) => console.log(e.currentTime)} // iOS only
//                     currentTime={this.video.currentTime} // use this prop to set tracker position iOS only
//                     themeColor={'white'} // iOS only
//                     thumbWidth={30} // iOS only
//                     trackerColor={'green'} // iOS only
//                     onChange={(e) => console.log(e.startTime, e.endTime)}
//                 /> */}
//             </View>
//         );
//     }
// }