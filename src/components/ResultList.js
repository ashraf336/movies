import React from "react";
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = ({  result, moreData , isLoading }) => {

// In case the fetched results are NULL   
if(!result.length){
  return null;
}

  return (
    <View style={styles.Container}>

      <Text style={styles.Title}>InstaBug</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={result}
        keyExtractor={(result) => result.id}
        onEndReached={moreData}
        onEndReachedThreshold={0}
        initialNumToRender={3}
        ListFooterComponent={<ActivityIndicator animating={isLoading} color={"red"} size={70}/>}
        renderItem={({ item }) => {
          return (<View style={{flex:1}}>
          <ResultDetail result={item} />
          </View>)
        }}
      />
    </View>
  );
};

// Styling Components
const styles = StyleSheet.create({
  Container:{
      flex:1,
      backgroundColor:"#e6e6fa",
  },  
  Title: {
    fontWeight: "bold",
    fontSize: 40,
    marginLeft: 15,
    marginBottom:5,
    marginTop:25,
    alignSelf:"center",
  },
});

export default ResultList ;
