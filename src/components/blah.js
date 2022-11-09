// import React, { Component } from 'react';
// import { View } from 'react-native';
// import ExploreButtons from './ExploreButtons';

// export default class Explore extends Component {
//   API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       item: null,
//       dataSource: null,
//       duplicatesRemoved: [],
//     };
//   }

//   getAPIURL(item) {
//     if(!item){
//       return API_URL
//     }
//     return `${API_URL}?brand=${item}`;
//   }

//   async fetchData(item) {
//     try {
//       const url = getAPIURL(item);
//       const response = await fetch(url);
//       const responseJson = await response.json();

//       this.setState({
//         isLoading: false,
//         dataSource: responseJson,
//         item,
//       });

//       const reformattedArray = responseJSON.map(({ brand }) => brand);

//       this.setState({
//         duplicatesRemoved: reformattedArray.filter(
//           (item, index) => reformattedArray.indexOf(item) === index,
//         ),
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async componentDidMount() {
//     fetchData();
//   }

//   render() {
//     const { dataSource, duplicatesRemoved, item } = this.state;
//     return (
//       <View style={{ flex: 1 }}>
//         <ExploreButtons
//           api={dataSource}
//           removedDuplicatesFromAPI={duplicatesRemoved}
//           parentCallback={this.fetchData}
//           makeupApi={getURL(item)}
//         />
//       </View>
//     );
//   }
// }

// export default class ExploreButtons extends Component {
//   getBrandImages = item => {
//     this.props.parentCallback(item);
//   };

//   render() {
//     const { removedDuplicatesFromAPI, api } = this.props;

//     return (
//       <View style={{ flex: 1 }}>
//         <View>
//           <FlatList
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             data={removedDuplicatesFromAPI}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={styles.exploreButtons}
//                 onPress={() => {
//                   this.getBrandImages(item);
//                 }}
//               >
//                 <Text>{item}</Text>
//               </TouchableOpacity>
//             )}
//             keyExtractor={item => item}
//           />
//         </View>
//         <View>
//           <FlatList
//             data={api}
//             renderItem={({ item }) => (
//               <View>
//                 <Image
//                   source={{ uri: item.image_link }}
//                   style={{
//                     alignSelf: 'center',
//                     width: '100%',
//                     height: 300,
//                   }}
//                 />
//               </View>
//             )}
//             keyExtractor={item => item.id.toString()}
//           />
//         </View>
//       </View>
//     );
//   }
// }
