import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator(
  {
  Search: SearchScreen, //screen imported from src/screens,
  ResultsShow: ResultsShowScreen
},
{ 
    initialRouteName: 'Search', //initial screen shown to the user 
    defaultNavigationOptions: {  //some options used for every screen like header/footer/etc
        title: 'Business Search'
    }
});

export default createAppContainer(navigator); //have to export a react comp from this file