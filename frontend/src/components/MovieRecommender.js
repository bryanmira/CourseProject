import React, { Component } from 'react';
import Input from './Input';
class MovieRecommender extends Component {
  render() {
    return (
      <div>
        <h1>Similar Title Movie Recommender</h1>
        <Input />
      </div>
    );
  };
}
export default MovieRecommender;