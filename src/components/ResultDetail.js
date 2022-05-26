import react from "react";
import {View , Image , Text , StyleSheet} from 'react-native';


// The building block that will be rendered in the movies FlatList 
const ResultDetail = ({result}) => {
    return <View style={styles.container}>       
        <Text style={styles.title}>{result.title}</Text> 
        <Image style={styles.Image} source={{uri :"http://image.tmdb.org/t/p/"+"w342"+result.poster_path}}/>
        <Text style={styles.overview}>{result.overview}</Text>
        <Text style={styles.releaseDate}>Release Date:  {result.release_date}</Text>
        <View style={styles.lineStyle} />
    </View>
    
};

// Styling Components
const styles = StyleSheet.create({
  container:{
    flexShrink:1,
    marginHorizontal:15,
    marginBottom:10,
    borderColor:'black',
  },  
  Image:{
    flex:1,
    flexShrink:1,
    width:280,
    height:400,
    borderRadius:15,
    marginBottom:15,
    borderColor:'black',
    borderWidth:3,
    alignSelf:"center"
  },
  title:{
      fontWeight:"bold",
      fontSize:30,
      alignSelf:"center",
      textAlign:"center",
      marginBottom:15
  },
  overview:{
    flexShrink:1,
    fontSize:18,
    textAlign:"justify",
    fontWeight:"bold",
    marginBottom:10,
  },
  releaseDate:{
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:15,
  },
  lineStyle: {
    borderWidth:3,
    borderColor: "#dcdcdc",
    marginHorizontal: 10,
    marginVertical: 10,
  }
});

export default ResultDetail;