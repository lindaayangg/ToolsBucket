import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import SpaceRemover from "./components/Strings/SpaceRemover";
import ExtraSpaceRemover from "./components/Strings/ExtraSpaceRemover";
import DashRemover from "./components/Strings/DashRemover";
import UnderscoreRemover from "./components/Strings/UnderscoreRemover";
import DuplicateLineRemover from "./components/Strings/DuplicateLineRemover";
import EmptyLineRemover from "./components/Strings/EmptyLineRemover";
import LineBreakRemover from "./components/Strings/LineBreakRemover";
import CamelCaseGenerator from "./components/Strings/CamelCaseGenerator";
import SnakeCaseGenerator from "./components/Strings/SnakeCaseGenerator";
import KababCaseGenerator from "./components/Strings/KababCaseGenerator";
import SnakeCase2CamelCaseConverter from "./components/Strings/SnakeCase2CamelCaseConverter";
import CamelCase2SnakeCaseConverter from "./components/Strings/CamelCase2SnakeCaseConverter";
import StringReverser from "./components/Strings/StringReverser";
import WordReverser from "./components/Strings/WordReverser";
import WordSorter from "./components/Strings/WordSorter";
import TextLineReverser from "./components/Strings/TextLineReverser";
import TextLineSorter from "./components/Strings/TextLineSorter";
import Image2Base64Converter from "./components/Strings/Image2Base64Converter";
import Base642ImageConverter from "./components/Strings/Base642ImageConverter";

const routing = (
  <Router>
    <SidebarMenu/>
    <Switch>
      <Route exact path="/" component={Home}/>
      {/*strings*/}
      <Route exact path="/space-remover" component={SpaceRemover}/>
      <Route exact path="/extra-space-remover" component={ExtraSpaceRemover}/>
      <Route exact path="/dash-remover" component={DashRemover}/>
      <Route exact path="/underscore-remover" component={UnderscoreRemover}/>
      <Route exact path="/duplicate-line-remover" component={DuplicateLineRemover}/>
      <Route exact path="/empty-line-remover" component={EmptyLineRemover}/>
      <Route exact path="/line-break-remover" component={LineBreakRemover}/>
      <Route exact path="/camel-case-generator" component={CamelCaseGenerator}/>
      <Route exact path="/snake-case-generator" component={SnakeCaseGenerator}/>
      <Route exact path="/kabab-case-generator" component={KababCaseGenerator}/>
      <Route exact path="/snake-case-to-camel-case-converter" component={SnakeCase2CamelCaseConverter}/>
      <Route exact path="/camel-case-to-snake-case-converter" component={CamelCase2SnakeCaseConverter}/>
      <Route exact path="/string-reverser" component={StringReverser}/>
      <Route exact path="/word-reverser" component={WordReverser}/>
      <Route exact path="/word-sorter" component={WordSorter}/>
      <Route exact path="/text-line-reverser" component={TextLineReverser}/>
      <Route exact path="/text-line-sorter" component={TextLineSorter}/>
      <Route exact path="/image-to-base64-converter" component={Image2Base64Converter}/>
      <Route exact path="/base64-to-image-converter" component={Base642ImageConverter}/>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));