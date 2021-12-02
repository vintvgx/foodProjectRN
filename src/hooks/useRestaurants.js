import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

    //request for yelp api
    //     (business or restaurants) = results
    const [results, setResults] = useState([]);
    

    //used to catch error 
    const [errorMessage, setErrorMessage] = useState('');

    //look up async & await
    const searchApi = async searchTerm => {

        //api network requests / must include search results
       
        try {
            const response = await yelp.get('/search', {
            //extra data that can be retrieved
            params: {
                limit: 50, //equals ('search?limit=50)
                term: searchTerm, //term (for api info) = term (used as useState in projcet)
                location: 'san jose' 
            }
            });
            
            //array of objects stored and set in setter to put into results
            setResults(response.data.businesses)

        } catch (err) {
            //catches error if request is denied 
            setErrorMessage('Something went wrong');
        }
       
    };

    //Call searchAPI when component is first render
    //default api request ran once due to array at end of function

    useEffect(() => {
        searchApi('pasta');
    }, []);



    //returning the things we need and storing in arry
    return [searchApi, results, errorMessage]
};