import React from "react";
import { StyleSheet, View } from "react-native";
import ResultList from "./src/components/ResultList";
import useResult from "./src/hooks/useResult";


export default function App() {

  //useResult() : A Hook that Returns the needed States and Functions
  const [result,getMorePages,isLoading] = useResult();

  return (
    <>
      <View style={{flex:1}}>
        <ResultList  result={result} moreData={getMorePages} isLoading={isLoading}/>
      </View>
    </>
  );
};

 // Styling components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
