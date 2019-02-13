import React, { Component } from 'react';
import canyon from './assets/boulderCanyon.jpg';
import Header from './Header';
import Filter from './Filter';
import ListContainer from './ListContainer';
import {coloradoClimbingAreas, distanceFromDenverGroupings} from './data.js';
import './Master.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: coloradoClimbingAreas,
      distances: distanceFromDenverGroupings
    }
  }

  //methods go here
  //learn fetch/catch

  render() {
    return (
      <div className="App">
          <Header climb={this.state.coloradoClimbingAreas}/>
          <Filter />
          <ListContainer distances={this.state.distances}/>
      </div>
    );
  }
}
