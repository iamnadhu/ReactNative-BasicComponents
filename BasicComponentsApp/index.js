import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// import App from './src/components/App';
// import StackNavigation from './src/navigations/StackNavigation';
// import TabNavigation from './src/navigations/TabNavigation';
// import DrawerNavigation from './src/navigations/DrawerNavigation';
import App from './src/project/App';

AppRegistry.registerComponent(appName, () => App);
