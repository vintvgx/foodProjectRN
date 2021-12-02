import React, { useState } from 'react';
//scroll view allows user to scroll up and down
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState(''); //search used for Yelp API
    const [searchApi, results, errorMessage] = useRestaurants();  
    
    //filters API so we dont receive unwanted data
    //price === '$' || '$$' || '$$$'
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price; 
        });
    };

  return (
    // fits all the content that is on the screen ( flex: 1 )
    // can go around that by using (EMPTY TAG <>) instead of VIEW, all elements will automatically be fitted on the screen
      <View style={{flex: 1}}> 
          <SearchBar 
                //useState for checking what user is typing
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}

                //when user has submitted
                onTermSubmit={() => 
                    searchApi(term)
                }
                />
                {/* trunary expression that looks to see if there is an console.error
                and if there is print errormessage or set to null */}
          {errorMessage ? <Text>{errorMessage}</Text> : null}

                {/* objects in a scroll view can be scrolled up and down */}
          <ScrollView> 
            <ResultsList
                title="Cost Effective"
                results={filterResultsByPrice('$')} 
            />
            <ResultsList
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier" 
            />
            <ResultsList
                results={filterResultsByPrice('$$$')} 
                title="Big Spender"
             />
            </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;