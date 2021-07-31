import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import HeaderMovies from "../components/HeaderMovies";

export default function Movies(props) {
    const navigate = props.navigation.navigate
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            let response = await fetch('http://omdbapi.com/?apikey=47c9f168&s=avengers');
            let json = await response.json();
            setData(json.Search);
            console.log(json)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const renderItem = ({item}) => {
        return (
            <View style={{
                borderWidth: 1, 
                borderColor: 'grey', 
                paddingVertical: 10, 
                padding: 5, 
                marginVertical: 13,
                borderRadius: 10
                }}>
                <View>
                    <TouchableOpacity onPress={ () => navigate('Detail Movies') }>
                        <Image style={{ width: 350, height: 350, borderRadius: 5, marginLeft: 3}}
                            source={{ uri: item.Poster }}
                        />
                    </TouchableOpacity>

                    <View>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold'
                            }}>{item.Title}
                        </Text>

                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold'
                            }}>{item.Year}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <HeaderMovies />
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdbID}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
