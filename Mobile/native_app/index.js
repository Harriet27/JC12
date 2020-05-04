/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Sandbox from './Component/Sandbox';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Sandbox);
