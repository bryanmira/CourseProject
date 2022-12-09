import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select'
class Input extends Component {
  state = {
    arrayvar: [],
  };
  componentDidMount() {
    this.getTitles();
  }
  getTitles = () => {
    axios
      .get('/api/titles')
      .then((res) => {
        if (res.data) {
          this.setState({
            titles: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  handleChange = (e) => {
    this.setState({
      action: e.target.value,
    });
  };
  onChanges = (e) => {
    this.setState({
      arrayvar: [...this.state.arrayvar, e]
    })
    console.log(e)
    console.log(this.state.arrayvar)
  };

  recommendClick = () => {
    const rec= this.state.arrayvar;
    if (rec && rec.length > 0) {
      axios
        .post('/api/recommend', rec)
        .then((res) => {
          if (res.data) {
            this.setState({ recommended: res.data });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('no recommendation');
    }
  };

  render() {
    let { titles, arrayvar, recommended } = this.state;

    return (
      <div>
        <Select getOptionLabel={(option)=>option.Title}
        getOptionValue ={(option)=>option._id}
        options={titles} onChange={this.onChanges} />


        <ul>
      {arrayvar && arrayvar.length > 0 ? (
        arrayvar.map((title) => {
          return (
            <li key={title._id}>
              {title.Title}
            </li>
          );
        })
      ) : (
        <li>No title(s) chosen</li>
      )}
    </ul>
    <button onClick={this.recommendClick}>Recommend Me A Movie!</button>

    <h3>Result:</h3>
    <ul>
      {recommended && recommended.length > 0 ? (
        recommended.map((title) => {
          return (
            <li key={title._id}>
              {title.Title}
            </li>
          );
        })
      ) : (
        <li>No result</li>
      )}
    </ul>
      </div>
    );
  }
}
export default Input;