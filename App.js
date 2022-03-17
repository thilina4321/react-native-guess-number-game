import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './components/Header'
import StartGame from './screens/StartGame'

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <StartGame />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%'
  }
})


// import { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   Modal,
// } from "react-native";

// export default function App() {
//   const [items, setItems] = useState([]);
//   const [value, setValue] = useState("");
//   const [visible, setVisible] = useState(false);

//   const addValueToItem = () => {
//     setItems((p) => [...p, { id: items.length + 1, title: value }]);
//     setValue("");
//     setVisible(false)
//   };

//   const removeItem = (id) => {
//     const availableItems = items.filter((item) => item.id !== id);

//     setItems(availableItems);
//   };

//   return (
//     <View style={styles.container}>

//       <Modal animationType='slide' visible={visible}>
//         <View style={styles.form}>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Value"
//             value={value}
//             onChangeText={(e) => setValue(e)}
//           />
//           <Button
//             style={styles.btn}
//             title="Click Me"
//             onPress={addValueToItem}
//           />
//         </View>
//       </Modal>

//       <Button onPress={()=>setVisible(true)} title="Add Item" />

//       <FlatList
//         keyExtractor={(item, index) => index}
//         data={items}
//         renderItem={(itemData) => (
//           <TouchableOpacity onPress={() => removeItem(itemData.item.id)}>
//             <View>
//               <Text style={styles.item}>{itemData.item.title}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         style={styles.items}
//       ></FlatList>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//     width: "100%",
//     marginTop: 50,
//   },
//   form: {
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "flex-end",
//     width: "80%",
//     margin: "10%",
//   },
//   input: {
//     borderBottomColor: "black",
//     borderWidth: 2,
//     padding: 10,
//     width: "100%",
//     marginBottom: 10,
//   },

//   btn: {
//     textAlign: "right",
//     width: 10,
//   },

//   items: {
//     width: "80%",
//     margin: "10%",
//   },

//   item: {
//     width: "90%",
//     padding: 4,
//     borderWidth: 2,
//     color: "black",
//   },
// });
