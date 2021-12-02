import React, {useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


//onTermChange is prop being passed from SearchScreen.js
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
      <View style={styles.backgroundStyle}>
          <Feather name="search" style={styles.iconStyle}/>
         <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="search" 
            style={styles.inputStyle}
            value={term}
            /* Shortned version points a reference to the functions, 
              calls back the functions auto-
               matically know the variable
            */
            //passed from the parent component
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}

            /* Long version of above func

              onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}


              onChangeText={onTermChange}
              onEndEditing={onTermSubmit} */

             />
      </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        marginTop: 10,
        marginBottom: 10,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',

    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center', //can align child element with parent
        marginHorizontal: 15
    }
});

export default SearchBar;