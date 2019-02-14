import React, { Component } from 'react';
import canyon from './assets/boulderCanyon.jpg';
import Header from './Header';
import Filter from './Filter';
import ListContainer from './ListContainer';
import { coloradoClimbingAreas, distanceFromDenverGroupings } from './data';
import './Master.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: coloradoClimbingAreas,
      distances: distanceFromDenverGroupings,
      filterAreas: ["Boulder Canyon"],
      filterTypes: [],
      searchString: ''
    }
  }

  updateFromFilter = (areas, types) => {
    this.setState({
      filterAreas: areas,
      filterTypes: types
    })
  }

  handleSearch = (value) => {
    console.log(value)
    this.setState({searchString: value})
  }

  //methods go here
  //learn fetch/catch

  render() {
    return (
      <div className="App">
          <Header search={this.handleSearch}/>
          <Filter climb={this.state.areas}
                  updateFromFilter={this.updateFromFilter}/>
          <ListContainer areaName={this.state.filterAreas} areaAndRoutes={this.state.areas}/>
      </div>
    );
  }
}
